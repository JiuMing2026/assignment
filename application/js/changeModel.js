$(document).ready(function () {
    changeModel();
});

function changeModel() {
    $("#model-title").html("Coca Cola Bottle");
    $("#model-description").html("This is a 3D model of a Coca Cola bottle. The model is interactive and can be rotated in 3D space.");
    $("#imgs-page").hide();
    $("#coke-imgs").hide();
    $("#fanta-imgs").hide();
    $("#sprite-imgs").hide();

    $("#show-cokeModel").click(function () {
        $("#SceneSwitch").attr("whichChoice", "0");
        $("#model-title").html("Coca Cola Bottle");
        $("#model-description").html("This is a 3D model of a Coca Cola bottle. The model is interactive and can be rotated in 3D space.");
        $("#coke-imgs").show();
        $("#fanta-imgs").hide();
        $("#sprite-imgs").hide();
    });

    $("#show-fantaModel").click(function () {
        $("#SceneSwitch").attr("whichChoice", "1");
        $("#model-title").html("Fanta Can");
        $("#model-description").html("This is a 3D model of a Fanta can. The model is interactive and can be rotated in 3D space.");
        $("#coke-imgs").hide();
        $("#fanta-imgs").show();
        $("#sprite-imgs").hide();
    });

    $("#show-spriteModel").click(function () {
        $("#SceneSwitch").attr("whichChoice", "2");
        $("#model-title").html("Sprite Cup");
        $("#model-description").html("This is a 3D model of a Sprite cup. The model is interactive and can be rotated in 3D space.");
        $("#coke-imgs").hide();
        $("#fanta-imgs").hide();
        $("#sprite-imgs").show();
    });
}