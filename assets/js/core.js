$(() => {
    $("#menuToggle").click(() => {
        $("#menuBar").toggleClass("close-bar");
        $("#mainContainer").toggleClass("fill-width");
        $("#menuToggle > i").toggleClass("mdi-arrow-right");
    });
})