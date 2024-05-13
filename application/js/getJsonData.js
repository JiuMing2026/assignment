$(document).ready(function () {
    // AJAX service request to get the main text data from the json data store
    $.getJSON("../assets/models/data.json", function(data){
        console.log(data);
        // Get the home page main text data
        $('#style2-coke-title').html(data.pageTextData[0].title);
        $('#style2-coke-subTitle').html(data.pageTextData[0].subTitle);
        $('#style2-coke-description').html(data.pageTextData[0].description);

        $('#style2-fanta-title').html(data.pageTextData[1].title);
        $('#style2-fanta-subTitle').html(data.pageTextData[1].subTitle);
        $('#style2-fanta-description').html(data.pageTextData[1].description);

        $('#style2-sprite-title').html(data.pageTextData[2].title);
        $('#style2-sprite-subTitle').html(data.pageTextData[2].subTitle);
        $('#style2-sprite-description').html(data.pageTextData[2].description);

        $('#style3-coke-title').html(data.pageTextData[0].title);
        $('#style3-coke-subTitle').html(data.pageTextData[0].subTitle);
        $('#style3-coke-description').html(data.pageTextData[0].description);

        $('#style3-fanta-title').html(data.pageTextData[1].title);
        $('#style3-fanta-subTitle').html(data.pageTextData[1].subTitle);
        $('#style3-fanta-description').html(data.pageTextData[1].description);

        $('#style3-sprite-title').html(data.pageTextData[2].title);
        $('#style3-sprite-subTitle').html(data.pageTextData[2].subTitle);
        $('#style3-sprite-description').html(data.pageTextData[2].description);
    });
});
