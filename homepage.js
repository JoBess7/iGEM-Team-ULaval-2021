var thatMeans = document.getElementById("thatmeans");
var thatMeansDotCounter = 0;
setInterval(() => {
    thatMeansDotCounter += 1;
    thatMeans.innerHTML += ".";
    if(thatMeansDotCounter === 4) {
        thatMeans.innerHTML = "That means ";
        thatMeansDotCounter = 0;
    }
}, 600);


var didScrollHomepage;
$(window).scroll(function() {
    didScrollHomepage = true;
})

const scrollInterval = setInterval(() => {
    if(didScrollHomepage) {
        checkPagePosition();
        didScrollHomepage = false;
    }
    if(Text1OpacityHasLaunched === true) 
    {
        if(PourcentageHasLaunched === true) {
            clearInterval(scrollInterval);
        }
    }
}, 300);

var pourcentage = document.getElementById("pourcentage");
var currentPourcentage = 0;
var PourcentageHasLaunched = false;
var Text1OpacityHasLaunched = false;
var ST;
const checkPagePosition = () => {
    ST = window.pageYOffset;
    if(Text1OpacityHasLaunched === false) {
        if(window.pageYOffset + 500 > window.innerHeight) {
            $("#info-text1").fadeTo("slow", 1);
            Text1OpacityHasLaunched = true;
        }
    }
    if(PourcentageHasLaunched === false) {
        if(checkVisible(pourcentage)) {
            setTimeout(() => {
                PourcentageHasLaunched = true;
                pourcentageCounterUp(); 
            }, 2000);
        }
    }
}

const pourcentageCounterUp = () => {
    currentPourcentage++;
    pourcentage.innerHTML = currentPourcentage + "%";  
    if(currentPourcentage < 73) {
        setTimeout(() => {
            requestAnimationFrame(pourcentageCounterUp);
        }, 40);
    }
    else {
        pourcentage.innerHTML = "73%";
    }
}


function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0) 
}

var bodyRect;
var elementRect;
var offset;
var goutteContainer = document.getElementById("goutte-container");
var entaille = document.getElementById("entaille");
var entailleHeight;
$(window).scroll(function (e) {
    bodyRect = document.body.getBoundingClientRect();
    elemRect = entaille.getBoundingClientRect();
    offset   = elemRect.top - bodyRect.top;
    entailleHeight = entaille.clientHeight;
    var pos = entailleHeight + offset;
    if ($(window).scrollTop() > pos - 45) {
        $("#goutte").css({
            position: 'fixed',
            top: 45,
            height: entaille.clientHeight * 2 
        });
    } else {
        $("#goutte").css({
            position: "absolute",
            top: goutteContainer.clientHeight * 0.7 + 430,
            height: entaille.clientHeight * 2
        });
    }
});

$(window).resize(function () {
    bodyRect = document.body.getBoundingClientRect(),
    elemRect = entaille.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    entailleHeight = entaille.clientHeight;
    var pos = entailleHeight + offset;
    if ($(window).scrollTop() > pos - 45) {
        $("#goutte").css({
            position: 'fixed',
            top: 45,
            height: entaille.clientHeight * 2
        });
    } else {
        $("#goutte").css({
            position: "absolute",
            top: goutteContainer.clientHeight * 0.7 + 430,
            height: entaille.clientHeight * 2
        });
    }
})

var clickables = [
    "#clickable-project",
    "#clickable-team",
    "#clickable-awards",
    "#clickable-safety",
    "#clickable-parts",
    "#clickable-humanpractices"
]

clickables.map((item, index) => {
    $( item ).mouseenter(function() {
        $(item).animate({
            width: 250, height: 310}, {
            duration: 100
        })  
      });
    $( item ).mouseleave(function() {
        $(item).animate({
            width: 240, height: 300}, {
            duration: 100
        })  
      });
  })