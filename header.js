// HEADER PROJECT
$( "#h-menu-tproject" ).mouseenter(function() {
    $('#h-menu-dproject').removeClass("h-C2-dexpand-200");
    $('#h-menu-dproject').addClass("h-C2-expand-200");
  });
$( ".h-menu-project" ).mouseleave(function() {
    $('#h-menu-dproject').removeClass("h-C2-expand-200");
    $('#h-menu-dproject').addClass("h-C2-dexpand-200");
  });
// HEADER TEAM
$( "#h-menu-tteam" ).mouseenter(function() {
    $('#h-menu-dteam').removeClass("h-C2-dexpand-200");
    $('#h-menu-dteam').addClass("h-C2-expand-200");
  });
$( ".h-menu-team" ).mouseleave(function() {
    $('#h-menu-dteam').removeClass("h-C2-expand-200");
    $('#h-menu-dteam').addClass("h-C2-dexpand-200");
  });
// HEADER PARTS
$( "#h-menu-tparts" ).mouseenter(function() {
    $('#h-menu-dparts').removeClass("h-C2-dexpand-200");
    $('#h-menu-dparts').addClass("h-C2-expand-200");
  });
$( ".h-menu-parts" ).mouseleave(function() {
    $('#h-menu-dparts').removeClass("h-C2-expand-200");
    $('#h-menu-dparts').addClass("h-C2-dexpand-200");
  });
// HEADER AWARDS
  $( "#h-menu-tawards" ).mouseenter(function() {
    $('#h-menu-dawards').removeClass("h-C2-dexpand-200");
    $('#h-menu-dawards').addClass("h-C2-expand-200");
  });
$( ".h-menu-awards" ).mouseleave(function() {
    $('#h-menu-dawards').removeClass("h-C2-expand-200");
    $('#h-menu-dawards').addClass("h-C2-dexpand-200");
  });
// HEADER SAFETY
$( "#h-menu-tsafety" ).mouseenter(function() {
    $('#h-menu-dsafety').removeClass("h-C2-dexpand-200");
    $('#h-menu-dsafety').addClass("h-C2-expand-200");
  });
$( ".h-menu-safety" ).mouseleave(function() {
    $('#h-menu-dsafety').removeClass("h-C2-expand-200");
    $('#h-menu-dsafety').addClass("h-C2-dexpand-200");
  });
// HEADER POSTER
$( "#h-menu-tposter" ).mouseenter(function() {
    $('#h-menu-dposter').removeClass("h-C2-dexpand-200");
    $('#h-menu-dposter').addClass("h-C2-expand-200");
  });
$( ".h-menu-poster" ).mouseleave(function() {
    $('#h-menu-dposter').removeClass("h-C2-expand-200");
    $('#h-menu-dposter').addClass("h-C2-dexpand-200");
  });
// HEADER HUMAN-PRACTICES
$( "#h-menu-thumanpractices" ).mouseenter(function() {
    $('#h-menu-dhumanpractices').removeClass("h-C2-dexpand-200");
    $('#h-menu-dhumanpractices').addClass("h-C2-expand-200");
  });
$( ".h-menu-humanpractices" ).mouseleave(function() {
    $('#h-menu-dhumanpractices').removeClass("h-C2-expand-200");
    $('#h-menu-dhumanpractices').addClass("h-C2-dexpand-200");
  });

$(window).scroll(function() {
    if(!didScroll) {
         setDidScrollTrue();
    }
})

var socials = [document.getElementById('fb'), document.getElementById('ig'), document.getElementById('mail')];
var socialsContainer = document.getElementById("socials-container");
var headerIsDown;
var deltaMobile = 0;
var header = document.getElementById('header');
var headerLogo = document.getElementById('header-logo');
var headerMenu = document.getElementById('header-burger');
var ST;
var deltaHeader = 120;
var oldScrollTop = 0;
var didScroll;
function setDidScrollTrue() {
  didScroll = true;
}
setInterval(function() {
  if (didScroll) {
    headerBodyScroll();
    didScroll = false;
  }
}, 250);

const headerBodyScroll = () => {
  ST = window.pageYOffset;
  if (ST > deltaHeader){
    headerIsDown = false;

    header.classList.add('header-smaller');
    header.classList.remove('header-bigger');

    headerLogo.classList.add('header-logo-smaller');
    headerLogo.classList.remove('header-logo-bigger');

    headerMenu.classList.add('header-menu-smaller');
    headerMenu.classList.remove('header-menu-bigger');

    socialsContainer.classList.add("fadeTo1");
    socialsContainer.classList.remove("fadeTo0");

} else {
    headerIsDown = true;
    header.classList.remove('header-smaller');
    header.classList.add('header-bigger');

    headerLogo.classList.remove('header-logo-smaller');
    headerLogo.classList.add('header-logo-bigger');

    headerMenu.classList.remove('header-menu-smaller');
    headerMenu.classList.add('header-menu-bigger');

    socialsContainer.classList.remove("fadeTo1");
    socialsContainer.classList.add("fadeTo0");
}
  oldScrollTop = ST;
}


$("#header-burger").click(function() {
    burgerAnimationOnClick();
})

var menuBurgerOpened = false;
var menuD = document.getElementById("h-menuD");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
const burgerAnimationOnClick = () => {
    if(!menuBurgerOpened){
        menuBurgerOpened = true;

        menuD.classList.add("h-menuDvisible");
        menuD.classList.remove("h-menuDinvisible");

        line1.classList.add("line1-rotate");
        line1.classList.remove("line1-unrotate");

        line3.classList.add("line3-rotate");
        line3.classList.remove("line3-unrotate");

        line2.classList.add("line2-translateX");
        line2.classList.remove("line2-untranslateX");
    } else {
        menuBurgerOpened = false;

        menuD.classList.add("h-menuDinvisible");
        menuD.classList.remove("h-menuDvisible");

        line1.classList.add("line1-unrotate");
        line1.classList.remove("line1-rotate");

        line3.classList.add("line3-unrotate");
        line3.classList.remove("line3-rotate");

        line2.classList.add("line2-untranslateX");
        line2.classList.remove("line2-translateX");
    }
}