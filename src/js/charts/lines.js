var charts_lines = document.querySelectorAll('.chart-lines');

if(charts_lines.length > 0){
    charts_lines.forEach(chart => {

        var labels = JSON.parse(chart.getAttribute('data-labels'))
        var backgroundColor = chart.getAttribute('data-background-color')
        var borderColor = chart.getAttribute('data-border-color')
        var data = JSON.parse(chart.getAttribute('data-dataset'))


        var myChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 4,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "#424458"
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            color: "#424458"
                        },
                    }]
                }
            }
        });
    })
}

var charts_only_lines = document.querySelectorAll('.chart-only-lines');

if (charts_only_lines.length > 0) {
    charts_only_lines.forEach(chart => {

        var labels = JSON.parse(chart.getAttribute('data-labels'))
        var backgroundColor = chart.getAttribute('data-background-color')
        var borderColor = chart.getAttribute('data-border-color')
        var data = JSON.parse(chart.getAttribute('data-dataset'))

        var myChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 4,
                    pointRadius:0
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        display:false
                    }],
                    xAxes: [{
                        display:false
                    }]
                },
                animation: {
                    duration: 0
                },
                hover: {
                    animationDuration: 0
                },
                responsiveAnimationDuration: 0 
            }
        });
    })
}

