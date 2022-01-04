var priorities1 = document.getElementById("priorities1");
var gathering1 = document.getElementById("gathering1");
var priorities2 = document.getElementById("priorities2");
var gathering2 = document.getElementById("gathering2");
var priorities1DotCounter = 0;
setInterval(() => {
    priorities1DotCounter += 1;
    gathering1.innerHTML += '.';
    gathering2.innerHTML += '.';
    priorities1.innerHTML += ".";
    priorities2.innerHTML += ".";
    if(priorities1DotCounter === 4) {
        priorities1.innerHTML = "Our priorities ";
        priorities2.innerHTML = "Our priorities ";
        gathering1.innerHTML = "Gathering knowledge ";
        gathering2.innerHTML = "Gathering knowledge ";
        priorities1DotCounter = 0;
    }
}, 700);

var opened = false
var expand1IsAnimating = false;
$('#expandable1').click(() => {
    if(expand1IsAnimating == false) {
        if(!opened) {
            $("#item-icon").addClass("icon-rotate");
            $("#item-icon").removeClass("icon-unrotate");
            opened = true;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: $("#expandable1").get(0).scrollHeight}, {
                duration: 500,
                complete: function() {
                    expand1IsAnimating = false;
                }
            }) 
        } else {
            $("#item-icon").addClass("icon-unrotate");
            $("#item-icon").removeClass("icon-rotate");
            opened = false;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: 45}, {
                duration: 500,
                complete: function() {
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

expandables.map((expandable) => {
    $(expandable.name).click(() => {
        if(expandable.isAnimating == false) {
            if(!expandable.opened) {
                $(expandable.icon).addClass("icon-rotate");
                $(expandable.icon).removeClass("icon-unrotate");
                expandable.opened = true;
                expandable.isAnimating = true;
                $(expandable.name).animate({
                    height: $(expandable.name).get(0).scrollHeight}, {
                    duration: 500,
                    complete: function() {
                        expandable.isAnimating = false;
                    }
                }) 
            } else {
                $(expandable.icon).addClass("icon-unrotate");
                $(expandable.icon).removeClass("icon-rotate");
                expandable.opened = false;
                expandable.isAnimating = true;
                $(expandable.name).animate({
                    height: 45}, {
                    duration: 500,
                    complete: function() {
                        expandable.isAnimating = false;
                    }
                }) 
            }
        }
    })
})