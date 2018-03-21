//== Class definition
var Dashboard = function() {

    //== Daily Sales chart.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var last2wEarnings = function() {
        var chartContainer = $('#m_chart_last_2w_earnings');

        if (chartContainer.length == 0) {
            return;
        }

        var chartData = {
            labels: ["March 1", "March 2", "March 3", "March 4", "March 5", "March 6", "March 7", "March 8", "March 9", "March 10", "March 11", "March 12", "March 13", "March 14"],
            datasets: [{
                //label: 'Dataset 1',
                backgroundColor: mUtil.getColor('success'),
                data: [
                    15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10
                ]
            }, {
                //label: 'Dataset 2',
                backgroundColor: '#f3f3fb',
                data: [
                    15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10
                ]
            }]
        };

        var chart = new Chart(chartContainer, {
            type: 'bar',
            data: chartData,
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        stacked: true
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        gridLines: false
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }

    //== Profit Share Chart.
    //** Based on Chartist plugin - https://gionkunz.github.io/chartist-js/index.html
    var exchangeEarnings = function() {
        if ($('#m_chart_exchange_earnings').length == 0) {
            return;
        }

        var chart = new Chartist.Pie('#m_chart_exchange_earnings', {
            series: [{
                value: 12,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('accent')
                }
            }, {
                value: 24,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('brand')
                }
            }, {
                value: 33,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('success')
                }
            }, {
                value: 31,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('warning')
                }
            }],
            labels: [1, 2, 3, 4]
        }, {
            donut: true,
            donutWidth: 17,
            showLabel: false
        });

        chart.on('draw', function(data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze',
                        'stroke': data.meta.color
                    }
                };

                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us

                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px',
                    'stroke': data.meta.color
                });

                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        });

        // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
        chart.on('created', function() {
            if (window.__anim21278907124) {
                clearTimeout(window.__anim21278907124);
                window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 15000);
        });
    }

    var showBotTradesData = function() {
        if ($('#bot_trades_data').length === 0) {
            return;
        }

        var dataJSONArray = JSON.parse('[ { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "BINANCE", "Market": "BTC-EOS", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 5 }, { "RecordID": 2, "TradeID": "5493-19282", "Exchange": "BITTREX", "Market": "BTC-START", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 3 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "HITBTC", "Market": "BTC-ETH", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 2 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "POLONIEX", "Market": "BTC-DASH", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 6 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-NEO", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 1 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-LTC", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 4 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-EOS", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 3 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-LTC", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 1 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-NEO", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 2 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-EOS", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 5 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-ETH", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 3 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-LTC", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 7 }, { "RecordID": 1, "TradeID": "5493-19282", "Exchange": "Binance", "Market": "BTC-NEO", "BuyPrice": "0.00040284 BTC", "BuyAmount": "0.003245", "SellPrice": "0.00039784 BTC", "SellAmount": "0.001345", "BuyTime": "2018-03-04 17:35:51", "SellTime": "2018-03-06 19:22:22", "Status": 6 } ]');

        var datatable = $('.m_bot_trades_data').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10
            },

            // layout definition
            layout: {
                // theme: 'default', // datatable theme
                class: '', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#bot-trades-search')
            },

            // columns definition
            columns: [{
                field: "RecordID",
                title: "#",
                width: 50,
                sortable: false,
                textAlign: 'center',
                selector: {
                    class: 'm-checkbox--solid m-checkbox--brand'
                }
            }, {
                field: "TradeID",
                title: "ID Trade"
            }, {
                field: "Exchange",
                title: "Exchange",
                width: 100
            }, {
                field: "Market",
                title: "Market",
                width: 100
            }, {
                field: "BuyPrice",
                title: "Buy Price",
                width: 150
            }, {
                field: "BuyAmount",
                title: "Buy Amount",
                width: 100
            }, {
                field: "SellPrice",
                title: "Sell Price",
                width: 150
            }, {
                field: "SellAmount",
                title: "Sell Amount",
                width: 100
            }, {
                field: "BuyTime",
                title: "Buy Time",
                width: 150
            }, {
                field: "SellTime",
                title: "Sell Time",
                width: 150
            }, {
                field: 'Status',
                title: 'Status',
                width: 100,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': 'm-badge--brand'
                        },
                        2: {
                            'title': 'Delivered',
                            'class': ' m-badge--metal'
                        },
                        3: {
                            'title': 'Canceled',
                            'class': ' m-badge--primary'
                        },
                        4: {
                            'title': 'Success',
                            'class': ' m-badge--success'
                        },
                        5: {
                            'title': 'Info',
                            'class': ' m-badge--info'
                        },
                        6: {
                            'title': 'Danger',
                            'class': ' m-badge--danger'
                        },
                        7: {
                            'title': 'Warning',
                            'class': ' m-badge--warning'
                        },
                    };
                    return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                }
            }]
        });
    }

    var exchangeOverviewData = function() {
        if ($('#exchange_overview_data').length === 0) {
            return;
        }

        var dataJSONArray = JSON.parse('[{ "RecordID": 1, "Exchange": "Bittrex", "IsActive": true, "StartWalletAmount": 0.234521, "LiveWalletAmount": 0.652245, "WalletEarnings": 18.35 }, { "RecordID": 2, "Exchange": "Binance", "IsActive": false, "StartWalletAmount": 0.45121, "LiveWalletAmount": 0.952245, "WalletEarnings": 12.5 }, { "RecordID": 3, "Exchange": "HITBTC", "IsActive": false, "StartWalletAmount": 0.0234521, "LiveWalletAmount": 0.62125, "WalletEarnings": 82.3 }, { "RecordID": 4, "Exchange": "Poloniex", "IsActive": true, "StartWalletAmount": 0.14521, "LiveWalletAmount": 0.32245, "WalletEarnings": 27.5 }]');

        var datatable = $('.m_exchange_overview_data').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: '', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#exchange-data-search')
            },

            // columns definition
            columns: [{
                field: "RecordID",
                title: "#",
                width: 50,
                sortable: false,
                textAlign: 'center',
                selector: {
                    class: 'm-checkbox--solid m-checkbox--brand'
                }
            }, {
                field: "Exchange",
                title: "Exchange",
                width: 100,
            }, {
                field: "IsActive",
                title: "Is Active",
                width: 100,
                template: function(row, index, datatable) {
                    var isActive = row['IsActive'];
                    var strActive = isActive ? 'Yes' : 'No';
                    return '\
                        <span>' + strActive + '</span>\
                    ';
                }
            }, {
                field: "StartWalletAmount",
                title: "Start Wallet Amount",
                width: 150
            }, {
                field: "LiveWalletAmount",
                title: "Live Wallet Amount",
                width: 150
            }, {
                field: "WalletEarnings",
                title: "Wallet Earnings",
                width: 150
            }]
        });
    }

    return {
        //== Init components
        init: function() {
            // init charts
            last2wEarnings();
            exchangeEarnings();

            // show trades data
            showBotTradesData();
            exchangeOverviewData();
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function() {
    Dashboard.init();
});