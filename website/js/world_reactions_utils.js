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
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = d => d, // given d in data, returns the (quantitative) y-value
    title, // given d in data, returns the title text
    marginTop = 20, // the top margin, in pixels
    marginRight = 20, // the right margin, in pixels
    marginBottom = 150, // the bottom margin, in pixels
    marginLeft = 60, // the left margin, in pixels
    width = 100, // the outer width of the chart, in pixels
    height = 400, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // y-scale type
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "#0e2f44" // bar fill color
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

    // Compute titles.
    if (title === undefined) {
        const formatValue = yScale.tickFormat(100, yFormat);
        title = i => `${X[i]}\n${formatValue(Y[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    var tooltip = d3.select(".refugees_tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background", "#808080")
        .text("Info box");

    const mouseover = function(event, d) {
        d3.select(this)
            .attr("fill", "#000080")
        tooltip.text(`${Y[d]} ${X[d]}`);
        tooltip.style("visibility", "visible");
    }
    const mousemove = function(event, d) {
        tooltip.style("top", (event.pageY-10)+"px")
            .style("left",(event.pageX+10)+"px");
    }
    const mouseout = function() {
        d3.select(this)
            .attr("fill", color);
        tooltip.style("visibility", "hidden")
        tooltip.selectAll('tspan').remove();
    }

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
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);

    if (title) bar.append("title")
        .text(title);
    
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);



    

    var data = [4, 8, 15, 16, 23, 42];

    var x = d3.scaleLinear([0, d3.max(data)], [0, 420]);
}

// --------------------------------------------------------------------------------

function StackedBarChart(data, {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = d => d, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    marginTop = 30, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xDomain, // array of x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    colors = d3.schemeTableau10, // array of colors
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

    // Compute a nested array of series where each series is [[y1, y2], [y1, y2],
    // [y1, y2], …] representing the y-extent of each stacked rect. In addition,
    // each tuple has an i (index) property so that we can refer back to the
    // original data point (data[i]). This code assumes that there is only one
    // data point for a given unique x- and z-value.
    const series = d3.stack()
        .keys(zDomain)
        .value(([x, I], z) => Y[I.get(z)])
        .order(order)
        .offset(offset)
    (d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
    .map(s => s.map(d => Object.assign(d, {i: d.data[1].get(s.key)})));

    // Compute the default y-domain. Note: diverging stacks can be negative.
    if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
    const yScale = yType(yDomain, yRange);
    const color = d3.scaleOrdinal(zDomain, colors);

    xDomain = [d3.min(X), d3.max(X)];
    const xAxis = d3.axisBottom(d3.scaleTime(xDomain, xRange)).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

    // Compute titles.
    if (title === undefined) {
    const formatValue = yScale.tickFormat(100, yFormat);
    title = i => `${X[i]}\n${Z[i]}\n${formatValue(Y[i])}`;
    } else {
    const O = d3.map(data, d => d);
    const T = title;
    title = i => T(O[i], i, data);
    }

    var tooltip = d3.select(".sanctions_tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background", "#808080")
        .text("Info box");

    const mouseover = function(event, d) {
        d3.select(this)
            .attr("fill", "#000080")
        const displayText = `
            ${d[1]}
            ${d.data[0]}
            ${[...d.data[1].entries()].filter(([k, v])=> v===d.i)[0][0]}
        `

        tooltip.text(displayText);
        tooltip.style("visibility", "visible");
    }
    const mousemove = function(event, d) {
        const [x, y] = d3.pointer(event);
        console.log(x, y, height)

        // tooltip
        //   .attr('transform', `translate(${x}, ${y+height})`);

        tooltip.style("top", (event.pageY-140)+"px")
            .style("left",(event.pageX-screen.width/2+10)+"px");

        // tooltip.style("top", (x-100)+"px")
        //     .style("left",(y-100)+"px");
    }
    const mouseout = function() {
        d3.select(this)
            .attr("fill", color);
        tooltip.style("visibility", "hidden")
        tooltip.selectAll('tspan').remove();
    }

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
        .attr("x", ({i}) => xScale(X[i]))
        .attr("y", ([y1, y2]) => Math.min(yScale(y1), yScale(y2)))
        .attr("height", ([y1, y2]) => Math.abs(yScale(y1) - yScale(y2)))
        .attr("width", xScale.bandwidth())
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);

    if (title) bar.append("title")
        .text(({i}) => title(i));

    svg.append("g")
        .attr("transform", `translate(0,${yScale(0)})`)
        .call(xAxis);

    return Object.assign(svg.node(), {scales: {color}});
}

// --------------------------------------------------------------------------------


function SentimentComponent({
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    get_data = () => {}
} = {}) {

    function draw() {
        const data = get_data();

        const appear = function(d, i) {
            d3.select(this)
                .style("opacity", 0)
                .transition()
                .duration(1000)
                .style("opacity", 1)
        }

        const div = d3.select("#sentiment_data")
            .style("background-color", "rgb(132, 128, 128)")
            .style("margin-right", "20%")
            .style("margin-left", "20%")
            .style("border-radius", "20px")
            .data(data);

        div.selectAll("div")
            .transition()
            .duration(300)
            .style("opacity", 0)
            .remove();

        const date = div.append("div")
            .each(appear)
            .style("opacity", 1)
            .style("width", "100%")
            .style("height", "20%")
            .attr("class", "centered")
            .text(d => d.date);

        const info = div.append("div")
            .style("width", "100%")
            .style("height", "80%")
            .attr("class", "row_aligned");

        const sentiment = info.append("div")
            .attr("class", "centered")
            .style("width", "70%")
            .style("height", "50%")
            .style("padding", "1%")
        sentiment.append("h3")
            .each(appear)
            .text("Sentiment")
        sentiment.append("img")
            .each(appear)
            .attr("src", d=>`/../pictures/world_reactions/sentiment_${d.sentiment}.png`)
            .attr("width", "60px")
            .style("margin", "10px");
        sentiment.append("p")
            .each(appear)
            .text(d => d.sentiment);

        const emotion = info.append("div")
            .attr("class", "centered")
            .style("width", "70%")
            .style("height", "50%")
            .style("padding", "1%")
        emotion.append("h3")
            .each(appear)
            .text("Emotion")
        emotion.append("img")
            .each(appear)
            .attr("src", d=>`/../pictures/world_reactions/emotion_${d.emotion}.png`)
            .attr("width", "60px")
            .style("margin", "10px");
        emotion.append("p")
            .each(appear)
            .text(d => d.emotion);
    }

    draw();

    d3.select("#date_button").on("click", draw)


    
}
