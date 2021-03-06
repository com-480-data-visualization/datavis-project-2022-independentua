
var i = 0;
var mydaysviz = [0,
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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
let mynumber = document.getElementsByClassName("numbertext");
mynumber.innerHTML = slideIndex+"/4";


function visualizemydata(data,container) {

var map = anychart.map();

map
  .credits()
  .enabled(true)
  .url(
    'https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density'
  )
  .logoSrc('https://en.wikipedia.org/static/favicon/wikipedia.ico')
  .text(
    'Data source: https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density'
  );
/*to get some distance between the border of the map and geographical contour*/
map.title()
  .enabled(true)
  .useHtml(true)
  .padding([10, 0, 10, 0])
  .text(
   '<span  style="color:white; font-size: 2px;">(Data source: Wikipedia, 2015)</span>'
  );

map.geoData('anychart.maps.world');
map.interactivity().selectionMode('none');
map.padding(0);

var dataSet = anychart.data.set(data);
var relavalue = dataSet.mapAs({ value: 'rel(%)' });
var series = map.choropleth(relavalue);


series.labels(false);

series
  .hovered()
  .fill('#f48fb1')
  .stroke(anychart.color.darken('#f48fb1'));

series
  .selected()
  .fill('#c2185b')
  .stroke(anychart.color.darken('#c2185b'));

//console.log(this.getData(mean));
series
  .tooltip()
  .useHtml(true)
  .format(function () {
    return (
      '<span style="color: #d9d9d9">Currency</span>: ' +
        this.getData('curr').toLocaleString() +
        '<br/>' +
      '<span style="color: #d9d9d9">Relative value</span>: ' +
      parseFloat(this.value).toLocaleString() +
      ' % <br/>' +
    '<span style="color: #d9d9d9">Current value</span>: '
    +    parseFloat(this.getData('ref')).toLocaleString() +
      '<br/>' + '<span style="color: #d9d9d9">Reference value</span>: '
    +parseFloat(this.getData('value(vsUSD)')).toLocaleString()+ ' (USD)'+
    '<br/>' +
      '<span style="color: #d9d9d9">Mean</span>: ' +
      parseFloat(this.getData('mean')).toLocaleString() + ' (USD)'+
      '<br/>' +   '<span style="color: #d9d9d9">Min and Max</span>: ' +
        parseFloat(this.getData('min')).toLocaleString() +' and ' +parseFloat(this.getData('max')).toLocaleString()
        + ' (USD) <br/>'
    );
  });

var scale = anychart.scales.ordinalColor([
  { less:97 },
  { from: 97, to: 99 },
  { from: 99, to: 100 },
  { from: 100, to: 101 },
  { from: 101, to: 103 },
  { greater: 103 }
]);
scale.colors([
    '#000000',
    '#014377',
    '#0277bd',
    '#039be5',
    '#4fc3f7',
    '#81d4fa',
]);

var colorRange = map.colorRange();
colorRange.enabled(true).padding([0, 0, 20, 0]);
colorRange
  .ticks()
  .enabled(true)
  .stroke('3 #ffffff')
  .position('center')
  .length(7);
colorRange.colorLineSize(5);
colorRange.marker().size(7);
colorRange
  .labels()
  .fontSize(11)
  .padding(3, 0, 0, 0)
  .format(function () {
    var range = this.colorRange;
    var name;
    if (isFinite(range.start + range.end)) {
      name = range.start + ' - ' + range.end;
    } else if (isFinite(range.start)) {
      name = 'More than ' + range.start;
    } else {
      name = 'Less than ' + range.end;
    }
    return name;
  });

series.colorScale(scale);

// create zoom controls
var zoomController = anychart.ui.zoom();
zoomController.render(map);

// set container id for the chart
map.container(container);
// initiate chart drawing
map.draw();
}
