document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
        menuCategories = document.querySelector('.menu-categories'),
        menuCategoriesItems = document.querySelectorAll('.menu-categories__item'),
        menuCategoriesHidden = document.querySelectorAll('.menu-categories__hidden'),
        contactPhonesList = document.querySelector('.contact__phones-list'),
        header = document.querySelector('.header'),
        headerBottomMenuBtn = document.querySelector('.header__bottom-menu-btn'),
        headerTopMenuBtn = document.querySelector('.header__top-menu-btn');

  const mediaQuery = window.matchMedia('(max-width: 768px)');

  const hideOtherMenu = (current, other, otherBtn) => {

    if (current.classList.contains('active')) {
      other.classList.remove('active');
      otherBtn.style.zIndex = '1';
    } else {otherBtn.style.zIndex = '';}
  }

  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.header__top-menu-btn')) {
      headerTopMenuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    }    
  });


  function screenTest(e) {
    if (e.matches) {

      header.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.header__bottom-menu-btn')) {
          headerBottomMenuBtn.classList.toggle('active');
          menuCategories.classList.toggle('active');
        }
        hideOtherMenu(menuCategories, menu, headerTopMenuBtn);

        if (target.closest('.header__contact')) {
          contactPhonesList.classList.toggle('active')
        }
      });

      menuCategoriesItems.forEach( (item, i) => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
          menuCategoriesHidden[i].classList.toggle('active');
        });
      });
    }
  }

  mediaQuery.addListener(screenTest);

  console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace");

});