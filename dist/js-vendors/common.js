/* Begin custom js work here */
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $(".main-nav").addClass("fixed_nav");
  } else {
    $(".main-nav").removeClass("fixed_nav");
  }
});
 

function getTopSpacing() {
  var getWindowHeight = $(window).height();
  var getWindowWidth = $(window).width();
  if (getWindowWidth > 991) {
    if (getWindowHeight < 650) {
      $(".js-header").addClass("smaller-header");
      var getHeight = parseInt(getWindowHeight * 0.2);
      var hightlightTopSpacing = getWindowHeight - getHeight - 95;
      console.log("below 650", getHeight, hightlightTopSpacing);
      $(".js-aboutContainer").css("margin-top", -getHeight);
      $(".js-highlightSection").css("margin-top", -hightlightTopSpacing);
    } else if (getWindowHeight > 650 && getWindowHeight < 750) {
      console.log("below 700", getHeight, hightlightTopSpacing);
      $(".js-header").removeClass("smaller-header");
      $(".js-header").addClass("smaller-header2");
      var getHeight = parseInt(getWindowHeight * 0.2);
      var hightlightTopSpacing = getWindowHeight - getHeight - 165;
      $(".js-aboutContainer").css("margin-top", -getHeight);
      $(".js-highlightSection").css("margin-top", -hightlightTopSpacing);
    } else if (getWindowHeight > 700 && getWindowHeight < 900) {
      $(".js-header").removeClass("smaller-header smaller-header2");
      var getHeight = parseInt(getWindowHeight * 0.25);
      var hightlightTopSpacing = getWindowHeight - getHeight - 200;
      console.log("between 700 - 900", getHeight, hightlightTopSpacing);
      $(".js-aboutContainer").css("margin-top", -getHeight);
      $(".js-highlightSection").css("margin-top", -hightlightTopSpacing);
    } else {
      $(".js-header").removeClass("smaller-header smaller-header2");
      var getHeight = parseInt(900 * 0.25);
      var hightlightTopSpacing = 900 - getHeight - 200;
      console.log("above 900", getHeight, hightlightTopSpacing);
      $(".js-aboutContainer").css("margin-top", -getHeight);
      $(".js-highlightSection").css("margin-top", -hightlightTopSpacing);
    }
  } else {
    $(".js-aboutContainer").css("margin-top", "");
    $(".js-highlightSection").css("margin-top", "");
  }
} 
      

 

 

$(document).ready(function () {
  $(".homeProductSlide").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  });
});
  
 

 
  