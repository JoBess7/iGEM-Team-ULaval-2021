var currentPic = 1;
var picObject = [
    {    
        dot: "#dot1",
        pic: "#pic1",
        num: 1,
    },
    {    
        dot: "#dot2",
        pic: "#pic2",
        num: 2,
    },
    {    
        dot: "#dot3",
        pic: "#pic3",
        num: 3,
    },
    {    
        dot: "#dot4",
        pic: "#pic4",
        num: 4,
    }
]

picObject.map((item) => {
    $(item.dot).click(() => {
        $(`#pic${currentPic}`).addClass("fade-out");
        $(`#pic${currentPic}`).removeClass("fade-in"); 
        $(`#dot${currentPic}`).removeClass("toOrange"); 
        $(`#dot${currentPic}`).addClass("toWhite");
        currentPic = item.num;
        $(item.pic).addClass("fade-in");
        $(item.pic).removeClass("fade-out");
        $(item.dot).removeClass("toWhite");
        $(item.dot).addClass("toOrange");
    })
})