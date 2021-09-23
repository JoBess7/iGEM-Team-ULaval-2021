var currentFolder = "organized";

$("#cut-left").click(function() {
    if(currentFolder == "participated") {
        currentFolder = "organized";
        $("#separator-right").css({"opacity": 0});
        $("#separator-left").css({"opacity": 1});
        $("#folder-participated").css({"display": "none"});
        $("#folder-organized").css({"display": "flex"});
    }
})
$("#cut-right").click(function() {
    if(currentFolder == "organized") {
        currentFolder = "participated";
        $("#separator-left").css({"opacity": 0});
        $("#separator-right").css({"opacity": 1});
        $("#folder-organized").css({"display": "none"});
        $("#folder-participated").css({"display": "flex"});
    }
})