
(function ($) {
    $(document).ready(function () {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('mouseover', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
        $('.dropdownagain').on('mouseover', function (event) {
            event.preventDefault();
            event.stopPropagation();
            //$(this).parent().siblings().removeClass('open');
            $(this).addClass('open');
        });
        $('.dropdownagain').on('click', function (event) {
            //event.preventDefault();
            event.stopPropagation();
            //alert();
        });
        $('.dropdownagain').on('mouseout', function (event) {
            event.preventDefault();
            event.stopPropagation();
            //$(this).parent().siblings().removeClass('open');
            $(this).removeClass('open');
        });
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
            //alert();
            //window.location.href = $(this).attr('href');
        });
    });
})(jQuery);