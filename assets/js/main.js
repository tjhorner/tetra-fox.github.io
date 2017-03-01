$(window).on("focus", function() {
    document.title = "tetra is fluffy~"
});
$(window).on("blur", function() {
    document.title = "come back! <3"
});

$("input[name='linksBtn']").click(function() {
    if (!isElementInViewport($("#links"))) {
        /*$("html, body").animate({
            scrollTop: $(document).height()
        }, 1000, linkAni())*/
        $("#pullover").removeClass("hidden");
        $("#pullover").addClass("show");
        $("#wrapper").removeClass("show");
        $("#wrapper").addClass("hidden");
    } else {
        linkAni();
    }
});
$("input[name='closeBtn']").click(function() {
        $("#pullover").removeClass("show");
        $("#pullover").addClass("hidden");
        $("#wrapper").removeClass("hidden");
        $("#wrapper").addClass("show");
});

function linkAni() {
    $("#links").addClass("tada");
    setTimeout(function() {
        $("#links").removeClass("tada")
    }, 1100);
    $(".fa-github").addClass("hover");
    setTimeout(function() {
        $(".fa-github").removeClass("hover");
        $(".fa-key").addClass("hover")
    }, 100);
    setTimeout(function() {
        $(".fa-key").removeClass("hover");
        $(".fa-telegram").addClass("hover")
    }, 200);
    setTimeout(function() {
        $(".fa-telegram").removeClass("hover");
        $(".fa-twitter").addClass("hover")
    }, 300);
    setTimeout(function() {
        $(".fa-twitter").removeClass("hover");
        $(".fa-reddit-alien").addClass("hover")
    }, 400);;
    setTimeout(function() {
        $(".fa-reddit-alien").removeClass("hover");
        $(".fa-steam").addClass("hover")
    }, 500);
    setTimeout(function() {
        $(".fa-steam").removeClass("hover");
        $(".fa-medium").addClass("hover")
    }, 600);
    setTimeout(function() {
        $(".fa-medium").removeClass("hover");
        $(".fa-tumblr").addClass("hover")
    }, 700);
    setTimeout(function() {
        $(".fa-tumblr").removeClass("hover");
        $(".fa-soundcloud").addClass("hover")
    }, 800);
    setTimeout(function() {
        $(".fa-soundcloud").removeClass("hover");
        $(".fa-youtube-play").addClass("hover")
    }, 900);
    setTimeout(function() {
        $(".fa-youtube-play").removeClass("hover");
        $(".fa-twitch").addClass("hover")
    }, 1000);
    setTimeout(function() {
        $(".fa-twitch").removeClass("hover")
    }, 1100);
}

// http://stackoverflow.com/a/7557433/2621063
function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ($(window).height()) && /*or $(window).height() */
        rect.right <= ($(window).width()) /*or $(window).width() */
    );
}
