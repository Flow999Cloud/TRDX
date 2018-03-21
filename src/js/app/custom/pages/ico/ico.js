var ratingStarSetting = function() {
    //== Private functions
    var initStars = function() {

        if ($('.rate-star').length > 0) {
            var rateStars = $('.rate-star');

            rateStars.each(function(i, obj) {

                var rate = $(obj).data('rate');

                $(obj).rateYo({
                    rating: rate,
                    ratedFill: "#716aca",
                    normalFill: "#c9d2e6",
                    spacing: "3px",
                    starWidth: "20px",
                    readOnly: true
                });
            });
        }
    }

    //== Init Ico Portlets
    var initIcoPortortlets = function() {

        var icoPortlets = $('.m_portlet_ico');

        icoPortlets.each(function(i, obj) {

            var portlet = $(obj);

            portlet.mPortlet();

            portlet.on('beforeCollapse', function(portlet) {

            });

            portlet.on('afterCollapse', function(portlet) {

            });

            portlet.on('beforeExpand', function(portlet) {

            });

            portlet.on('afterExpand', function(portlet) {

            });
        });
    }

    //== Public functions
    return {
        init: function() {

            initStars();

            initIcoPortortlets();
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    ratingStarSetting.init();
});