class RefugeesLoader {
    refugees;

    constructor(path) {
        this.path = path;
    }

    async load_data() {
        this.refugees = await d3.dsv(";", this.path);
        // return this.refugees
        const parseTime = d3.timeParse("%d/%m/%Y");
        return this.refugees.map(csv => [parseTime(csv['data_date']), parseFloat(csv['individuals'])])
    }
}

class SanctionsLoader {
    sanctions;
    keys;

    constructor(path) {
        this.path = path;
    }

    async load_data() {
        this.sanctions = await d3.csv(this.path);
        const parseTime = d3.timeParse("%Y-%m-%d");

        this.keys = Object.keys(this.sanctions[0]);
        const countries = this.keys.filter(k => k!="date");

        return this.sanctions.flatMap(csv =>
            countries.map(c => 
                ({'date':parseTime(csv['date']), 'country':c, nsanctions:csv[c]})
            )
        );
    }
}

class SentimentLoader {
    sentiment;

    constructor(path) {
        this.path = path;
    }

    async load_data() {
        this.sentiment = await d3.dsv(",", this.path);
        const parseTime = d3.timeParse("%Y-%m-%d");
        return this.sentiment.map(csv => [{
            'date':parseTime(csv['date']), 
            'sentiment':csv['sentiment'],
            'emotion': csv['emotion']
        }])
    }
}

// --------------------------------------------------------------------------------


function BarChart(data, {
    x = (d, i) => i, 
    y = d => d, 
    marginTop = 20, 
    marginRight = 20,
    marginBottom = 150, 
    marginLeft = 60, 
    width = 100,
    height = 400, 
    xDomain, 
    xRange = [marginLeft, width - marginRight], 
    yType = d3.scaleLinear,
    yDomain,
    yRange = [height - marginBottom, marginTop],
    xPadding = 0.1, 
    yFormat, 
    yLabel,
    color = "#0e2f44" 
} = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);

    // Compute default domains, and unique the x-domain.
    if (xDomain === undefined) xDomain = X;
    if (yDomain === undefined) yDomain = [d3.min(Y), d3.max(Y)];
    xDomain = new d3.InternSet(xDomain);

    // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
    const yScale = yType(yDomain, yRange);
    xDomain = [d3.min(X), d3.max(X)]
    const xAxis = d3.axisBottom(d3.scaleTime(xDomain, xRange)).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

    // Get and format tooltip for hover
    var tooltip = d3.select(".refugees_tooltip")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("text-align", "center")
        .style("width", "fit-content")
        .style("z-index", "10");

    // Declare hovering enter behavior
    const mouseover = function(event, d) {
        tooltip
            .style("opacity", 1);
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1);
    }
    // Declare hovering on movement behavior
    const mousemove = function(event, d) {
        tooltip.html("<strong>" + X[d].toDateString() + "</strong> <br>" + "Total number of refugees: " + Y[d])
            .style("left", (d3.pointer(event)[0] +10) + "px")
            .style("top", (d3.pointer(event)[1]-20) + "px");
    }
    // Declare hovering out behavior
    const mouseout = function() {
        tooltip
            .style("opacity", 0);
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.7);
    }

    // Create plot space
    const svg = d3.select("#refugees_data").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", color)
            .attr("text-anchor", "start")
            .text(yLabel));

    // Create the bars
    const bar = svg.append("g")
        .attr("fill", color)
        .selectAll("rect")
        .data(I)
        .join("rect")
        .attr("x", i => xScale(X[i]))
        .attr("y", i => yScale(Y[i]))
        .attr("height", i => yScale(0) - yScale(Y[i]))
        .attr("width", xScale.bandwidth())
        .attr("fill", color)
        .style("opacity", 0.7)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);
    
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);
}

// --------------------------------------------------------------------------------

