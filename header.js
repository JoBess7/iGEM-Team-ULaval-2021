// HEADER PROJECT
$( "#h-menu-tproject" ).mouseenter(function() {
    $('#h-menu-dproject').animate({
      height: 200
    }, 300)
  });
$( ".h-menu-project" ).mouseleave(function() {
  $('#h-menu-dproject').animate({
    height: 0
  }, 300)
  });
// HEADER TEAM
$( "#h-menu-tteam" ).mouseenter(function() {
  $('#h-menu-dteam').animate({
    height: 200
  }, 300)
  });
$( ".h-menu-team" ).mouseleave(function() {
  $('#h-menu-dteam').animate({
    height: 0
  }, 300)
  });
// HEADER PARTS
$( "#h-menu-tparts" ).mouseenter(function() {
  $('#h-menu-dparts').animate({
    height: 200
  }, 300)
  });
$( ".h-menu-parts" ).mouseleave(function() {
  $('#h-menu-dparts').animate({
    height: 0
  }, 300)
  });
// HEADER AWARDS
  $( "#h-menu-tawards" ).mouseenter(function() {
    $('#h-menu-dawards').animate({
      height: 200
    }, 300)
    });
$( ".h-menu-awards" ).mouseleave(function() {
  $('#h-menu-dawards').animate({
    height: 0
  }, 300)
  });
// HEADER SAFETY
$( "#h-menu-tsafety" ).mouseenter(function() {
  $('#h-menu-dsafety').animate({
    height: 200
  }, 300)
  });
$( ".h-menu-safety" ).mouseleave(function() {
  $('#h-menu-dsafety').animate({
    height: 0
  }, 300)
  });
// HEADER POSTER
$( "#h-menu-tposter" ).mouseenter(function() {
  $('#h-menu-dposter').animate({
    height: 200
  }, 300)
  });
$( ".h-menu-poster" ).mouseleave(function() {
  $('#h-menu-dposter').animate({
    height: 0
  }, 300)
  });
// HEADER HUMAN-PRACTICES
$( "#h-menu-thumanpractices" ).mouseenter(function() {
  $('#h-menu-dhumanpractices').animate({
    height: 200
  }, 300)
  });
$( ".h-menu-humanpractices" ).mouseleave(function() {
  $('#h-menu-dhumanpractices').animate({
    height: 0
  }, 300)
  });


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
$(window).scroll(function() {
  if(!didScroll) {
    setDidScrollTrue();
  }
})
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

var width;
var isAnimatingProject = false;
var isAnimatingTeam = false;
var main_menu = [
          '#burger-project', 
          '#burger-team',
          '#burger-parts',
          '#burger-awards',
          '#burger-safety',
          '#burger-poster',
          '#burger-humanpractices'
  ]

var project_menu = [
        '#BM-project-back',
        '#BM-project-desc',
        '#BM-project-cont',
        '#BM-project-mod',
        '#BM-project-eng',
        '#BM-project-hp'
]  
$('#burger-project').click(function() {
  if(!isAnimatingProject) {
    isAnimatingProject = true;
    $('.BM-project').css('zIndex', '10');
    width = $(window).width();
    main_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: width, opacity: 0}, {
          duration: 800,
      })
    })

    project_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: 0, opacity: 1}, {
          duration: 800,
      })
    })
    setTimeout(() => {
      isAnimatingProject = false;
    }, 800);
  }
})

$('#BM-project-back').click(function() {
  if(!isAnimatingProject) {
    isAnimatingProject = true;
    $('.BM-project').css('zIndex', '0');
    width = $(window).width();
    main_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: 0, opacity: 1}, {
          duration: 800,
      })
    })

    project_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: -width, opacity: 0}, {
          duration: 800,
      })
    })
  }
  setTimeout(() => {
    isAnimatingProject = false;
  }, 800);
})


var team_menu = [
  '#BM-team-back',
  '#BM-team-teammembers',
  '#BM-team-attributions',
  '#BM-team-collaborations',
  '#BM-team-sciencecoms'
]

$('#burger-team').click(function() {
  if(!isAnimatingTeam) {
    $('.BM-team').css('zIndex', '10');
    isAnimatingTeam = true;
    width = $(window).width();
    main_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: width, opacity: 0}, {
          duration: 800,
      })
    })

    team_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: 0, opacity: 1}, {
          duration: 800,
      })
    })
    setTimeout(() => {
      isAnimatingTeam = false;
    }, 800);
  }
})

$('#BM-team-back').click(function() {
  if(!isAnimatingTeam) {
    isAnimatingTeam = true;
    $('.BM-team').css('zIndex', '0');
    width = $(window).width();
    main_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: 0, opacity: 1}, {
          duration: 800,
      })
    })

    team_menu.map((item, index) => {
      $(item).delay(index * 40).animate({
        left: -width, opacity: 0}, {
          duration: 800,
      })
    })
  }
  setTimeout(() => {
    isAnimatingTeam = false;
  }, 800);
})