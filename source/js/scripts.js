var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

  navMain.classList.remove('main-nav_nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav_closed')) {
      navMain.classList.remove('main-nav_closed');
      navMain.classList.add('main-nav_opened');
    } else {
      navMain.classList.add('main-nav_closed');
      navMain.classList.remove('main-nav_opened');
    }
  });

  navToggle.addEventListener('click', function() {
    if (pageHeader.classList.contains('page-header_closed')) {
      pageHeader.classList.remove('page-header_closed');
      pageHeader.classList.add('page-header_opened');
    } else {
      pageHeader.classList.add('page-header_closed');
      pageHeader.classList.remove('page-header_opened');
    }
  });
