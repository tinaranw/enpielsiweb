window.onload = function () {
  $(".navbarBtn").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
 
  $(".nplcMainLogo").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".navbarBtn").animate(
    { top: "40px" },
    {
      queue: false,
      duration: 1000,
    }
  );


  var images = [];
  function preload() {
      for (var i = 0; i < arguments.length; i++) {
          images[i] = new Image();
          images[i].src = preload.arguments[i];
      }
  }
  
  //-- usage --//
  preload(
      "img/logo.webp"
  )
};

$(".naviHome")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviIntro")
  .mouseover(function () {
    $(".naviHome").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviHome").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviRegister")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviHome").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviHome").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviContact")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviHome").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviHome").removeClass("menuMouseOver");
  });

$(".navbarBtn").click(function () {
  
  toggleNavbar();
});

$(".container-navbar-mobile").click(function () {
  
  toggleNavbarMobile();
});

$(".naviTit").click(function () {
  
  toggleNavbarMobile();
});


$(".naviTitle").click(function () {
  
  toggleNavbar();
});

timelineNavbar = new TimelineMax({
  paused: true,
});

timelineNavbar
  .to(".navbarMenu", 0.2, {
    height: "500px",
    opacity : "0.3"
  })
  .to(".navbarMenu", 0.5, {
    height: "100%",
    opacity : "1"
  })
  .to(".naviLogoContainer", 0.5,{
    opacity : "1"
  });

var isOpenedNavbar = true;

function toggleNavbar() {
  if (isOpenedNavbar) {
    $('.container-navbar').css('display','block');
    timelineNavbar.restart();
  }
  if (!isOpenedNavbar) { 
    timelineNavbar.reverse();
    setTimeout(function(){ 
      $('.container-navbar').css('display','none');
    }, 1500);
  }
  
  isOpenedNavbar = !isOpenedNavbar;
}

timelineNavbarMobile = new TimelineMax({
  paused: true,
});

timelineNavbarMobile
  .to(".navbar-mobile", 0.1, {
    height: "500px",
    opacity : "0.3"
  })
  .to(".navbar-mobile", 1, {
    height: "100%",
    opacity : "1"
  });

var isOpenedNavbarMobile = true;

function toggleNavbarMobile() {
  if (isOpenedNavbarMobile) {
    $('.navbar-mobile').css('display','block');
    timelineNavbarMobile.restart();
  }
  if (!isOpenedNavbarMobile) { 
    timelineNavbarMobile.reverse();
    setTimeout(function(){ 
      $('.navbar-mobile').css('display','none');
    }, 500);
  }
  
  isOpenedNavbarMobile = !isOpenedNavbarMobile;
}

