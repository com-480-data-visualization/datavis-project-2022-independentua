var i = 0;


var mypositionoil = [131.98378134855085,2.5524576027594135,
  131.98378134855085, 5.104915205518827,
  131.98378134855085,7.657372808278241,
  129.24463132602494,10.209830411037654,
  126.33728788106325,12.762288013797066,
  122.99744706412376,15.314745616556483,
  122.30064574260399,17.867203219315893,
  122.30064574260399,20.419660822075308,
  122.30064574260399,22.972118424834722,
  124.03063523051512,25.524576027594133,
  115.81318516293737,28.077033630353547,
  113.77083646193125,30.629491233112965,
  113.84291935726085,33.181948835872376,
  110.55113380387446,35.73440643863179,
  110.55113380387446,38.286864041391205,
  110.55113380387446,40.839321644150615,
  108.98933773839917,43.39177924691003,
  106.56254692896835,45.944236849669444,
  104.61630875506835,48.496694452428855,
  104.35200480552638,51.049152055188266,
  104.35200480552638,53.60160965794769,
  104.35200480552638,56.154067260707095,
  104.35200480552638,58.70652486346652,
  109.18155879261153,61.25898246622593,
  104.97672323171649,63.811440068985334,
  100.81994293437454,66.36389767174475,
  102.0693797867547,68.91635527450417,
  100.21925213996099,71.46881287726357,
  100.21925213996099,74.02127048002299,
  100.21925213996099,76.57372808278241,
  98.10482054362521,79.12618568554183,
  103.17465084847576,81.67864328830123,
  100.31536266706712,84.23110089106065,
  96.56705210992644,86.78355849382007,
  87.26835861240428,89.33601609657947,
  87.26835861240428,91.88847369933889,
  87.26835861240428,94.4409313020983,
  86.25919807778945,96.99338890485771,
  89.16654152275117,99.54584650761713,
  91.85763628172398,102.09830411037653,
  88.44571256945488,104.65076171313596,
  85.73059017870551,107.20321931589538,
  85.73059017870551,109.75567691865479,
  85.73059017870551,112.30813452141419,
  75.73509535966363,114.8605921241736,
  83.496020423487,117.41304972693304,
  85.87475596936478,119.96550732969244,
  91.06472443309809,122.51796493245186,
  88.90223757320918,125.07042253521126,
  88.90223757320918,127.62288013797067,
  88.90223757320918,130.17533774073007,
  82.24658357110677,132.7277953434895,
  82.7751914701907,135.28025294624894,
  81.4296440907043,137.83271054900834,
  76.62411773539571,140.38516815176774,
  83.18366121039197,142.93762575452715,
  83.18366121039197,145.49008335728658,
  83.18366121039197,148.04254096004598,
  72.32317164739453,150.59499856280542,
  53.461480702808224,153.14745616556482,
  34.21534764979729,155.69991376832422,
  42.81723982579969,158.25237137108365,
  22.393752815738104,160.80482897384306,
  22.393752815738104,163.35728657660246,
  22.393752815738104,165.9097441793619,
  9.995494819041895,168.4622017821213,
  39.88586874906144,  171.0146593848807,

  44.78750563147621,173.56711698764013,
  36.20964108725037,176.11957459039954,
  36.20964108725037,178.67203219315894,
  36.20964108725037,181.22448979591837,
  54.758972818741576,183.77694739867778,
  67.37347950142666,186.32940500143718,
  68.64694398558342,188.8818626041966,
47.2863793362367,  191.43432020695602,
  45.31611353056018,193.98677780971542,
  45.31611353056018,196.53923541247485,
  45.31611353056018,199.09169301523426,
26.16609100465535,  201.6441506179937,
  27.99219101967264,204.19660822075306,
  13.599639585523384,206.7490658235125,
22.105421234419573,  209.30152342627193,
25.25304099714674,  211.85398102903133,
25.25304099714674,214.40643863179076,
  25.25304099714674,216.95889623455014,
44.883616158582385,  219.40500143719458,
  48.992341192371214,221.95745903995402,
  42.26460429493919,224.50991664271342,
62.20753866946989,  227.06237424547285,
64.99474395554891,  229.61483184823223,
64.99474395554891,  232.16728945099166,
64.99474395554891,  234.7197470537511,
  60.141162336687195,237.2722046565105,
63.86544526205139,  239.82466225926993,
77.7774440606698,  242.3771198620293,
  80.13215197477102,244.92957746478874,
76.69620063072531,  247.48203506754817,
76.69620063072531,  250.03449267030754,
  76.69620063072531,252.58695027306698,
  84.7214296440907,255.13940787582638,
  69.10346898933774,257.6918654785858,
  59.32422285628476,260.2443230813452,
  53.701757020573666,262.79678068410465,
  53.701757020573666,265.3492382868641,
  53.701757020573666,267.90169588962345,
  53.701757020573666,270.4541534923829,
  66.53251238924767,273.00661109514226,
67.58972818741555,  275.5590686979017,
67.58972818741555,  278.1115263006611,
  62.42378735545877,280.6639839034205,
  67.3494518696501,283.21644150617993,
  67.3494518696501,285.7688991089393,
  67.3494518696501,288.32135671169874,
81.47769935425742,  290.8738143144582,

  72.77969665114884,293.4262719172176,
  71.7945637483106,295.97872951997704,
  65.83571106772791,298.5311871227364,
  59.636582069379784,301.08364472549584,
59.636582069379784,  303.6361023282553,
  59.636582069379784,306.18855993101465,
  59.636582069379784,308.7410175337741,
  67.85403213695751,311.29347513653346,
54.42258597386996,  313.8459327392929,
50.626220153176185,  316.3983903420523,
46.42138459228114,  318.9508479448117,
46.42138459228114,  321.50330554757113,
  46.42138459228114,324.05576315033056,
63.69725183961556,  326.60822075309,
  73.45247034089205,329.1606783558494,
  61.22240576663163,331.7131359586088,
  60.357411022676075,334.26559356136823,
  50.60219252139962,336.8180511641276,
  50.60219252139962,339.37050876688704,
50.60219252139962,  341.9229663696464,
  44.01862141462683,344.47542397240585,
48.75206487460581,  347.0278815751653,
55.59993993092057,  349.58033917792466,
47.9591530259799,  352.1327967806841,
  46.97402012314164,354.6852543834435,
  46.97402012314164,357.23771198620295,
  46.97402012314164,359.7901695889624,
43.36987535666019,  362.34262719172176,
  43.36987535666019,364.8950847944812,
  43.36987535666019,367.44754239724057,
43.36987535666019, 370
];


