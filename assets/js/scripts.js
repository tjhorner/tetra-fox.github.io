$("#pulse").click(function() {
    alert("yeet");
});

var botsModal = $("#bots-modal").iziModal();

$("#bots-link").click(function() {
    botsModal.iziModal("open");
});