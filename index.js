const headerNode = document.querySelector('header');
headerNode.classList.add('header');

const headerContainer = document.querySelector('header').firstElementChild;
headerContainer.classList.add('container');

const logo = document.querySelector('h1');
logo.classList.add('logo');

const headerContent = document.querySelector('header > div > div');
headerContent.classList.add('header__content');

const headerMenu = document.querySelector('menu');
headerMenu.classList.add('header__menu');

const headerButton = document.querySelector('button');
headerButton.classList.add('header__menu-button');

const gallery = document.querySelector('section');
gallery.classList.add('gallery', 'container');

const galleryItems = document.querySelectorAll('section > div');
galleryItems.forEach(item => {
  item.classList.add('gallery__item');
  item.querySelector('img').classList.add('gallery__item__image');
  item.querySelector('h3').classList.add('gallery__item__text');
  item.querySelector('p').classList.add('gallery__item__text');
})

let subscribeText = document.querySelector('section').nextElementSibling.firstElementChild.firstElementChild;
subscribeText.classList.add('subscribe__text');

let subscribe = document.querySelector('section').nextElementSibling;
subscribe.classList.add('subscribe');

let inputEmail = document.querySelector('[type="email"]')
inputEmail.classList.add('subscribe__input');

let btnSubscribe = document.querySelector('[type="email"]').nextElementSibling
btnSubscribe.classList.add('subscribe__input');
