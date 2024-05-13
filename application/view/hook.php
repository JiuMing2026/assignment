<?php
// Specify the path to the thumbnail directory
$directory = "../assets/images/logo";
// Only load files with the following extensions
$extensions = array("png");
// An array used to separate the extension from each file
$dile_parts = array();
// Response message
$response = "";
// Opens the directory to parse the images
$dir_handle = opendir($directory);
// Iterate through all the files
while ($file = readdir($dir_handle)) {
    // First check for hidden files
    if (substr($file, 0, 1) != ".") {
        // Split each file name to extract the file extension
        $file_components = explode(".", $file);
        // Grab the extension token
        $extension = strtolower(array_pop($file_components));
        // Is this file a valid image. If so, add it to the response
        if (in_array($extension, $extensions)) {
            $response .= $directory. "/" . $file . "~";
        }
    }
}
closedir($dir_handle);
// Return response while removing the last ~ separator
echo substr_replace($response, "", -1);
