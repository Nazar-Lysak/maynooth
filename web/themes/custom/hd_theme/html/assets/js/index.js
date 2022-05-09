(function ($, Drupal, once) {

  Drupal.behaviors.blogRenderBehavior = {
    attach: function (context, settings) {
      const cont = document.querySelectorAll('.views-row')
      $(function () {
        cont.forEach((el, i) => i % 2 == 0 ? el.classList.add('first-row') : el);
      })
    }
  };

  Drupal.behaviors.topToScreenBehavior = {
    attach: function (context, settings) {
      const upScreen = document.querySelector('.up-to-top')
      $(function () {
        upScreen.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        })
      })
    }
  };

})(jQuery, Drupal, once);


