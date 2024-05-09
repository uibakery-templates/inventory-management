const jsonData = {{data}}.sort((a, b) => b.sold - a.sold).splice(0,5)

// Extracting names and sold quantities from JSON data
var names = jsonData.map(item => item.name);
var soldQuantities = jsonData.map(item => item.sold);
var availableQuantities = jsonData.map(item => item.quantity);
var toComeQuantities = jsonData.map(item => item.toCome);

// ECharts configuration
var option = {
    grid: {
        top: '30px',     // padding from the top
        right: '10px',   // padding from the right
        bottom: '40px',  // padding from the bottom
        left: '40px'     // padding from the left
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: names,
        axisLabel: {
          interval: 0,
          width: 70,
          overflow: 'break',
          ellipsis: '...'
        },
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        type: 'bar',
        data: soldQuantities,
        name: 'Sold',
    }, {
        type: 'bar',
        data: availableQuantities,
        name: 'On Hand',
        
    }, {
        type: 'bar',
        data: toComeQuantities,
        name: 'To Come',
    }]
};
return option;