//== Class definition
var Dashboard = function() {

    var showOpenTradesData = function() {
        if ($('#local_data').length === 0) {
            return;
        }

        var dataJSONArray = JSON.parse('[ { "RecordID": 1, "TradeID": "5496-17868", "Date": "2018-03-04 17:35:51", "Market": "BTC-EOS", "Amount": 14.22400000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -0.50, "Status": 1 }, { "RecordID": 2, "TradeID": "5496-17862", "Date": "2018-03-04 17:31:47", "Market": "BTC-LTC", "Amount": 12.53200000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 3.02, "Status": 4 }, { "RecordID": 3, "TradeID": "5496-17808", "Date": "2018-03-04 11:47:22", "Market": "BTC-ETH", "Amount": 0.13100000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 2.25, "Status": 2 }, { "RecordID": 4, "TradeID": "5496-17788", "Date": "2018-03-04 10:55:53", "Market": "BTC-START", "Amount": 0.4500000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -0.98, "Status": 3 }, { "RecordID": 5, "TradeID": "5496-17868", "Date": "2018-03-04 07:45:44", "Market": "BTC-NEO", "Amount": 0.13300000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.23, "Status": 1 }, { "RecordID": 6, "TradeID": "5496-17862", "Date": "2018-03-04 00:35:51", "Market": "BTC-ETH", "Amount": 14.22400000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.50, "Status": 1 }, { "RecordID": 7, "TradeID": "5496-17813", "Date": "2018-03-04 19:20:31", "Market": "BTC-LTC", "Amount": 14.24500000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 3.72, "Status": 4 }, { "RecordID": 8, "TradeID": "5496-17809", "Date": "2018-03-04 00:32:29", "Market": "BTC-ETH", "Amount": 0.13100000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -1.25, "Status": 2 }, { "RecordID": 9, "TradeID": "5496-17768", "Date": "2018-03-04 19:35:51", "Market": "BTC-DASH", "Amount": 0.18600000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -2.98, "Status": 3 }, { "RecordID": 10, "TradeID": "5496-17775", "Date": "2018-03-04 15:55:24", "Market": "BTC-LTC", "Amount": 0.29600000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.27, "Status": 1 }, { "RecordID": 11, "TradeID": "5496-17719", "Date": "2018-03-04 18:35:45", "Market": "BTC-ETH", "Amount": 14.22400000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -0.50, "Status": 1 }, { "RecordID": 12, "TradeID": "5496-17757", "Date": "2018-03-04 14:45:33", "Market": "BTC-ETH", "Amount": 12.53200000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 3.02, "Status": 4 }, { "RecordID": 13, "TradeID": "5496-17705", "Date": "2018-03-04 03:27:52", "Market": "BTC-NEO", "Amount": 0.13100000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 2.25, "Status": 2 }, { "RecordID": 14, "TradeID": "5496-17779", "Date": "2018-03-04 11:08:09", "Market": "BTC-START", "Amount": 0.4500000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -0.98, "Status": 3 }, { "RecordID": 15, "TradeID": "5496-17766", "Date": "2018-03-04 12:22:41", "Market": "BTC-ETH", "Amount": 0.13300000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.23, "Status": 1 }, { "RecordID": 16, "TradeID": "5496-17754", "Date": "2018-03-04 03:11:21", "Market": "BTC-LTC", "Amount": 14.22400000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.50, "Status": 1 }, { "RecordID": 17, "TradeID": "5496-17712", "Date": "2018-03-04 08:47:21", "Market": "BTC-LTC", "Amount": 14.24500000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 3.72, "Status": 4 }, { "RecordID": 18, "TradeID": "5496-17703", "Date": "2018-03-04 14:21:27", "Market": "BTC-START", "Amount": 0.13100000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -1.25, "Status": 2 }, { "RecordID": 19, "TradeID": "5496-17699", "Date": "2018-03-04 18:53:21", "Market": "BTC-DASH", "Amount": 0.18600000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": -2.98, "Status": 3 }, { "RecordID": 20, "TradeID": "5496-17693", "Date": "2018-03-04 11:29:33", "Market": "BTC-EOS", "Amount": 0.29600000, "BuyPrice": "0.00070300 BTC", "SellPrice": "0.000703 BTC", "Profit": 1.27, "Status": 1 } ]');

        var datatable = $('.m_datatable_local').mDatatable({
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
                input: $('#generalSearch')
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
                field: "Date",
                title: "Date",
                width: 150
            }, {
                field: "Market",
                title: "Market",
                width: 100
            }, {
                field: "Amount",
                title: "Amount",
                width: 100
            }, {
                field: "BuyPrice",
                title: "Buy Price",
                width: 150
            }, {
                field: "SellPrice",
                title: "Sell Price",
                width: 150
            }, {
                field: "Profit",
                title: "Profit",
                width: 100,
                template: function(row, index, datatable) {
                    var profit = row['Profit'];
                    var profitStatusClass = profit >= 0 ? 'm--font-success' : 'm--font-danger';
                    return '\
                        <span class="' + profitStatusClass + '"><strong>' + profit + ' %</strong></span>\
                    ';
                }
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

    var daterangepickerInit = function() {
        if ($('#m_dashboard_daterangepicker').length == 0) {
            return;
        }

        var picker = $('#m_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if ((end - start) < 100) {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            picker.find('.m-subheader__daterange-date').html(range);
            picker.find('.m-subheader__daterange-title').html(title);
        }

        picker.daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'left',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    }

    var showCurrentDate = function() {
        if ($('.mc-current-date').length == 0) {
            return;
        }

        var start = moment();
        var currentDate = start.format('MMMM Do YYYY');
        $('.mc-current-date').html(currentDate);
    }

    var signalGraphInit = function() {
        var chart = AmCharts.makeChart("m_amcharts_trading_signal", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                "exchange": "BTC-EOS",
                "amount": 0.2441
            }, {
                "exchange": "BTC-ETH",
                "amount": 0.4139
            }, {
                "exchange": "BTC-LTC",
                "amount": 0.2391
            }, {
                "exchange": "BTC-DASH",
                "amount": 0.0914
            }, {
                "exchange": "BTC-START",
                "amount": 0.124
            }, {
                "exchange": "BTC-ZEC",
                "amount": 0.7819
            }, {
                "exchange": "BTC-USDT",
                "amount": 0.5201
            }, {
                "exchange": "BTC-JPY",
                "amount": 0.2391
            }, {
                "exchange": "BTC-KRW",
                "amount": 0.7281
            }, {
                "exchange": "BTC-BRL",
                "amount": 0.4291
            }, {
                "exchange": "BTC-CAD",
                "amount": 0.1029
            }, {
                "exchange": "BTC-CNY",
                "amount": 0.31
            }, {
                "exchange": "BTC-NEO",
                "amount": 0.7123
            }],
            "valueAxes": [{
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
            }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "amount"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "exchange",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": true
            }
        });
    }

    return {
        //== Init demos
        init: function() {

            // init daterangepicker
            daterangepickerInit();

            // show current date
            showCurrentDate();

            // show trades data
            showOpenTradesData();

            // init signal graph
            signalGraphInit();
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function() {
    Dashboard.init();
});