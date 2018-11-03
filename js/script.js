//nav bar toggle //
$(function() {
  $(".nav__icon").on("click", function() {
    $(this).toggleClass("active");
    $("nav ul").slideToggle();
  });

  $(window).on("load resize", function() {
    var w = $(window).width();
    var h = $(window).height();
    var x = 767;
    if (w >= x) {
      $("nav ul").css({
        display: "flex",
        height: "auto"
      });
    } else {
      $("nav ul").css({
        display: "none",
        height: h + "px"
      });
    }
  });
});

window.sr = ScrollReveal({
  reset: false,
  origin: "right",
  distance: "80px",
  duration: 800,
  delay: 10,
  mobile: true,
  easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"
});
sr.reveal(".welcome-title", {
  origin: "bottom",
  easing: "ease",
  distance: "2rem",
  duration: 500,
  scale: 1.0,
  delay: 300,
  opacity: 0
});
sr.reveal(".right-img", {
  origin: "right",
  easing: "ease",
  distance: "150%",
  duration: 900,
  scale: 1.0,
  delay: 300,
  opacity: 0
});

sr.reveal(".left-img", {
  origin: "left",
  easing: "ease",
  distance: "150%",
  duration: 900,
  scale: 1.0,
  delay: 300,
  opacity: 0
});
sr.reveal(".column", {
  delay: 200,
  origin: "bottom",
  easing: "ease-in",
  duration: 500
});

sr.reveal(".plan-box", {
  delay: 300,
  origin: "top",
  easing: "ease-in-out",
  duration: 500
});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: "zoom-in-sm",
    outClass: "zoom-out-sm",
    inDuration: 800,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function(url) {
      window.location.href = url;
    }
  });
});
