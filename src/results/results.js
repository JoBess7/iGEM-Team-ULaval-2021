var expandables = [
    {
        id: '#exp1',
        icon: "#icon1",
        opened: false,
        isAnim: false
    },
    {
        id: "#exp2",
        icon: "#icon2",
        opened: false,
        isAnim: false
    },
    {
        id: '#exp3',
        icon: "#icon3",
        opened: false,
        isAnim: false
    },
    {
        id: '#exp4',
        icon: "#icon4",
        opened: false,
        isAnim: false
    }
]

expandables.map((exp) => {
    $(exp.id).click(() => {
        if (!exp.isAnim) {
            exp.isAnim = true;
            if (!exp.opened) {
                $(exp.icon).addClass("icon-rotate");
                $(exp.icon).removeClass("icon-unrotate");
                exp.opened = true;
                $(exp.id).animate({
                    height: $(exp.id).get(0).scrollHeight
                }, {
                    duration: 500,
                    complete: function () {
                        exp.isAnim = false;
                    }
                })
            } else {
                $(exp.icon).removeClass("icon-rotate");
                $(exp.icon).addClass("icon-unrotate");
                exp.opened = false;
                $(exp.id).animate({
                    height: 50
                }, {
                    duration: 500,
                    complete: function () {
                        exp.isAnim = false
                    }
                })
            }
        }
    })
})