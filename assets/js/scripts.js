$("#pulse").click(function() {
    //https://github.com/jimkang/fuck-shit-up-bookmarklet/blob/master/chrome/bookmarklet.js
    $.getScript("assets/js/fuck-shit-up.min.js");
});

var botsModal = $("#bots-modal").iziModal();
$("#bots-link").click(function() {
    botsModal.iziModal("open");
});

function updateLfm() {
    $.ajax({
        url: "https://lastfm.tetrafox.pw",
        success: function(data) {
            console.log(data);
            $("#lfm").text(" I'm currently listening to " + data.track + " by " + data.artist + ".");
        },
        error: function() {
            $("#lfm").remove();
            console.log("no");
        }
    });
}
updateLfm();
setInterval(updateLfm, 60000);