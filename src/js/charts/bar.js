var charts_bar = document.querySelectorAll('.chart-bar');

if (charts_bar.length > 0) {
    charts_bar.forEach(chart => {
        var myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio','Julio'],
                datasets: [{
                    label:'Usuarios',
                    data:[1000,800,1200,1300,1000,1250],
                    backgroundColor:'#38c172'
                },
                {
                    'label':'Suscritos',
                    data: [200, 300,400,350,402,380],
                    backgroundColor: '#6cb2eb'
                } 
            ]
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