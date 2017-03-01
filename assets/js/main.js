$(window).on("focus", function() {
    document.title = "tetra is fluffy~";
});
$(window).on("blur", function() {
    document.title = "come back! <3";
});

$("input[name='linksBtn']").click(function() {
    if (!isElementInViewport($("#icons"))) {
        /*$("html, body").animate({
            scrollTop: $(document).height()
        }, 1000, linkAni())
        setTimeout(function() {
            $("#icons").removeClass("tada");
        }, 1100);*/
        $("#links, #wrapper").toggleClass("show");
        setTimeout(function() {
            $("#links").css("overflow", "visible");
        }, 500);
    } else {
        linkAni();
    }
});
$("input[name='closeBtn']").click(function() {
    $("#links, #wrapper").toggleClass("show");
    $("#links").css("overflow", "");
});

function linkAni() {
    $("#icons").addClass("tada");
    setTimeout(function() {
        $("#icons").removeClass("tada");
    }, 1100);
    $("#icons .fa-github").addClass("hover");
    setTimeout(function() {
        $("#icons .fa-github").removeClass("hover");
        $("#icons .fa-key").addClass("hover");
    }, 100);
    setTimeout(function() {
        $("#icons .fa-key").removeClass("hover");
        $("#icons .fa-telegram").addClass("hover");
    }, 200);
    setTimeout(function() {
        $("#icons .fa-telegram").removeClass("hover");
        $("#icons .fa-twitter").addClass("hover");
    }, 300);
    setTimeout(function() {
        $("#icons .fa-twitter").removeClass("hover");
        $("#icons .fa-reddit-alien").addClass("hover");
    }, 400);
    setTimeout(function() {
        $("#icons .fa-reddit-alien").removeClass("hover");
        $("#icons .fa-steam").addClass("hover");
    }, 500);
    setTimeout(function() {
        $("#icons .fa-steam").removeClass("hover");
        $("#icons .fa-medium").addClass("hover");
    }, 600);
    setTimeout(function() {
        $("#icons .fa-medium").removeClass("hover");
        $("#icons .fa-tumblr").addClass("hover");
    }, 700);
    setTimeout(function() {
        $("#icons .fa-tumblr").removeClass("hover");
        $("#icons .fa-soundcloud").addClass("hover");
    }, 800);
    setTimeout(function() {
        $("#icons .fa-soundcloud").removeClass("hover");
        $("#icons .fa-youtube-play").addClass("hover");
    }, 900);
    setTimeout(function() {
        $("#icons .fa-youtube-play").removeClass("hover");
        $("#icons .fa-twitch").addClass("hover");
    }, 1000);
    setTimeout(function() {
        $("#icons .fa-twitch").removeClass("hover");
    }, 1100);
}

// http://stackoverflow.com/a/7557433/2621063
function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof $ === "function" && el instanceof $) {
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
