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

var priceTable = document.querySelector('.price__table');
var sliderSwitch = document.querySelector('.slider__switch');
var tableRight = document.querySelector('.price__table--right');
var switchRight = document.querySelector('.slider__switch--right');
var tableLeft = document.querySelector('.price__table--left');
var switchLeft = document.querySelector('.slider__switch--left');
var tableMiddle = document.querySelector('.price__table');
var switchMiddle = document.querySelector('.slider__switch--middle');
var switchActive = document.querySelector('.slider__switch_active');

  switchRight.addEventListener('click', function () {
    priceTable.classList.remove('price__table--left');
    sliderSwitch.classList.add('slider__switch_active');
    priceTable.classList.add('price__table--right');
  });

  switchLeft.addEventListener('click', function () {
    priceTable.classList.remove('price__table--right');
    priceTable.classList.add('price__table--left');
  });

  switchMiddle.addEventListener('click', function () {
    priceTable.classList.remove('price__table--right');
    priceTable.classList.remove('price__table--left');
    priceTable.classList.add('price__table');
  });