function prevshowOrHideDiv() {
  i=i-1
  if (146>i>-1){console.log("why");
    oilshowOrHideDiv();
    gasshowOrHideDiv();
mapprevshowOrHideDiv(i+1);
    /*alert("We don't show data for the selected date! Data range: 01.01.2022-26.05.2022");*/
}
  if(i<0){
    console.log("hello");
    i = i+1;
  }
}

function nextshowOrHideDiv() {
  i=i+1
  if (146>i>-1){
    oilshowOrHideDiv();
    gasshowOrHideDiv();
mapprevshowOrHideDiv(i-1)

    /*alert("We don't show data for the selected date! Data range: 01.01.2022-26.05.2022");*/
}
  else{
    i = i-1
  }}

function superprevshowOrHideDiv() {
  i=i-7
  /*console.log(i>-1)*/
  if (146>i>-1){
    oilshowOrHideDiv();
    gasshowOrHideDiv();
mapprevshowOrHideDiv(i+7);
    /*alert("We don't show data for the selected date! Data range: 01.01.2022-26.05.2022");*/
}
  else{
    i = i+7
  }

}

function supernextshowOrHideDiv() {
  i=i+7
  if (146>i>-1){
    oilshowOrHideDiv();
    gasshowOrHideDiv();
mapprevshowOrHideDiv(i-7)
    /*alert("We don't show data for the selected date! Data range: 01.01.2022-26.05.2022");*/
}
  else{
    i = i-7
  }
}
console.log(i)
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



       //create basic circles
       svg.append("g").selectAll("circle")
           .data(mypositionoil)
           .enter()
           .append("circle")
           .attr("cx", mypositionoil[2*i+1] )
           .attr("cy", mypositionoil[2*i])
           .attr("r",5);

       //button to swap over datasets

               //rejoin data

    function oilshowOrHideDiv() {
               var circle = svg.select("g").selectAll("circle")

               circle.transition()
                   .duration(500)
                   .attr("cx", mypositionoil[2*i+1] )
                   .attr("cy", mypositionoil[2*i])
                   .attr("r",5);
                 }



