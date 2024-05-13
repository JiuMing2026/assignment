function getXMLHttp() {
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                return false;
            }
        }
    }
    return xmlHttp;
}

// Create the XMLHttpRequest object for communicating with the web server
var xmlHttp = new XMLHttpRequest();
// Stores number of horizontalColumns gallery has, if too large it won't fit in browser window
var numberOfCol = 4;
// Stores newly generated gallery HTML code
var htmlCode = "";
// Temporarily stores server response while code is generated
var response;

$(document).ready(function() {
    // Set up the path to the PHP function that reads the image directory to find the thumbnail file names
    var send = "../view/hook.php";
    // Open the connection to the web server
    xmlHttp.open("GET", send, true);
    // Tell the server that the client has no outgoing message
    xmlHttp.send(null);
    // Check we get a valid server response
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
            // Response handler code
            // alert(xmlHttp.responseText);
            // Tokenise the response
            response = xmlHttp.responseText.split("~");
            // Start to write the HTML code into the htmlCode string
            htmlCode += '<div class="row">';
            // Loop round the response array of token, which are the image names
            for (var i = 0; i < response.length; i++) {
                // And continue to build the HTML code for the gallery
                htmlCode += '<div class="col-lg-4 col-md-4">';
                htmlCode += '<div class="single-banner mb-30 scroll-zoom">';
                htmlCode += '<img class="animated" alt="" src="' + response[i] + '"/>';
                htmlCode += '</div>';
                htmlCode += '</div>';
            }
            htmlCode += '</div>';
            // Write the HTML code into the gallery
            document.getElementById("logos-display").innerHTML = htmlCode;
        }
    };
});