

var opened = false
var expand1IsAnimating = false;
$('#expandable1').click(() => {
    if (expand1IsAnimating == false) {
        if (!opened) {
            $("#item-icon").addClass("icon-rotate");
            $("#item-icon").removeClass("icon-unrotate");
            opened = true;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: $("#expandable1").get(0).scrollHeight
            }, {
                duration: 500,
                complete: function () {
                    expand1IsAnimating = false;
                }
            })
        } else {
            $("#item-icon").addClass("icon-unrotate");
            $("#item-icon").removeClass("icon-rotate");
            opened = false;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: 60
            }, {
                duration: 500,
                complete: function () {
                    expand1IsAnimating = false;
                }
            })
        }
    }
})

var expandables = [
    {
        name: "#expandable2",
        icon: "#item-icon2",
        opened: false,
        isAnimating: false,
    },
    {
        name: "#expandable3",
        icon: "#item-icon3",
        opened: false,
        isAnimating: false,
    },
    {
        name: "#expandable4",
        icon: "#item-icon4",
        opened: false,
        isAnimating: false,
    }
]

expandables.map((expandable) => {
    $(expandable.name).click(() => {
        if (expandable.isAnimating == false) {
            if (!expandable.opened) {
                $(expandable.icon).addClass("icon-rotate");
                $(expandable.icon).removeClass("icon-unrotate");
                expandable.opened = true;
                expandable.isAnimating = true;
                $(expandable.name).animate({
                    height: $(expandable.name).get(0).scrollHeight
                }, {
                    duration: 500,
                    complete: function () {
                        expandable.isAnimating = false;
                    }
                })
            } else {
                $(expandable.icon).addClass("icon-unrotate");
                $(expandable.icon).removeClass("icon-rotate");
                expandable.opened = false;
                expandable.isAnimating = true;
                $(expandable.name).animate({
                    height: 60
                }, {
                    duration: 500,
                    complete: function () {
                        expandable.isAnimating = false;
                    }
                })
            }
        }
    })
})

var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");

setInterval(() => {
    vid3.currentTime = 0;
    vid4.currentTime = 0;
    vid3.play();
    vid4.play();
}, 4000);

var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");

setInterval(() => {
    vid1.currentTime = 0;
    vid2.currentTime = 0;
    vid1.play();
    vid2.play();
}, 4000);