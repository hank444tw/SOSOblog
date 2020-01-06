$(function () {

    /*scoll滑動功能*/
    $("#starticon").click(function () {
        let target = $("#bigimg").height();
        $("html,body").animate({ //瀏覽器緣故，故html和body兩個都選取
            scrollTop: target
        },800);
    });

    /*碰觸文章圖片，眼球會淡入淡出的效果*/
    $(".article-img div").hover(function () {
        //console.log($(this).children().eq(1));
        $(this)
            .children()
            .eq(1)
            .stop()
            .fadeToggle();
    });

    /*進入列表按鈕，動畫效果*/
    $(".golist-btn").mouseenter(function () {
        $(".golist-btn-span").css("width", "100%");
    }).mouseleave(function () {
        $(".golist-btn-span").css("width", "0%");
    });
});