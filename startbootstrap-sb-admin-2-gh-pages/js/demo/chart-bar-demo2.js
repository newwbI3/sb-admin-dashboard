// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Traffic Website Chart (Bar Chart - giữ nguyên)
var ctxTraffic = document.getElementById("trafficChart");
var trafficChart = new Chart(ctxTraffic, {
    type: 'bar',
    data: {
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{
            label: "Visitors",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [250,300,350,300],
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 12
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value + 'K';
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel;
                }
            }
        }
    }
});

// Time on Site Chart (Line Chart - thay đổi)
var ctxTimeOnSite = document.getElementById("timeOnSiteChart");
var timeOnSiteChart = new Chart(ctxTimeOnSite, {
    type: 'line',
    data: {
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{
            label: "Minutes",
            backgroundColor: "rgba(28, 200, 138, 0.5)", // Màu nền trong suốt
            borderColor: "#1cc88a", // Màu đường
            data: [ 2.6, 2.9, 2.8, 3.1],
            fill: true, // Đổ màu dưới đường
            tension: 0.4, // Độ cong của đường (0: thẳng, 0.4: cong nhẹ)
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 12
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value + ' min';
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel + ' min';
                }
            }
        }
    }
});

// Bounce Rate Chart (Line Chart - thay đổi)
var ctxBounceRate = document.getElementById("bounceRateChart");
var bounceRateChart = new Chart(ctxBounceRate, {
    type: 'line',
    data: {
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{
            label: "Percentage",
            backgroundColor: "rgba(246, 194, 62, 0.5)", // Màu nền trong suốt
            borderColor: "#f6c23e", // Màu đường
            data: [45, 42, 40, 38, 35, 32, 30, 33, 35, 38, 40, 43],
            fill: true, // Đổ màu dưới đường
            tension: 0.4, // Độ cong của đường
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 12
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel + '%';
                }
            }
        }
    }
});

// Conversion Rate Chart (Line Chart - thay đổi)
var ctxConversionRate = document.getElementById("conversionRateChart");
var conversionRateChart = new Chart(ctxConversionRate, {
    type: 'line',
    data: {
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{
            label: "Percentage",
            backgroundColor: "rgba(54, 185, 204, 0.5)", // Màu nền trong suốt
            borderColor: "#36b9cc", // Màu đường
            data: [2.1, 2.3, 2.5, 2.8, 3.0, 3.2, 3.5, 3.3, 3.1, 2.9, 2.7, 2.4],
            fill: true, // Đổ màu dưới đường
            tension: 0.4, // Độ cong của đường
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 12
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel + '%';
                }
            }
        }
    }
});