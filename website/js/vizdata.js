var v = document.getElementById("hidingtheloading");
var w = document.getElementById("fullpage");

console.log(v)

let time = new Date().getSeconds();


while (new Date().getSeconds()-time< 10) {
  v.style.display = "block";
  w.style.display = "none";
}
w.style.display = "block";
v.style.display = "none";

/*setTimeout(showourwebpage(), 10000);
function showourwebpage(){
  var v = document.getElementById("hidingtheloading");
  var w = document.getElementById("fullpage");
console.log(v)
console.log(w)


};*/

/*setTimeout(alertFunc, 3000);


function alertFunc() {
  alert("Hello!");
}*/



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
  { less:98 },
  { from: 99, to: 99.5 },
  { from: 99.5, to: 100 },
  { from: 100, to: 100.5 },
  { from: 100.5, to: 101 },
  { greater: 102 }
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
