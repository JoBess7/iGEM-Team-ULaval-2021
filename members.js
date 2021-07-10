var emilieAboutIsOn = false;
var marianneAboutIsOn = false;
var isAnimating = false;

$('#meet-emilie').click(function() {
    if(isAnimating === false) {
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 500);
        switch(emilieAboutIsOn) {
            case(false):
                emilieAboutIsOn = true;
                $('#emilie-picture').removeClass('MPRotateBack');
                $('#emilie-about').removeClass('ASRotateBack');
            
                $('#emilie-picture').addClass('MPRotate');
                $('#emilie-about').addClass('ASRotate');
                break;
            case(true):
                emilieAboutIsOn = false;
                $('#emilie-picture').addClass('MPRotateBack');
                $('#emilie-about').addClass('ASRotateBack');
            
                $('#emilie-picture').removeClass('MPRotate');
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
        }, 500);
        switch(marianneAboutIsOn) {
            case(false):
                marianneAboutIsOn = true;
                $('#marianne-picture').removeClass('MPRotateBack');
                $('#marianne-about').removeClass('ASRotateBack');
            
                $('#marianne-picture').addClass('MPRotate');
                $('#marianne-about').addClass('ASRotate');
                break;
            case(true):
                marianneAboutIsOn = false;
                $('#marianne-picture').addClass('MPRotateBack');
                $('#marianne-about').addClass('ASRotateBack');
            
                $('#marianne-picture').removeClass('MPRotate');
                $('#marianne-about').removeClass('ASRotate');
                break;
        }
    }
})