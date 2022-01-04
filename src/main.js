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

var textContainerAligner = document.getElementById("entaille-aligner");
var heightContainer1 = document.getElementById('container1');
var entaille = document.getElementById("entaille");

function adjustEntailleAndGoutte() {
    var rectAligner = textContainerAligner.getBoundingClientRect();
    var positionYDepuisContainer2 = textContainerAligner.clientHeight;
    var container1Height = heightContainer1.clientHeight;

    if($(window).scrollTop() > offset(textContainerAligner).top + entaille.clientHeight - 200) {
        $("#goutte").css({
            top: 15,
            left: window.innerWidth * 0.170,
            position: 'fixed'
        })
    } else {
        $("#entaille").css({
            top: offset(textContainerAligner).top - 200,
            position: 'absolute'
        });
        $("#goutte").css({
            top: offset(textContainerAligner).top + entaille.clientHeight - 200,
            left: window.innerWidth * 0.18,
            position: "absolute"
        })
    }

    console.log("scroll: " + window.scrollY);
}

$(window).resize(function () {
    adjustEntailleAndGoutte();
})
adjustEntailleAndGoutte();

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


$(window).scroll(() => {
    adjustEntailleAndGoutte();
})

var rectAligner = textContainerAligner.getBoundingClientRect();
var positionYDepuisContainer2 = textContainerAligner.clientHeight;
var container1Height = heightContainer1.clientHeight;
var positionYEntaille =  container1Height - positionYDepuisContainer2

$("#entaille").css({
    top: offset(textContainerAligner).top,
    position: 'absolute'
});
$("#goutte").css({
    top: offset(textContainerAligner).top + entaille.clientHeight,
    left: window.innerWidth * 0.18
})