function StackedBarChart(data, {
    x = (d, i) => i, 
    y = d => d, 
    z = () => 1, 
    marginTop = 30, 
    marginRight = 0, 
    marginBottom = 30,
    marginLeft = 40,
    width = 640, 
    height = 400, 
    xDomain, 
    xRange = [marginLeft, width - marginRight], 
    xPadding = 0.1, 
    yType = d3.scaleLinear,
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    zDomain, 
    offset = d3.stackOffsetDiverging, 
    order = d3.stackOrderNone,
    yFormat,
    yLabel,
    colors = d3.schemeTableau10,
} = {}) {

    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);

    // Compute default x- and z-domains, and unique them.
    if (xDomain === undefined) xDomain = X;
    if (zDomain === undefined) zDomain = Z;
    xDomain = new d3.InternSet(xDomain);
    zDomain = new d3.InternSet(zDomain);

    // Omit any data not present in the x- and z-domains.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

    // Compute a nested array of for each stacked bar
    const series = d3.stack()
        .keys(zDomain)
        .value(([x, I], z) => Y[I.get(z)])
        .order(order)
        .offset(offset)
    (d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
    .map(s => s.map(d => Object.assign(d, {i: d.data[1].get(s.key)})));

    // Compute the default y-domain.
    if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
    const yScale = yType(yDomain, yRange);
    const color = d3.scaleOrdinal(zDomain, colors);

    xDomain = [d3.min(X), d3.max(X)];
    const xAxis = d3.axisBottom(d3.scaleTime(xDomain, xRange)).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

    // Format the tooltip
    var tooltip = d3.select(".sanctions_tooltip")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("text-align", "center")
        .style("width", "fit-content")
        .style("z-index", "10");

    // Declare tooltip enter behavior
    const mouseover = function(event, d) {
        tooltip
            .style("opacity", 1)

        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
    }
    // Declare tooltip movement behavior
    const mousemove = function(event, d) {
        tooltip.html(
            "<strong>" + d.data[0].toDateString() + "</strong> <br>" +
            "Number of Sanctions: " + d[1] + "<br>" +
            "Issuing Country: " + [...d.data[1].entries()].filter(([k, v])=> v===d.i)[0][0])
        .style("left", (d3.pointer(event)[0] +10) + "px")
        .style("top", (d3.pointer(event)[1]-20) + "px")
    }
    // Declare tooltip on exit behavior
    const mouseout = function() {
        tooltip
            .style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.7);
    }

    // Create plot space
    const svg = d3.select("#sanctions_data")
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", color)
            .attr("text-anchor", "start")
            .text(yLabel));

    const bar = svg.append("g")
    .selectAll("g")
    .data(series)
    .join("g")
        .attr("fill", ([{i}]) => color(Z[i]))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
        .style("opacity", 0.7)
        .attr("x", ({i}) => xScale(X[i]))
        .attr("y", ([y1, y2]) => Math.min(yScale(y1), yScale(y2)))
        .attr("height", ([y1, y2]) => Math.abs(yScale(y1) - yScale(y2)))
        .attr("width", xScale.bandwidth())
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);

    svg.append("g")
        .attr("transform", `translate(0,${yScale(0)})`)
        .call(xAxis);
}

// --------------------------------------------------------------------------------


function SentimentComponent({
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    get_data = () => {},
    previous_button_id,
    next_button_id
} = {}) {

    // Declare draw function for container
    function draw(id_to_draw) {
        const data = get_data(id_to_draw);

        // Declare appearing transition
        const appear = function(d, i) {
            d3.select(this)
                .style("opacity", 0)
                .transition()
                .duration(1000)
                .style("opacity", 1)
        }

        // Format sentiment container
        const div = d3.select("#sentiment_data")
            .style("background-color", "#e9e9e9")
            .attr("class", "box column_aligned")
            .data(data);

        // Remove old data
        div.selectAll("div")
            .remove();

        // Create date info
        const date = div.append("div")
            .each(appear)
            .attr("class", "simple_centered")
            .append("p")
            .text(d => d.date.toDateString());

        const info = div.append("div")
            .attr("class", "row_aligned");

        // Create sentiment behavior 
        const sentiment = info.append("div")
            .attr("class", "column_aligned simple_centered")
            .style("padding", "1%")
        sentiment.append("h3")
            .each(appear)
            .text("Sentiment")
        sentiment.append("img")
            .each(appear)
            .attr("src", d=>`/../../pictures/world_reactions/sentiment_${d.sentiment}.png`)
            .style("width", "60px")
            .style("height", "60px")
            .style("margin", "10px");
        sentiment.append("p")
            .each(appear)
            .text(d => d.sentiment);

        // Create emotion data
        const emotion = info.append("div")
            .attr("class", "column_aligned simple_centered")
            .style("padding", "1%")
        emotion.append("h3")
            .each(appear)
            .text("Emotion")
        emotion.append("img")
            .each(appear)
            .attr("src", d=>`/../../pictures/world_reactions/emotion_${d.emotion}.png`)
            .attr("width", "60px")
            .style("height", "60px")
            .style("margin", "10px");
        emotion.append("p")
            .each(appear)
            .text(d => d.emotion);
    }

    draw(0);

    // Link buttons to navigating behavior
    d3.select("#"+next_button_id).on("click", () => draw(1))
    d3.select("#"+previous_button_id).on("click", () => draw(-1))



    
}
