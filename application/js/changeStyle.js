var counter = 0;
function changeStyle() {
    counter +=1;
    switch (counter) {
        case 1:
            document.getElementById("index-poster1").style.backgroundColor = "#e7eaf0";
            document.getElementById("body").style.backgroundColor = "#FF9900";
            document.getElementById("footer").style.backgroundColor = "#996699";

            document.getElementById("slider-active2").style.display = "block";
            document.getElementById("slider-active1").style.display = "none";
            document.getElementById("slider-active3").style.display = "none";
            break
        case 2:
            document.getElementById("index-poster1").style.backgroundColor = "#f6f6f6";
            document.getElementById("body").style.backgroundColor = "coral";
            document.getElementById("footer").style.backgroundColor = "#FF9900";

            document.getElementById("slider-active3").style.display = "block";
            document.getElementById("slider-active1").style.display = "none";
            document.getElementById("slider-active2").style.display = "none";
            break
        case 3:
            counter = 0;
            document.getElementById("index-poster1").style.backgroundColor = "#effafa";
            document.getElementById("body").style.backgroundColor = "#ffffff";
            document.getElementById("footer").style.backgroundColor = "#effafa";

            document.getElementById("slider-active1").style.display = "block";
            document.getElementById("slider-active2").style.display = "none";
            document.getElementById("slider-active3").style.display = "none";
            break
    }
}

function resetStyle() {
    document.getElementById("index-poster1").style.backgroundColor = "#effafa";
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("footer").style.backgroundColor = "#effafa";

    document.getElementById("slider-active1").style.display = "block";
    document.getElementById("slider-active2").style.display = "none";
    document.getElementById("slider-active3").style.display = "none";
}