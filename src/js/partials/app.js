const App = (function() {
  "use strict";
  return {
    initSlider: function(selector) {
      // slider init
      $(selector).slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        nextArrow:
          '<div class="arr arr--right"><i class="icon icon-next"></i></div>',
        prevArrow: '<div class="arr arr--left"></div>',
        autoplay: false
      });
    },
    init: function() {
      this.initSlider(".slider");
    }
  };
})();
