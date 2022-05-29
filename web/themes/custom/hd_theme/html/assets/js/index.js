(function ($, Drupal, once) {

  Drupal.behaviors.blogRenderBehavior = {
    attach: function (context, settings) {
      const cont = document.querySelectorAll('.views-row', context)
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

  Drupal.behaviors.mostPopularSliderBehavior = {
    attach: function (context, settings) {
      $('.most-popular .view-content', context).slick({
        // centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        responsive: [
          {
            breakpoint: 660,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true
            }
          },
          {
            breakpoint: 892,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            focusOnSelect: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              focusOnSelect: true
            }
          }
        ]
      });
    }
  };

})(jQuery, Drupal, once);


