$(document).ready(function() {
    $("#model-fancybox").fancybox();
    changeAnimation();
    resetAnimation();
});

function changeAnimation(){
    var action = '';
    $('#extraModel').attr('url', defaultModelUrl);
    $("#animateChange1").click(function(){
        action = action1ModelUrl;
        $.fancybox.close();
        $('#extraModel').attr('url', action);
    });
    $("#animateChange2").click(function(){
        action = action2ModelUrl;
        $.fancybox.close();
        $('#extraModel').attr('url', action);
    });
}

function resetAnimation(){
    $("#resetChange").click(function(){
        $.fancybox.close();
        $('#extraModel').attr('url', defaultModelUrl);
    });
}