//Read the data
d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-independentua/main/data/economic/oil_2021.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.Date), value : d.Price }
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
            .ticks(10);
      svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(myx);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ])
    myy = d3.axisLeft(y)
            .ticks(7);
    svg.append("g")
      .call(myy);

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


      /*  for (let i = 0; i < data.length; i++) {
                console.log(y(data[i].value))
                console.log(x(data[i].date))
            ;
  }*/
  /* mettre i et 2*i pour prendre l'index

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
const marging = {top: 40, right: 30, bottom: 40, left: 60},
    widthg = 460 - marging.left - marging.right,
    heightg = 300 - marging.top - marging.bottom;


const svg2 = d3.select("#gasviz")
  .append("svg")
    .attr("width", widthg + marging.left + marging.right)
    .attr("height", heightg + marging.top + marging.bottom)
  .append("g")
    .attr("transform", `translate(${marging.left},${marging.top})`);


var mypositiongas = [0 ,127.238 ,
      2.55246 ,127.238,
      5.10492, 127.238 ,
      7.65737 ,127.486 ,
      10.2098, 126.246 ,
      12.7623, 122.277 ,
      15.3147, 125.006,
      17.8672 ,125.006 ,
      20.4197, 125.006 ,
      22.9721 ,116.821 ,
      25.5246 ,116.821 ,
      28.077 ,105.411 ,
      30.6295, 101.443 ,
      33.1819, 111.612 ,
      35.7344, 111.612 ,
      38.2869, 111.612 ,
      40.8393, 111.612 ,
      43.3918, 107.148 ,
      45.9442, 98.7148 ,
      48.4967, 109.628 ,
      51.0492, 118.061 ,
      53.6016, 118.061,
      56.1541, 118.061 ,
      58.7065, 115.829 ,
      61.259, 114.837 ,
      63.8114, 110.124 ,
      66.3639, 110.124 ,
      68.9164, 78.8726 ,
      71.4688, 78.8726 ,
      74.0213, 78.8726 ,
      76.5737, 82.097 ,
      79.1262, 84.8253 ,
      81.6786, 53.8219 ,
      84.2311, 75.1522 ,
      86.7836, 87.5536 ,
      89.336 ,87.5536 ,
      91.8885, 87.5536,
      94.4409, 109.876 ,
      96.9934, 113.348 ,
      99.5458, 117.565 ,
      102.098, 120.045 ,
      104.651, 119.797 ,
      107.203, 119.797 ,
      109.756, 119.797 ,
      112.308, 119.549 ,
      114.861, 113.1 ,
      117.413, 111.116 ,
      119.966, 106.652 ,
      122.518, 105.66 ,
      125.07 ,105.66 ,
      127.623, 105.66 ,
      130.175, 105.66 ,
      132.728, 108.884 ,
      135.28 ,106.156 ,
      137.833, 101.443 ,
      140.385, 105.163 ,
      142.938, 105.163 ,
      145.49 ,105.163 ,
      148.043, 109.38 ,
      150.595, 111.86 ,
      153.147, 104.667,
      155.7 ,105.163 ,
      158.252, 102.435 ,
      160.805, 102.435 ,
      163.357, 102.435 ,
      165.91 ,97.7227,
      168.462, 105.66 ,
      171.015, 107.148 ,
      173.567, 104.667 ,
      176.12 ,101.195 ,
      178.672, 101.195 ,
      181.224, 101.195 ,
      183.777, 106.156 ,
      186.329, 109.38,
      188.882, 103.923,
      191.434, 100.947,
      193.987, 99.2108,
      196.539, 99.2108,
      199.092, 99.2108,
      201.644, 101.691,
      204.197, 95.9865,
      206.749, 89.5378 ,
      209.302, 91.274 ,
      211.854, 83.3371 ,
      214.406, 83.3371 ,
      216.959, 83.3371 ,
      219.405, 83.0891,
      221.957, 88.0496 ,
      224.51 ,88.0496 ,
      227.062, 84.5772 ,
      229.615, 85.3213,
      232.167, 85.3213 ,
      234.72 ,85.3213,
      237.272, 78.1285 ,
      239.825, 72.4239,
      242.377, 63.991 ,
      244.93 ,69.943,
      247.482, 61.7587 ,
      250.035, 61.7587 ,
      252.587, 61.7587 ,
      255.139, 62.5028 ,
      257.692, 56.5502 ,
      260.244, 54.3179,
      262.797, 47.8692,
      265.349, 47.8692 ,
      267.902, 47.8692,
      270.454, 47.8692 ,
      273.007, 34.4758 ,
      275.559, 35.4679 ,
      278.112, 43.4047 ,
      280.664, 49.3574 ,
      283.216, 56.5502 ,
      285.769, 56.5502 ,
      288.321, 56.5502 ,
      290.874, 60.7666 ,
      293.426, 49.1094 ,
      295.979, 48.6133,
      298.531, 47.1251,
      301.084, 50.3495,
      303.636, 50.3495 ,
      306.189, 50.3495,
      308.741, 38.9402,
      311.293, 25.5468,
      313.846, 14.1375,
      316.398, 11.1612,
      318.951, 12.8974,
      321.503, 12.8974,
      324.056, 12.8974,
      326.608, 20.0902,
      329.161, 51.8377,
      331.713, 33.2356,
      334.266, 40.1804,
      336.818, 27.779,
      339.371, 27.779,
      341.923, 27.779,
      344.475, 19.8422,
      347.028, 15.1297,
      349.58 ,8.43292,
      352.133, 16.3698,
      354.685, 22.3224,
      362.343, 17.6099,
      364.895 ,0,
      367.448 ,0 ,
      370 ,0];



    svg2.append("g").selectAll("circle")
        .data(mypositiongas)
        .enter()
        .append("circle")
        .attr("cx", mypositiongas[2*i])
        .attr("cy", mypositiongas[2*i+1])
        .attr("r",5);

    //button to swap over datasets

            //rejoin data

 function gasshowOrHideDiv() {
            var circle = svg2.select("g").selectAll("circle")

            circle.transition()
                .duration(500)
                .attr("cx", mypositiongas[2*i] )
                .attr("cy", mypositiongas[2*i+1])
                .attr("r",5);
              }



//Read the data
d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-independentua/main/data/economic/gas_2021.csv",
  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.Date), value : d.Price}
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
            .ticks(7);
      svg2.append("g")
          .attr("transform", `translate(0, ${heightg})`)
          .call(myx);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ heightg, 0 ]);
    svg2.append("g")
      .call(d3.axisLeft(y));

    svg2.append("text")
    .attr("x", widthg / 2 )
    .attr("y",  heightg + marging.top )
    .style("text-anchor", "middle")
    .text("Date");

    svg2.append("text")
    .attr("x", widthg / 2 )
    .attr("y",  -20)
    .style("text-anchor", "middle")
    .text("Spot price natural gas")
    .style("font-size",20);;


    svg2.append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 0 - marging.left)
         .attr("x",0 - (heightg / 2))
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

      /*  svg2.selectAll("myCircles")
          .data(data)
          .enter()
          .append("circle")
            .attr("fill", "red")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d.date) })
            .attr("cy", function(d) { return y(d.value) })
            .attr("r", 3)*/


})

