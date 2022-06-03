/**
 * The pictogram is created from the bottom left corner, row wise.
 * Background stays transparent.
 * @param pictogram_width
 * @param pictogram_height
 * @param icon_type
 * @param single_im_height
 * @param single_pic_number
 * @param n_columns
 * @param total_casualties
 * @param elem_name
 */
function drawCasualtiesPictogram(pictogram_width,
                                 pictogram_height,
                                 icon_type,
                                 single_im_height,
                                 single_pic_number,
                                 n_columns,
                                 total_casualties,
                                 elem_name
) {
    let vbScaleX;
    let vbScaleY;
    if (icon_type === "person") {
        vbScaleX = 1;
        vbScaleY = 0.8;
    } else {
        vbScaleX = 12.0;
        vbScaleY = 12.0;
    }
    let viewBoxWidth = 1000 * vbScaleX;
    let viewBoxHeight = 1000 * vbScaleY;
    let svg = d3.select('#' + elem_name)
        .append('svg')
        .attr("viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight)
        .attr("width", pictogram_width)
        .attr("height", pictogram_height);

    let icon = svg.append("defs")
        .append("g")
        .attr("id", "svgIcon" + icon_type);
    let adj_factor;
    if (icon_type === "person") {
        icon.append("path").attr("d", "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z")
        adj_factor = 160.5;

    } else {
        icon.append("path").attr("d", "M832.3,245.3L655.2,422.4v499.7c0,18.6-6.7,34.6-20,47.9c-13.4,13.3-29.3,20-47.9,20c-18.6,0-34.5-6.6-47.9-20c-13.4-13.4-20-29.3-20-47.9V689.2h-38.8v232.9c0,18.6-6.7,34.6-20,47.9c-13.4,13.3-29.3,20-47.9,20c-18.6,0-34.5-6.6-47.9-20c-13.4-13.4-20-29.3-20-47.9V422.4L167.7,245.3c-11.3-11.3-17-25.1-17-41.2c0-16.1,5.7-29.9,17-41.2c11.3-11.3,25.1-17,41.2-17c16.1,0,29.9,5.7,41.2,17l138.3,138.3h223.2l138.3-138.3c11.3-11.3,25.1-17,41.2-17c16.1,0,29.9,5.7,41.2,17c11.3,11.3,17,25.1,17,41.2C849.3,220.2,843.6,234,832.3,245.3L832.3,245.3z M635.8,145.8c0,37.6-13.2,69.6-39.7,96.1c-26.5,26.5-58.5,39.7-96.1,39.7c-37.6,0-69.7-13.3-96.1-39.7c-26.5-26.4-39.7-58.5-39.7-96.1c0-37.6,13.2-69.7,39.7-96.1C430.3,23.3,462.4,10,500,10c37.6,0,69.7,13.2,96.1,39.7C622.6,76.2,635.8,108.2,635.8,145.8z"
        )
        adj_factor = 2600;
    }


    let n_rows = Math.ceil(total_casualties / n_columns / single_pic_number);
    let total_icons = Math.floor(total_casualties / single_pic_number)
    //x and y axis scales
    let y = d3.scaleBand()
        .range([0, viewBoxHeight])
        .domain(d3.range(n_rows));

    let x = d3.scaleBand()
        .range([0, viewBoxWidth])
        .domain(d3.range(n_columns));

    let data = d3.range(total_icons);

    //container to hold the grid
    let container = svg.append("g")
    // .attr("transform", "translate(120,120)");


    container.selectAll("use")
        .data(data)
        .enter().append("use")
        .attr("xlink:href", "#svgIcon" + icon_type)
        .attr("id" + icon_type, function (d) {
            return "id" + d;
        })
        .attr('x', function (d) {
            return x(d % n_columns);
        })
        .attr('y', function (d) {
            return viewBoxHeight - adj_factor - y(Math.floor(d / n_columns));
        })
}