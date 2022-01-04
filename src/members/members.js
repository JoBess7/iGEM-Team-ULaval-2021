var emilieAboutIsOn = false;
var marianneAboutIsOn = false;
var catherineAboutIsOn = false;
var benjaminAboutIsOn = false;
var luigiAboutIsOn = false;
var joanaAboutIsOn = false;
var mathieuAboutIsOn = false;
var jonathanAboutIsOn = false;
var eloiseAboutIsOn = false;
var etienneAboutIsOn = false;
var olivierAboutIsOn = false;
var pascaleAboutIsOn = false;
var florenceAboutIsOn = false;
var mireilleAboutIsOn = false;
var etienneAboutIsOn = false;
var eloiseAboutIsOn = false;
var isAnimating = false;

var god = [
    {
        trigger: '#meet-emilie',
        visibility: emilieAboutIsOn,
        element: '#emilie-about',
    },
    {
        trigger: '#meet-marianne',
        visibility: marianneAboutIsOn,
        element: '#marianne-about',
    },
    {
        trigger: '#meet-catherine',
        visibility: catherineAboutIsOn,
        element: '#catherine-about',
    },
    {
        trigger: '#meet-benjamin',
        visibility: benjaminAboutIsOn,
        element: '#benjamin-about',
    },
    {
        trigger: '#meet-luigi',
        visibility: luigiAboutIsOn,
        element: '#luigi-about',
    },
    {
        trigger: '#meet-joana',
        visibility: joanaAboutIsOn,
        element: '#joana-about',
    },
    {
        trigger: '#meet-mathieu',
        visibility: mathieuAboutIsOn,
        element: '#mathieu-about',
    },
    {
        trigger: '#meet-jonathan',
        visibility: jonathanAboutIsOn,
        element: '#jonathan-about',
    },
    {
        trigger: '#meet-eloise',
        visibility: eloiseAboutIsOn,
        element: '#eloise-about',
    },
    {
        trigger: '#meet-etienne',
        visibility: etienneAboutIsOn,
        element: '#etienne-about',
    },
    {
        trigger: '#meet-olivier',
        visibility: olivierAboutIsOn,
        element: '#olivier-about',
    },
    {
        trigger: '#meet-pascale',
        visibility: pascaleAboutIsOn,
        element: '#pascale-about',
    },
    {
        trigger: '#meet-florence',
        visibility: florenceAboutIsOn,
        element: '#florence-about',
    },
    {
        trigger: '#meet-mireille',
        visibility: mireilleAboutIsOn,
        element: '#mireille-about',
    },
    {
        trigger: '#meet-eloise',
        visibility: eloiseAboutIsOn,
        element: '#eloise-about',
    },
]

god.map((member) => {
    $(member.trigger).click(function() {
        if(isAnimating === false) {
            isAnimating = true;
            setTimeout(() => {
                isAnimating = false;
            }, 300);
            switch(member.visibility) {
                case(false):
                    member.visibility = true;
                    $(member.element).removeClass('ASRotateBack');
                
                    $(member.element).addClass('ASRotate');
                    break;
                case(true):
                    member.visibility = false;
                    $(member.element).addClass('ASRotateBack');
                
                    $(member.element).removeClass('ASRotate');
                    break;
            }
        }
    })
})
