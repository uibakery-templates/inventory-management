var categories = [];
var quantities = [];
var totalValues = [];

data.forEach(function (category) {
    categories.push(category.name);
    quantities.push(category.quantity);
    totalValues.push(category.inventoryValue);
});

// eCharts Config
return {
   grid: {
        top: '60px',     // padding from the top
        right: '80px',   // padding from the right
        bottom: '60px',  // padding from the bottom
        left: '60px'     // padding from the left
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['Quantity', 'Total Value']
    },
    xAxis: [
        {
            type: 'category',
            data: categories,
            axisPointer: {
                type: 'shadow'
            },
          axisLabel: {
            interval: 0,
            width: 70,
            overflow: 'break',
            ellipsis: '...'
          },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Quantity',
            min: 0,
            // You might want to adjust the max value or let it be auto-calculated
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
              show: false  // This hides the grid lines for the y-axis (value axis)
            },
        },
        {
            type: 'value',
            name: 'Value',
            min: 0,
            // You might want to adjust the max value or let it be auto-calculated
            axisLabel: {
                formatter: '${value}'
            }
        }
    ],
    series: [
        {
            name: 'Quantity',
            type: 'bar',
            data: quantities,
          itemStyle: {
              color: '#E8AD0E'  // Change this hex color code to your desired color
          },
        },
        {
            name: 'Total Value',
            type: 'line',
            yAxisIndex: 1,
            data: totalValues
        }
    ]
};
