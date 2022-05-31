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
      "container0101",
      "container0102",
      "container0103",
      "container0104",
      "container0105",
      "container0106",
      "container0107",
      "container0108",
      "container0109",
      "container0110",
      "container0111",
      "container0112",
      "container0113",
      "container0114",
      "container0115",
      "container0116",
      "container0117",
      "container0118",
      "container0119",
      "container0120",
      "container0121",
      "container0122",
      "container0123",
      "container0124",
      "container0125",
      "container0126",
      "container0127",
      "container0128",
      "container0129",
      "container0130",
      "container0131",

      "container0201",
      "container0202",
      "container0203",
      "container0204",
      "container0205",
      "container0206",
      "container0207",
      "container0208",
      "container0209",
      "container0210",
      "container0211",
      "container0212",
      "container0213",
      "container0214",
      "container0215",
      "container0216",
      "container0217",
      "container0218",
      "container0219",
      "container0220",
      "container0221",
      "container0222",
      "container0223",
      "container0224",
      "container0225",
      "container0226",
      "container0227",
      "container0228",

      "container0301",
      "container0302",
      "container0303",
      "container0304",
      "container0305",
      "container0306",
      "container0307",
      "container0308",
      "container0309",
      "container0310",
      "container0311",
      "container0312",
      "container0313",
      "container0314",
      "container0315",
      "container0316",
      "container0317",
      "container0318",
      "container0319",
      "container0320",
      "container0321",
      "container0322",
      "container0323",
      "container0324",
      "container0325",
      "container0326",
      "container0327",
      "container0328",
      "container0329",
      "container0330",
      "container0331",

      "container0401",
      "container0402",
      "container0403",
      "container0404",
      "container0405",
      "container0406",
      "container0407",
      "container0408",
      "container0409",
      "container0410",
      "container0411",
      "container0412",
      "container0413",
      "container0414",
      "container0415",
      "container0416",
      "container0417",
      "container0418",
      "container0419",
      "container0420",
      "container0421",
      "container0422",
      "container0423",
      "container0424",
      "container0425",
      "container0426",
      "container0427",
      "container0428",
      "container0429",
      "container0430",

      "container0501",
      "container0502",
      "container0503",
      "container0504",
      "container0505",
      "container0506",
      "container0507",
      "container0508",
      "container0509",
      "container0510",
      "container0511",
      "container0512",
      "container0513",
      "container0514",
      "container0515",
      "container0516",
      "container0517",
      "container0518",
      "container0519",
      "container0520",
      "container0521",
      "container0522",
      "container0523",
      "container0524",
      "container0525",
      "container0526"
    ];
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
