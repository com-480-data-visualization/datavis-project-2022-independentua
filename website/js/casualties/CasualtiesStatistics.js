class CasualtiesStatistics {
    constructor() {
        this.total = new Map();
        this.averageDataByDay = new Map();
    }

}

function calculateStatistics(casualtiesData, statistics) {
    for (const [key, value] of casualtiesData.entries()) {
        statistics.total[key] = Array.from(value)[value.size - 1][1]
        let array = Array.from(value.values());
        statistics.averageDataByDay[key] = array.reduce((a, b) => a + b - a, 0) / array.length;
    }
    return statistics
}

function appendStatistics(statistics) {
    console.log(statistics)
    d3.select("#average-civilian-deaths").html(statistics.averageDataByDay[0].toFixed(0));
    d3.select("#average-civilian-injuries").html(statistics.averageDataByDay[1].toFixed(0));
    d3.select("#average-children-deaths").html(statistics.averageDataByDay[2].toFixed(0));
    d3.select("#average-children-injuries").html(statistics.averageDataByDay[3].toFixed(0));

    d3.select("#total-civilian-deaths").html(statistics.total[0].toFixed(0));
    d3.select("#total-civilian-injuries").html(statistics.total[1].toFixed(0));
    d3.select("#total-children-deaths").html(statistics.total[2].toFixed(0));
    d3.select("#total-children-injuries").html(statistics.total[3].toFixed(0));
}


