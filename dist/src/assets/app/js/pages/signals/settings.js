var SignalSetting = function() {
    //== Private functions
    var initSelectors = function() {
        // choose exchange
        $('#m_select2_choose_exchange').select2({
            placeholder: "Select the exchange."
        });

        // choose signal time
        $('#m_select2_signal_time').select2({
            placeholder: "Select the charts signal time."
        });

        // choose signal dates
        $('#m_select2_signal_date').select2({
            placeholder: "Select the signal date.",
        });

        // choose time range
        $('#m_timepicker_start').timepicker({
            defaultTime: '08:00 AM',
            minuteStep: 1,
            showMeridian: true
        });

        $('#m_timepicker_end').timepicker({
            defaultTime: '04:00 PM',
            minuteStep: 1,
            showMeridian: true
        });
    }

    //== Public functions
    return {
        init: function() {
            initSelectors();
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    SignalSetting.init();
});