var mydays = [0,
  1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
23,
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47,
48,
49,
50,
51,
52,
53,
54,
55,
56,
57,
58,
59,
60,
61,
62,
63,
64,
65,
66,
67,
68,
69,
70,
71,
72,
73,
74,
75,
76,
77,
78,
79,
80,
81,
82,
83,
84,
85,
86,
87,
88,
89,
90,
91,
92,
93,
94,
95,
96,
97,
98,
99,
100,
101,
102,
103,
104,
105,
106,
107,
108,
109,
110,
111,
112,
113,
114,
115,
116,
117,
118,
119,
120,
121,
122,
123,
124,
125,
126,
127,
128,
129,
130,
131,
132,
133,
134,
135,
136,
137,
138,
139,
140,
141,
142,
143,
144,
145
]


visualizemydata(mydayarray[0],array[0])
visualizemydata(mydayarray[1],array[1])
visualizemydata(mydayarray[2],array[2])
visualizemydata(mydayarray[3],array[3])
visualizemydata(mydayarray[4],array[4])
visualizemydata(mydayarray[5],array[5])
visualizemydata(mydayarray[6],array[6])


/*var loadeverything = 0;

setTimeout(loadeverything,30000)

function loadeverything(){
  for (let i = 7; i < 146; i++) {
     visualizemydata(mydayarray[i],array[i]);

}}*/

 function mapprevshowOrHideDiv(j) {
if (loadeverything==0){
  console.log("hello")
for (let i = 1; i < 146; i++) {
     visualizemydata(mydayarray[i],array[i]);

}}

loadeverything = loadeverything +1;

console.log(i)
   var v = document.getElementById(array[i]);

       v.style.display = "block";

    var w = document.getElementById(array[j]);

       w.style.display = "none";

 }
 function mapnextshowOrHideDiv(j) {
   if (loadeverything==0){
   for (let i = 1; i < 146; i++) {
        visualizemydata(mydayarray[i],array[i]);

   }}

   loadeverything = loadeverything +1;


    var v = document.getElementById(array[i]);

       v.style.display = "block";

    var w = document.getElementById(array[j]);

       w.style.display = "none";

 };
