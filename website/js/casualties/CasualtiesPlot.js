function plot_casualties(casualtiesLoader) {
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 1200 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
    let viewBoxWidth = width * 1.1;
    let viewBoxHeight = height * 1.1;
    const r = 5;
    const svg = d3.select("#casualties_plot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight)
        .attr("height", height + margin.top + margin.bottom)
        .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.zoomTransform(this))
        }))
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    const dateScale = d3.scaleTime()
        .domain([d3.min(Array.from(casualtiesLoader.date_to_civilians_killed.keys())),
            d3.max(Array.from(casualtiesLoader.date_to_civilians_killed.keys()))])
        .range([0, width]);
    // Add Y axis
    const valuesScale = d3.scaleLinear()
        .domain([0, 5000])
        .range([height, 0]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(dateScale));
    svg.append("g")
        .call(d3.axisLeft(valuesScale));

    plot(casualtiesLoader, casualtiesLoader.all, svg, r, dateScale, valuesScale)
}

function plot(casualtiesLoader, data, svg, r, dateScale, valuesScale) {
    const colors = d3.scaleOrdinal().domain(casualtiesLoader.all_groups).range(d3.schemeSet2);
    let to_line = d3.line()
        .x(function (d) {
            return dateScale(+d[0])
        })
        .y(function (d) {
            return valuesScale(+d[1])
        })
    let Tooltip = d3.select("#tooltip-casualties")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("text-align", "center")
        .style("width", "fit-content")
    let mouseover = function (d) {
        Tooltip
            .style("opacity", 1)
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
    }
    let mousemove = (event, d) => {
        // console.log(event);
        // console.log(d);
        Tooltip
            .html(d[0].toDateString() + "<br>" + "total: " + d[1])
            .style("left", (d3.pointer(event)[0] + 70) + "px")
            .style("top", (d3.pointer(event)[1]) + "px")
    }
    let mouseleave = function (d) {
        Tooltip
            .style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }
    // Add the lines for all 4 categories
    svg.selectAll("myLines")
        .data(data)
        .join("path")
        .attr("class", d => d.name)
        .attr("d", d => to_line(d.values))
        .attr("stroke", d => colors(d.name))
        .style("stroke-width", 2)
        .style("fill", "none");

    // // Add the points
    svg.selectAll("myDots")
        .data(data)
        .join('g')
        .style("fill", d => colors(d.name))
        .attr("class", d => d.name)
        .selectAll("myPoints")
        .data(d => d.values)
        .join("circle")
        .attr("cx", d => dateScale(d[0]))
        .attr("cy", d => valuesScale(d[1]))
        .attr("r", r)
        .attr("stroke", "white")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

    svg.selectAll("myLegend")
        .data(data)
        .join('g')
        .append("text")
        .attr('x', 30)
        .attr('y', (d, i) => 30 + i * 25)
        .text(d => d.name.replace("-", " "))
        .style("fill", d => colors(d.name))
        .style("font-size", 15)
        .on("click", function (event, d) {
            // is the element currently visible ?
            let currentOpacity = d3.selectAll("." + d.name).style("opacity");
            // Change the opacity: from 0 to 1 or from 1 to 0
            d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0 : 1)

        })
}


