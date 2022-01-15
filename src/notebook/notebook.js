var viewList = [
    {
        name: '#item-view-1',
        state: false,
        icon: '#item-icon-1',
        height: 300
    },
    {
        name: '#item-view-2',
        state: false,
        icon: '#item-icon-2',
        height: 370
    },
    {
        name: '#item-view-3',
        state: false,
        icon: '#item-icon-3',
        height: 300
    },
    {
        name: '#item-view-4',
        state: false,
        icon: '#item-icon-4',
        height: 300
    },
    {
        name: '#item-view-5',
        state: false,
        icon: '#item-icon-5',
        height: 300
    },
    {
        name: '#item-view-6',
        state: false,
        icon: '#item-icon-6',
        height: 300
    },
    {
        name: '#item-view-7',
        state: false,
        icon: '#item-icon-7',
        height: 300
    },
    {
        name: '#item-view-8',
        state: false,
        icon: '#item-icon-8',
        height: 300
    },
    {
        name: '#item-view-9',
        state: false,
        icon: '#item-icon-9',
        height: 300
    },
    {
        name: '#item-view-10',
        state: false,
        icon: '#item-icon-10',
        height: 300
    },
]

var index;
var isAnimating = false;
viewList.map((view, index) => {
    $(view.name).click(function () {
        index = view.name[view.name.length - 1];
        if (!view.state) {
            if (!isAnimating) {
                isAnimating = true;
                view.state = true;
                $(view.icon).removeClass('icon-unrotate');
                $(view.icon).addClass('icon-rotate');
                $(view.name).animate({
                    height: $(view.name).get(0).scrollHeight
                }, {
                    duration: 500,
                    complete: function () {
                        isAnimating = false;
                    }
                })
            }
        } else {
            if (!isAnimating) {
                isAnimating = false;
                view.state = false;
                $(view.icon).addClass('icon-unrotate');
                $(view.icon).removeClass('icon-rotate');
                $(view.name).animate({
                    height: 70
                }, {
                    duration: 500,
                    complete: function () {
                        isAnimating = false;
                    }
                })
            }
        }
    })
})

viewList.map((view, index) => {
    index = view.name[view.name.length - 1];
    view.state = false;
    $(view.icon).addClass('icon-unrotate');
    $(view.icon).removeClass('icon-rotate');
    $(view.name).animate({
        height: 70
    }, {
        duration: 500,
    })
})