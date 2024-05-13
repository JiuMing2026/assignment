$(document).ready(function () {
    changePage();
});

function changePage() {
    $("#index-poster1").show();
    $("#index-logos").show();

    $("#modelpage-header").hide();
    $("#modelpage-content").hide();
    $("#imgs-page").hide();

    $("#coke-imgs").hide();
    $("#fanta-imgs").hide();
    $("#sprite-imgs").hide();

    $("#modelpage").click(function () {
        $("#index-poster1").hide();
        $("#index-logos").hide();

        $("#modelpage-header").show();
        $("#modelpage-content").show();
        $("#imgs-page").show();

        $("#coke-imgs").show();
        $("#fanta-imgs").hide();
        $("#sprite-imgs").hide();
    });

    $("#mobile-modelpage").click(function () {
        $("#index-poster1").hide();
        $("#index-logos").hide();

        $("#modelpage-header").show();
        $("#modelpage-content").show();
        $("#imgs-page").show();

        $("#coke-imgs").show();
        $("#fanta-imgs").hide();
        $("#sprite-imgs").hide();
    });

    $("#footer-modelpage").click(function () {
        $("#index-poster1").hide();
        $("#index-logos").hide();

        $("#modelpage-header").show();
        $("#modelpage-content").show();
        $("#imgs-page").show();

        $("#coke-imgs").show();
        $("#fanta-imgs").hide();
        $("#sprite-imgs").hide();
    });
}