$(function () {
    $(window).resize(function () {
        changeNav();
    });

    function changeNav() {
        //console.log($(window).width());
        let w = $(window).width();
        if (w < 992) {
            $("#Navbar-lg").css("display", "none");
            $("#Navbar-xs").css("display", "");
        }
        else {
            $("#Navbar-lg").css("display", "");
            $("#Navbar-xs").css("display", "none");
        };
    };

    changeNav();
});