(function ($, Drupal, once) {
  Drupal.behaviors.productSliderBehavior = {
    attach: function (context, settings) {
      $('.product__images .slider-for .product-slider').once().slick({
      });
      $('.product__images .slider-nav .product-slider').once().slick({
        asNavFor: '.product__images .slider-for .product-slider',
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            focusOnSelect: true
            }
          }
        ]
      });
    }
  };

  Drupal.behaviors.productTabsBehavior = {
    attach: function (context, settings) {
      $(function() {
        $('.tabs__buttons').on('click', 'div:not(.field-tab__item_active)', function() {
          $(this).addClass('field-tab__item_active').siblings().removeClass('field-tab__item_active')
            .closest('div.tabs').find('div.field-content__item').removeClass('field-content__item_active')
            .eq($(this).index()).addClass('field-content__item_active');
        })
      })
    }
  };

  Drupal.behaviors.fancyBoxBehavior = {
    attach: function (context, settings) {
      $(function() {
        Fancybox.bind(".slider-for .slick-slide img", {

        });
      })
    }
  };

})(jQuery, Drupal, once);
