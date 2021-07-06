var thatMeans = document.getElementById("thatmeans");
var thatMeansDotCounter = 0;
setInterval(() => {
    thatMeansDotCounter += 1;
    thatMeans.innerHTML += ".";
    if(thatMeansDotCounter === 4) {
        thatMeans.innerHTML = "That means "
        thatMeansDotCounter = 0;
    }
}, 600);


var didScrollHomepage;
$(document).scroll(function() {
    didScrollHomepage = true;
})

const scrollInterval = setInterval(() => {
    if(didScrollHomepage) {
        checkPagePosition();
        didScrollHomepage = false;
    }
    if(Text1OpacityHasLaunched === true && PourcentageHasLaunched === true) {
        clearInterval(scrollInterval);
    }
}, 300);

var pourcentage = document.getElementById("pourcentage");
var currentPourcentage = 0;
var PourcentageHasLaunched = false;
var Text1OpacityHasLaunched = false;
var ST;
const checkPagePosition = () => {
    console.log("offset: " + window.pageYOffset);
    console.log("height: " + window.innerHeight);
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
            }, 700);
        }
    }
}

const pourcentageCounterUp = () => {
    currentPourcentage++;
    pourcentage.innerHTML = currentPourcentage + "%";  
    if(currentPourcentage < 73) {
        setTimeout(() => {
            requestAnimationFrame(pourcentageCounterUp);
        }, 30);
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