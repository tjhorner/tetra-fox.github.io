$("#pulse").click(function() {
    //https://github.com/jimkang/fuck-shit-up-bookmarklet/blob/master/chrome/bookmarklet.js
    $.getScript("assets/js/fuck-shit-up.min.js");
});

var botsModal = $("#bots-modal").iziModal();
$("#bots-link").click(function() {
    botsModal.iziModal("open");
});

function updateLfm() {
    $.getScript("assets/js/last.fm.js");
}
updateLfm();
setInterval(updateLfm, 60000);
