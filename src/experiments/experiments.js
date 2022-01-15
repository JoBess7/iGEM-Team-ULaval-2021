var protocols = [
    {
        id: "#1",
        icon: "#icon1",
        opened: false,
        isAnimating: false
    },
    {
        id: "#2",
        icon: "#icon2",
        opened: false,
        isAnimating: false
    },
    {
        id: "#3",
        icon: "#icon3",
        opened: false,
        isAnimating: false
    },
    {
        id: "#4",
        icon: "#icon4",
        opened: false,
        isAnimating: false
    },
    {
        id: "#5",
        icon: "#icon5",
        opened: false,
        isAnimating: false
    },
    {
        id: "#6",
        icon: "#icon6",
        opened: false,
        isAnimating: false
    },
    {
        id: "#7",
        icon: "#icon7",
        opened: false,
        isAnimating: false
    },
    {
        id: "#8",
        icon: "#icon8",
        opened: false,
        isAnimating: false
    },
    {
        id: "#9",
        icon: "#icon9",
        opened: false,
        isAnimating: false
    },
    {
        id: "#10",
        icon: "#icon10",
        opened: false,
        isAnimating: false
    },
    {
        id: "#11",
        icon: "#icon11",
        opened: false,
        isAnimating: false
    },
    {
        id: "#12",
        icon: "#icon12",
        opened: false,
        isAnimating: false
    },
    {
        id: "#13",
        icon: "#icon13",
        opened: false,
        isAnimating: false
    },
    {
        id: "#14",
        icon: "#icon14",
        opened: false,
        isAnimating: false
    },
    {
        id: "#15",
        icon: "#icon15",
        opened: false,
        isAnimating: false
    },
    {
        id: "#16",
        icon: "#icon16",
        opened: false,
        isAnimating: false
    },
    {
        id: "#17",
        icon: "#icon17",
        opened: false,
        isAnimating: false
    },
    {
        id: "#18",
        icon: "#icon18",
        opened: false,
        isAnimating: false
    },
    {
        id: "#19",
        icon: "#icon19",
        opened: false,
        isAnimating: false
    },
    {
        id: "#20",
        icon: "#icon20",
        opened: false,
        isAnimating: false
    },
    {
        id: "#21",
        icon: "#icon21",
        opened: false,
        isAnimating: false
    },
    {
        id: "#22",
        icon: "#icon22",
        opened: false,
        isAnimating: false
    },

]

protocols.map((protocol) => {
    $(protocol.id).click(() => {
        if (!protocol.isAnimating) {
            if (!protocol.opened) {
                protocol.opened = true;
                $(protocol.icon).toggleClass("icon-rotate");
                $(protocol.icon).removeClass("icon-unrotate");
                protocol.isAnimating = true;
                $(protocol.id).animate({
                    height: $(protocol.id).get(0).scrollHeight
                }, {
                    duration: 500,
                    complete: function () {
                        protocol.isAnimating = false;
                    }
                })
            } else {
                $(protocol.icon).toggleClass("icon-unrotate");
                $(protocol.icon).removeClass("icon-rotate");
                protocol.opened = false;
                protocol.isAnimating = true;
                $(protocol.id).animate({
                    height: 60
                }, {
                    duration: 500,
                    complete: function () {
                        protocol.isAnimating = false;
                    }
                })
            }
        }
    })
})