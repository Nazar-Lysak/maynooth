(function ($, Drupal, once) {

  Drupal.behaviors.burgerBehavior = {
    attach: function (context, settings) {
      const burgerMenu = document.querySelector('.burger-menu');
      const mainMenu = document.querySelector('.main-menu');

      burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle("active");
        mainMenu.classList.toggle("active");
      })
    }
  };

})(jQuery, Drupal, once);