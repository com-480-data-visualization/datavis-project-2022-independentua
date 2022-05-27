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

map
  .title()
  .enabled(true)
  .useHtml(true)
  .padding([10, 0, 10, 0])
  .text(
    'Evolution of the currencies<br/>'
    //+ '<span  style="color:#929292; font-size: 12px;">(Data source: Wikipedia, 2015)</span>'
  );

map.geoData('anychart.maps.world');
map.interactivity().selectionMode('none');
map.padding(0);

var dataSet = anychart.data.set(data);
var relavalue = dataSet.mapAs({ value: 'rel(%)' });
console.log(relavalue)
var series = map.choropleth(relavalue);
console.log(series)

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
    console.log(this.value)
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
console.log()
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
