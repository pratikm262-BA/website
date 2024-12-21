   

/* Begin responsive menu js */
function responsiveMenu() {
  $(".js-responsiveMenu").on("click", function () {
    $("body").addClass("noScroll");
    $("body").find(".js-navContainer").addClass("responsive-active");
  });

  $(".js-responsiveIcon").on("click", function () {
    $("body").removeClass("noScroll");
    $("body").find(".js-navContainer").removeClass("responsive-active");
  });
}
/* End responsive menu js */

/* Begin main menu height js */
function navigationHeight() {
  var getWindowHeight = $(window).height();
  var getWindowWidth = $(window).width();
  if (getWindowWidth > 991) {
    var menuHeight = getWindowHeight - 220;
    $(".js-navContainer .js-navContainerHeight").css({
      "max-height": "inherit",
      "overflow-y": "inherit",
    });
    $(
      ".js-navContainer .js-navContainerHeight > .dropdown > .global-navs__grid"
    ).css({
      "max-height": menuHeight,
      "overflow-y": "auto",
    });
  } else {
    var menuHeight = getWindowHeight - 100;
    $(
      ".js-navContainer .js-navContainerHeight > .dropdown > .global-navs__grid"
    ).css({
      "max-height": "inherit",
      "overflow-y": "hidden",
    });
    $(".js-navContainer .js-navContainerHeight").css({
      "max-height": menuHeight,
      "overflow-y": "auto",
    });
  }
}
  

$(window).on("load", function () {
  getTopSpacing();
  navigationHeight();
  responsiveMenu(); 
});

$(window).resize(function () {
  getTopSpacing();
  navigationHeight();
  responsiveMenu();
  //responsiveTabs();
});

/* Begin main menu dropdown js */
$(".js-navContainer .js-dropdownItem").on("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  var elem = $(this).closest(".global-navs__items");
  var mainItemParent = $(this).closest(".global-navs__list");
  if (mainItemParent.hasClass("dropdown")) {
    mainItemParent.siblings().find(".js-dropdownItem").removeClass("open");
    mainItemParent.siblings().find(".global-navs__grid").slideUp();
    elem.next().slideToggle();
    elem.toggleClass("open");
  }
});

$(".js-navContainer .js-parentDropdown").on("click", function (e) {
  var elem = $(this);
  var mainItemParent = $(this).closest(".global-navs__list");
  if (mainItemParent.hasClass("dropdown")) {
    mainItemParent.siblings().find(".js-parentDropdown").removeClass("open");
    mainItemParent.siblings().find(".global-navs__grid").slideUp();
    elem.next().slideToggle();
    elem.toggleClass("open");
  }
});

$("body")
  .not(".js-navContainer")
  .on("click", function (e) {
    if (!$(e.target).is(".js-navContainer *")) {
      $(".js-parentDropdown").removeClass("open");
      $(".js-parentDropdown").next().slideUp();
      $(".js-dropdownItem").closest(".global-navs__items").next().slideUp();
      $(".js-dropdownItem").closest(".global-navs__items").removeClass("open");
    }
  });
/* End main menu dropdown js */ 