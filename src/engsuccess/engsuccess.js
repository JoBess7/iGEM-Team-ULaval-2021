var categories = [
    {
        num: 0,
        id: "#cat1",
        on: true,
        section: "#design"
    },
    {
        num: 1,
        id: "#cat2",
        on: false,
        section: "#build"
    },
    {
        num: 2,
        id: "#cat3",
        on: false,
        section: "#test"
    },
    {
        num: 3,
        id: "#cat4",
        on: false,
        section: "#learn"
    }
]
var isAnimatingCat = false;
var current = 0;

categories.map((cat) => {
    $(cat.id).click(() => {
        if (!isAnimatingCat) {
            if (cat.on == false) {
                categories[current].on = false;
                $(categories[current].id).addClass("boxshadow-off");
                $(categories[current].id).removeClass("boxshadow-on");
                $(categories[current].section).addClass("undis");
                $(categories[current].section).removeClass("displayed");
                current = cat.num;
                cat.on = true;
                $(cat.id).addClass("boxshadow-on");
                $(cat.id).removeClass("boxshadow-off");

                $(cat.section).addClass("displayed");
                $(cat.section).removeClass("undis");
            }
        }
    })
})
