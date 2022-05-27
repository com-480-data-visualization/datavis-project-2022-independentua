//d3.select("body").append("p").text("New paragraph!");
const margin = {top: 40, right: 30, bottom: 40, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#oilviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

var i = 0;

var radii= [108.98,110,107,106, 46.26, 48,43,49] ;
var array_x= [];

svg.append("circle")
.attr("fill", "red")
.attr("stroke", "none")
.attr("cx", 46.26)
.attr("cy", 108.98)
.attr("r", 3);



   function prevshowOrHideDiv() {
       i = i -1
       d3.selectAll("circle")
       .data(radii)
       .attr('cx', radii[4+i])
       .attr('cy', radii[i])
       .attr('r', 3) // 10, 20, 50
       .style("fill", "blue");
    }
    function nextshowOrHideDiv() {
      i = i+1
      d3.selectAll("circle")
      .data(radii)
      .attr('cx', radii[4+i])
      .attr('cy', radii[i])
      .attr('r', 3) // 10, 20, 50
      .style("fill", "blue");

    }

//Read the data
d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-independentua/main/data/oil_2021.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  }).then(

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
  /*  const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));*/

      const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
      myx = d3.axisBottom(x)
            .ticks(6);
      svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(myx);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append("text")
    .attr("x", width / 2 )
    .attr("y",  height + margin.top )
    .style("text-anchor", "middle")
    .text("Date");

    svg.append("text")
    .attr("x", width / 2 )
    .attr("y",  -20)
    .style("text-anchor", "middle")
    .text("Spot price brent oil")
    .style("font-size",20);;


    svg.append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 0 - margin.left)
         .attr("x",0 - (height / 2))
         .attr("dy", "1em")
         .style("text-anchor", "middle")
         .text("Spot price");

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

        var array_y = [y(data[10].value)]
        var array_x = [x(data[10].date)]
        console.log(array_y)
        console.log(array_x)


    /*  svg.selectAll("myCircles")
          .data(data)
          .enter()
          .append("circle")
            .attr("fill", "red")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d.date) })
            .attr("cy", function(d) { return y(d.value) })
            .attr("r", 3)*/


})

/*const margin = {top: 40, right: 30, bottom: 40, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;*/
    var array = [
    'container1',
    'container2',
    "container3" ,
    "container4",
    "container5" ,
    "container6" ,
    "container7" ,
    "container8",
    "container9",
    "container10",
    "container11" ,
    "container12",
    "container13" ,
    "container14",
    "container15" ,
    "container16" ,
    "container17" ,
    "container18",
    "container19",
    "container20",
    "container21" ,
    "container22",
    "container23" ,
    "container24",
    "container25" ,
    "container26" ,
    "container27" ,
    "container28",
    "container29",
    "container30",
    "container31" ,
    "container32",
    "container33" ,
    "container34",
    "container35" ,
    "container36" ,
    "container37" ,
    "container38",
    "container39",
    "container40",
    "container41" ,
    "container42",
    "container43" ,
    "container44",
    "container45" ,
    "container46" ,
    "container47" ,
    "container48",
    "container49",
    "container50",
    "container51" ,
    "container52",
    "container53" ,
    "container54",
    "container55" ,
    "container56" ,
    "container57" ,
    "container58",
    "container59",
    "container60"]
// append the svg object to the body of the page
const svg2 = d3.select("#oilviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


    svg.append("circle")
    .attr("fill", "red")
    .attr("stroke", "none")
    .attr("cx", 46.26)
    .attr("cy", 108.98)
    .attr("r", 3);

    svg2.append("circle")
    .attr("fill", "red")
    .attr("stroke", "none")
    .attr("cx", 46.26)
    .attr("cy", 108.98)
    .attr("r", 3);



        function prevshowOrHideDiv() {
           i = i -1
           svg.selectAll("circle")
           .data(radii)
           .attr('cx', radii[4+i])
           .attr('cy', radii[i])
           .attr('r', 3) // 10, 20, 50
           .style("fill", "blue");

            var v = document.getElementById(array[i+1]);
            v.style.display = "none";
            var w = document.getElementById(array[i]);
            w.style.display = "block";
           }


        function nextshowOrHideDiv() {
          i = i+1
          svg.selectAll("circle")
          .data(radii)
          .attr('cx', radii[4+i])
          .attr('cy', radii[i])
          .attr('r', 3) // 10, 20, 50
          .style("fill", "blue");

          var v = document.getElementById(array[i-1]);
          v.style.display = "none";
          var w = document.getElementById(array[i]);
          w.style.display = "block";
        }



//Read the data
d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-independentua/main/data/gas_2021.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  }).then(

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
  /*  const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));*/

      const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
      myx = d3.axisBottom(x)
            .ticks(6);
      svg2.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(myx);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg2.append("g")
      .call(d3.axisLeft(y));

    svg2.append("text")
    .attr("x", width / 2 )
    .attr("y",  height + margin.top )
    .style("text-anchor", "middle")
    .text("Date");

    svg2.append("text")
    .attr("x", width / 2 )
    .attr("y",  -20)
    .style("text-anchor", "middle")
    .text("Spot price natural gas")
    .style("font-size",20);;


    svg2.append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 0 - margin.left)
         .attr("x",0 - (height / 2))
         .attr("dy", "1em")
         .style("text-anchor", "middle")
         .text("Spot price");

    // Add the line
    svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

        svg2.selectAll("myCircles")
          .data(data)
          .enter()
          .append("circle")
            .attr("fill", "red")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d.date) })
            .attr("cy", function(d) { return y(d.value) })
            .attr("r", 3)


})
