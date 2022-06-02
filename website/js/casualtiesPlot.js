

    class CasualtiesLoader {
        #casualties;
        date_to_civilians_killed;
        date_to_children_killed;
        date_to_civilians_injured;
        date_to_children_injured;
        all;

        constructor(path) {
            this.path = path;
            this.all_groups = ["civilians-killed", "civilians-injured", "children-killed", "children-injured"]
        }

        async load_data() {
            this.#casualties = await d3.csv(this.path);
            // this callback is necessary in this function if I want to store the data in the line above
            await this._extract_data()
        }

        _extract_data() {
            this.date_to_civilians_killed = this._extract_one_data("civilians_killed");
            this.date_to_children_killed = this._extract_one_data("children_killed");
            this.date_to_civilians_injured = this._extract_one_data("civilians_injured");
            this.date_to_children_injured = this._extract_one_data("children_injured");
            let all_data = [this.date_to_civilians_killed, this.date_to_civilians_injured, this.date_to_children_killed, this.date_to_children_injured];
            this.all = this.all_groups.map(function (group_name, index) {
                    return {
                        name: group_name,
                        values: all_data[index]
                    }
                }
            );
        }

        _extract_one_data(column_name) {
            const parseTime = d3.timeParse("%Y-%m-%d");
            return new Map(
                this.#casualties.map(
                    object => {
                        return [parseTime(object["date"]), Number(object[column_name])]
                    })
            )
        }

    }

    function plot_casualties(casualtiesLoader) {
        const margin = {top: 10, right: 30, bottom: 30, left: 60},
            width = 1200 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;
        const r = 3;
        const svg = d3.select("#casualties_plot")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        const dateScale = d3.scaleTime()
            .domain([d3.min(Array.from(casualtiesLoader.date_to_civilians_killed.keys())),
                d3.max(Array.from(casualtiesLoader.date_to_civilians_killed.keys()))])
            .range([0, width]);
        // Add Y axis
        const valuesScale = d3.scaleLinear()
            .domain([0, 4000])
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
            .attr("stroke", "white");

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


