var emilieAboutIsOn = false;
var marianneAboutIsOn = false;
var catherineAboutIsOn = false;
var benjaminAboutIsOn = false;
var luigiAboutIsOn = false;
var joanaAboutIsOn = false;
var isAnimating = false;

$('#meet-emilie').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(emilieAboutIsOn) {
            case(false):
                emilieAboutIsOn = true;
                $('#emilie-about').removeClass('ASRotateBack');
            
                $('#emilie-about').addClass('ASRotate');
                break;
            case(true):
                emilieAboutIsOn = false;
                $('#emilie-about').addClass('ASRotateBack');
            
                $('#emilie-about').removeClass('ASRotate');
                break;
        }
    }
})

$('#meet-marianne').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(marianneAboutIsOn) {
            case(false):
                marianneAboutIsOn = true;
                $('#marianne-about').removeClass('ASRotateBack');
            
                $('#marianne-about').addClass('ASRotate');
                break;
            case(true):
                marianneAboutIsOn = false;
                $('#marianne-about').addClass('ASRotateBack');
            
                $('#marianne-about').removeClass('ASRotate');
                break;
        }
    }
})

$('#meet-catherine').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(catherineAboutIsOn) {
            case(false):
                catherineAboutIsOn = true;
                $('#catherine-about').removeClass('ASRotateBack');
            
                $('#catherine-about').addClass('ASRotate');
                break;
            case(true):
                catherineAboutIsOn = false;
                $('#catherine-about').addClass('ASRotateBack');
            
                $('#catherine-about').removeClass('ASRotate');
                break;
        }
    }
})

$('#meet-benjamin').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(benjaminAboutIsOn) {
            case(false):
                benjaminAboutIsOn = true;
                $('#benjamin-about').removeClass('ASRotateBack');
            
                $('#benjamin-about').addClass('ASRotate');
                break;
            case(true):
                benjaminAboutIsOn = false;
                $('#benjamin-about').addClass('ASRotateBack');
            
                $('#benjamin-about').removeClass('ASRotate');
                break;
        }
    }
})

$('#meet-luigi').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(luigiAboutIsOn) {
            case(false):
                luigiAboutIsOn = true;
                $('#luigi-about').removeClass('ASRotateBack');
            
                $('#luigi-about').addClass('ASRotate');
                break;
            case(true):
                luigiAboutIsOn = false;
                $('#luigi-about').addClass('ASRotateBack');
            
                $('#luigi-about').removeClass('ASRotate');
                break;
        }
    }
})


$('#meet-joana').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
        switch(joanaAboutIsOn) {
            case(false):
                joanaAboutIsOn = true;
                $('#joana-about').removeClass('ASRotateBack');
            
                $('#joana-about').addClass('ASRotate');
                break;
            case(true):
                joanaAboutIsOn = false;
                $('#joana-about').addClass('ASRotateBack');
            
                $('#joana-about').removeClass('ASRotate');
                break;
        }
    }
})