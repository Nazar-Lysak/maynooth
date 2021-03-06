(function ($, Drupal, once) {

  Drupal.behaviors.burgerBehavior = {
    attach: function (context, settings) {
      const burgerMenu = document.querySelector('.burger-menu', context);
      const mainMenu = document.querySelector('.main-menu', context);

      burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle("active");
        mainMenu.classList.toggle("active");

        mainMenu.classList.toggle('.burger-menu')
        ? document.querySelector('body').style.overflow = "hidden"
        : document.querySelector('body').style.overflow = "auto";
      })
    }
  };

})(jQuery, Drupal, once);