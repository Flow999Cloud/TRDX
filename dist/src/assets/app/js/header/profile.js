//== Class definition

var UserProfile = function() {
    //== Private functions
    var initInvoiceDatePicker = function() {
        // range picker
        $('#m_datepicker_invoice').datepicker({
            todayHighlight: true,
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });
    }

    var showInvoiceData = function() {
        if ($('#invoice_data').length === 0) {
            return;
        }

        var dataJSONArray = JSON.parse('[ { "RecordID": 1, "InvoiceID": 1, "Date": "2017-12-14 17:35:51", "Amount": "$4,500", "PaidDate": "2017-12-15 08:00:51", "Status": 1 }, { "RecordID": 2, "InvoiceID": 2, "Date": "2018-01-14 17:35:51", "Amount": "$1,400", "PaidDate": "2017-01-15 08:10:32", "Status": 1 }, { "RecordID": 3, "InvoiceID": 3, "Date": "2018-02-03 17:35:51", "Amount": "$3,400", "PaidDate": "2017-02-04 09:30:51", "Status": 1 }, { "RecordID": 4, "InvoiceID": 4, "Date": "2018-02-22 17:35:51", "Amount": "$2,800", "PaidDate": "-", "Status": 2 }, { "RecordID": 5, "InvoiceID": 5, "Date": "2018-03-14 17:35:51", "Amount": "$6,700", "PaidDate": "-", "Status": 2 } ]');

        var datatable = $('.m_datatable_invoice').mDatatable({
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
                field: "InvoiceID",
                title: "Invoice No",
                width: 100
            }, {
                field: "Date",
                title: "Date",
                width: 150
            }, {
                field: "Amount",
                title: "Amount",
                width: 100
            }, {
                field: 'Download',
                title: 'Download',
                template: '<button type="button" class="btn m-btn--pill    btn-primary btn-sm">Download</button>'
            }, {
                field: "PaidDate",
                title: "Paid Date",
                width: 150
            }, {
                field: 'Status',
                title: 'Status',
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Paid',
                            'class': ' m-badge--success'
                        },
                        2: {
                            'title': 'Open',
                            'class': 'm-badge--brand'
                        },
                    };
                    return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                },
            }]
        });
    }

    return {
        // public functions
        init: function() {
            initInvoiceDatePicker();

            showInvoiceData();
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    UserProfile.init();
});