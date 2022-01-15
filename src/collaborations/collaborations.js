var currentFolder = "organized";

$("#cut-left").click(function () {
    if (currentFolder == "participated") {

        $("#org-invis").addClass("vis");
        $("#org-invis").removeClass("invis");

        $("#part-invis").addClass("invis");
        $("#part-invis").removeClass("vis");
        currentFolder = "organized";
        $("#separator-right").css({ "opacity": 0 });
        $("#separator-left").css({ "opacity": 1 });
        $("#folder-participated").css({ "display": "none" });
        $("#folder-organized").css({ "display": "flex" });
    }
})
$("#cut-right").click(function () {
    if (currentFolder == "organized") {
        $("#org-invis").addClass("invis");
        $("#org-invis").removeClass("vis");

        $("#part-invis").addClass("vis");
        $("#part-invis").removeClass("invis");
        currentFolder = "participated";
        $("#separator-left").css({ "opacity": 0 });
        $("#separator-right").css({ "opacity": 1 });
        $("#folder-organized").css({ "display": "none" });
        $("#folder-participated").css({ "display": "flex" });
    }
})

var dots = [
    {
        dot: "#dot1",
        postcard: "#postcard1",
        on: true,
        num: 0
    },
    {
        dot: "#dot2",
        postcard: "#postcard2",
        on: false,
        num: 1
    }
]

var current = 0;
dots.map((dot) => {
    $(dot.dot).click(() => {
        if (!dot.on) {
            dot.on = true;

            dots[current].on = false;
            $(dots[current].dot).removeClass("toOp1");
            $(dots[current].dot).addClass("toOp0");
            $(dots[current].postcard).removeClass("opacity1");
            $(dots[current].postcard).addClass("opacty0");

            current = dot.num;
            $(dot.dot).addClass("toOp1");
            $(dot.dot).removeClass("toOp0");

            $(dot.postcard).addClass("opacity1");
            $(dot.postcard).removeClass("opacity0");
        }
    })
})

var dots2 = [
    {
        dot: "#dot11",
        postcard: "#img1",
        on: true,
        num: 0
    },
    {
        dot: "#dot22",
        postcard: "#img2",
        on: false,
        num: 1
    },
    {
        dot: "#dot33",
        postcard: "#img3",
        on: false,
        num: 2
    },
    {
        dot: "#dot44",
        postcard: "#img4",
        on: false,
        num: 3
    }
]

var currentImg = 0;
dots2.map((dot) => {
    $(dot.dot).click(() => {
        if (!dot.on) {
            dot.on = true;

            dots2[currentImg].on = false;
            $(dots2[currentImg].dot).removeClass("toOp1");
            $(dots2[currentImg].dot).addClass("toOp0");
            $(dots2[currentImg].postcard).removeClass("opacity1");
            $(dots2[currentImg].postcard).addClass("opacty0");

            currentImg = dot.num;
            $(dot.dot).addClass("toOp1");
            $(dot.dot).removeClass("toOp0");

            $(dot.postcard).addClass("opacity1");
            $(dot.postcard).removeClass("opacity0");
        }
    })
})