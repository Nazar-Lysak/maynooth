(function ($, Drupal, once) {

  Drupal.behaviors.blogRenderBehavior = {
    attach: function (context, settings) {
      const cont = document.querySelectorAll('.views-row')
      $(function () {
        cont.forEach((el, i) => i % 2 == 0 ? el.classList.add('first-row') : el);
      })
    }
  };

  Drupal.behaviors.simpleSliderBehavior = {
    attach: function (context, settings) {
      $('.paragraph--type--simple-slider .slider-for', context).slick({
      });
      $('.paragraph--type--simple-slider .slider-nav', context).slick({
        asNavFor: '.paragraph--type--simple-slider .slider-for',
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
      });
    }
  };

})(jQuery, Drupal, once);


