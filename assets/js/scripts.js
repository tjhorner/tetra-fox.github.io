$("#pulse").click(function() {
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
            $("#lfm").text(" I'm currently listening to " + data.track + " by " + data.artist + ".");
        },
        error: function() {
            $("#lfm").remove();
        }
    });
}

setInterval(updateLfm, 60000);