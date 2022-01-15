var ListElementText = [
    {
        idElement: "#element-text2",
        idIcon: "#slide2",
        iconAnimating: false,
        display: "#h-display2",
        displayMouse: false,
        checker: "#checker2"
    },
    {
        idElement: "#element-text3",
        idIcon: "#slide3",
        iconAnimating: false,
        display: "#h-display3",
        displayMouse: false,
        checker: "#checker3"
    },
    {
        idElement: "#element-text4",
        idIcon: "#slide4",
        iconAnimating: false,
        display: "#h-display4",
        displayMouse: false,
        checker: "#checker4"
    }
]

ListElementText.map((item) => {
    $(item.idElement).mouseenter(function () {
        $(item.display).css("display", "flex");
        $(item.checker).css('background-color', '#b85933;');
    });

    $(item.display).mouseenter(function () {
        item.displayMouse = true;
    });

    $(item.display).mouseleave(function () {
        item.displayMouse = false;
    });

    $(item.checker).mouseleave(function () {
        if (item.displayMouse == false) {
            $(item.display).css("display", "none");
        }
    });
})

var ListProject = [
    {
        idElement: "#element-text1",
        idIcon: "#slide1",
        iconAnimating: false,
        display: "#h-display1",
        displayMouse: false,
        checker: "#checker1",
        sub1: "#h-sub1",
        sub2: "#h-sub2",
        displaySub1: false,
        displaySub2: false,
        ham1: "#ham-flex1",
        ham2: "#ham-flex2",
        checkBasic: false,
        checkGreat: false
    }
]

ListProject.map((item) => {
    $(item.idElement).mouseenter(function () {
        $(item.display).css("display", "flex");
    });

    $(item.display).mouseenter(function () {
        item.displayMouse = true;
    });

    $(item.display).mouseleave(function () {
        item.displayMouse = false;
    });

    $(item.checker).mouseleave(function () {
        if (item.displayMouse == false) {
            $(item.display).css("display", "none");
        }
    });

    $(item.ham1).mouseenter(function () {
        $(item.sub1).css("display", "flex");
        item.checkBasic = true;
    })

    $(item.ham2).mouseenter(function () {
        $(item.sub2).css("display", "flex");
        item.checkGreat = true;
    })

    $(item.ham1).mouseleave(function () {
        if (item.displaySub1 == false) {
            $(item.sub1).css("display", "none");
        }
    })

    $(item.ham2).mouseleave(function () {
        if (item.displaySub2 == false) {
            $(item.sub2).css("display", "none");
        }
    })

    $(item.sub1).mouseenter(function () {
        item.displaySub1 = true;
    })

    $(item.sub2).mouseenter(function () {
        item.displaySub2 = true;
    })

    $(item.sub1).mouseleave(function () {
        item.displaySub1 = false;
    })

    $(item.sub2).mouseleave(function () {
        item.displaySub2 = false;
    })
})

var socials = [document.getElementById('fb'), document.getElementById('ig'), document.getElementById('mail')];
var socialsContainer = document.getElementById("socials-container");
var headerIsDown;
var deltaMobile = 0;
var header = document.getElementById('header');
var headerLogo = document.getElementById('header-logo');
var headerMenu = document.getElementById('header-burger');
var ST;
var deltaHeader = 120;
var oldScrollTop = 0;
var didScroll;
$(window).scroll(function () {
    if (!didScroll) {
        setDidScrollTrue();
    }
})
function setDidScrollTrue() {
    didScroll = true;
}
setInterval(function () {
    if (didScroll) {
        headerBodyScroll();
        didScroll = false;
    }
}, 250);

const headerBodyScroll = () => {
    ST = window.pageYOffset;
    if (ST > deltaHeader) {
        headerIsDown = false;

        header.classList.add('header-smaller');
        header.classList.remove('header-bigger');

        headerLogo.classList.add('header-logo-smaller');
        headerLogo.classList.remove('header-logo-bigger');

        headerMenu.classList.add('header-menu-smaller');
        headerMenu.classList.remove('header-menu-bigger');

        socialsContainer.classList.add("fadeTo1");
        socialsContainer.classList.remove("fadeTo0");

    } else {
        headerIsDown = true;
        header.classList.remove('header-smaller');
        header.classList.add('header-bigger');

        headerLogo.classList.remove('header-logo-smaller');
        headerLogo.classList.add('header-logo-bigger');

        headerMenu.classList.remove('header-menu-smaller');
        headerMenu.classList.add('header-menu-bigger');

        socialsContainer.classList.remove("fadeTo1");
        socialsContainer.classList.add("fadeTo0");
    }
    oldScrollTop = ST;
}


$("#header-burger").click(function () {
    burgerAnimationOnClick();
})

var menuBurgerOpened = false;
var menuD = document.getElementById("h-menuD");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
const burgerAnimationOnClick = () => {
    if (!menuBurgerOpened) {
        menuBurgerOpened = true;

        menuD.classList.add("h-menuDvisible");
        menuD.classList.remove("h-menuDinvisible");

        line1.classList.add("line1-rotate");
        line1.classList.remove("line1-unrotate");

        line3.classList.add("line3-rotate");
        line3.classList.remove("line3-unrotate");

        line2.classList.add("line2-translateX");
        line2.classList.remove("line2-untranslateX");
    } else {
        menuBurgerOpened = false;

        menuD.classList.add("h-menuDinvisible");
        menuD.classList.remove("h-menuDvisible");

        line1.classList.add("line1-unrotate");
        line1.classList.remove("line1-rotate");

        line3.classList.add("line3-unrotate");
        line3.classList.remove("line3-rotate");

        line2.classList.add("line2-untranslateX");
        line2.classList.remove("line2-translateX");
    }
}

var expandComponents = [
    {
        id: "#clickable1",
        state: "0",
        animating: false,
        toModif: "#modifyHeight1",
        desiredHeight: 273,
        speed: 400,
        icon: "#iconslide1"
    },
    {
        id: "#clickable2",
        state: "0",
        animating: false,
        toModif: "#modifyHeight2",
        desiredHeight: 109,
        speed: 250,
        icon: "#iconslide2"
    },
    {
        id: "#clickable3",
        state: "0",
        animating: false,
        toModif: "#modifyHeight3",
        desiredHeight: 135,
        speed: 250,
        icon: "#iconslide3"
    },
    {
        id: "#clickable4",
        state: "0",
        animating: false,
        toModif: "#modifyHeight4",
        desiredHeight: 167,
        speed: 250,
        icon: "#iconslide4"
    },
]

expandComponents.map((item) => {
    $(item.id).click(() => {
        if (item.state == 0) {
            if (item.animating == false) {
                $(item.icon).addClass("rotateUp");
                $(item.icon).removeClass("rotateDown");
                item.animating = true;
                item.state = 1;
                $(item.toModif).animate({
                    height: item.desiredHeight
                }, item.speed, function () {
                    item.animating = false;
                })
            }
        } else if (item.animating == false) {
            $(item.icon).addClass("rotateDown");
            $(item.icon).removeClass("rotateUp");
            item.animating = true;
            item.state = 0;
            $(item.toModif).animate({
                height: 48
            }, item.speed, function () {
                item.animating = false;
            })
        }
    })
})