import galleryItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const overlay = document.querySelector('.js-lightbox');
const pictureItem = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
let i = 0;
let currentSlide;
let bigImg;
let bigImgAlt;

/*const createGallery = gallery => {
const galleryUnit = document.createElement('li');
galleryUnit.classList.add('gallery__item');

const galleryUnitLink = document.createElement('a');
galleryUnitLink.classList.add('gallery__link');
galleryUnitLink.setAttribute('href', gallery.original);

const galleryUnitImage = document.createElement('img');
galleryUnitImage.classList.add('gallery__image');
galleryUnitImage.setAttribute('src', gallery.preview);
galleryUnitImage.setAttribute('alt', gallery.description);

galleryUnitLink.append(galleryUnitImage);
galleryUnit.append(galleryUnitLink);

return galleryUnit;
}*/

const createGalleryList = galleryItems.reduce((acc, item) => {
  acc += `<li class = gallery__item><a class = gallery__link href ="${item.original}"><img class = gallery__image src="${item.preview}" alt="${item.description}"></a></li>`;
  return acc;
}, '');
//galleryRef.append(createGalleryList);
galleryRef.insertAdjacentHTML('afterbegin', createGalleryList);

const prevBtn = document.createElement('button');
prevBtn.classList.add('lightbox__button', 'btn-prev');

const nextBtn = document.createElement('button');
nextBtn.classList.add('lightbox__button', 'btn-next');

overlay.append(prevBtn, nextBtn);

function overlayOpen() {
  event.preventDefault();
  window.addEventListener('keydown', onEsc);
  window.addEventListener('keydown', onArrowRigth);
  window.addEventListener('keydown', onArrowLeft);
  if (event.target.nodeName !== 'IMG') return;
  else {
    overlay.classList.add('is-open');
    pictureItem.src = event.target.parentNode.href;
    pictureItem.alt = event.target.alt;
  }
}

function overlayClose() {
  event.preventDefault();
  window.removeEventListener('keydown', onEsc);
  window.removeEventListener('keydown', onArrowRigth);
  window.removeEventListener('keydown', onArrowLeft);
  overlay.classList.remove('is-open');
  pictureItem.src = '';
  pictureItem.alt = '';
}

function onEsc(event) {
  if (event.code === 'Escape') {
    overlayClose();
  }
}

function overlayClickClose(event) {
  if (event.target.parentNode === event.currentTarget) {
    overlayClose();
  }
}
// пытаюсь определить на какую картинку клацнули, проверяю ее в диапазоне, чтобы использовать ее как стартовую точку
const onLeftPrev = () => {
  currentSlide = event.target;
  bigImg = event.target.parentNode.href;
  bigImgAlt = event.target.alt;
  if (// задаю диапазон
    galleryItems.indexOf(currentSlide) < galleryItems.length &&
    galleryItems.indexOf(currentSlide) >= 0
  ) {
    i -= 1;
    pictureItem.src = galleryItems[i].href;//bigImg[i];
    pictureItem.alt = galleryItems[i].alt;//bigImgAlt[i];
  }
  else i = 0;
};

const onRightNext = () => {
  currentSlide = event.target;
  bigImg = event.target.parentNode.href;
  bigImgAlt = event.target.alt;
  if (
    galleryItems.indexOf(currentSlide) >= 0 &&
    galleryItems.indexOf(currentSlide) < galleryItems.length
  ) {
    i += 1;
    pictureItem.src = galleryItems[i].href;//bigImg[i];
    pictureItem.alt = galleryItems[i].alt;//bigImgAlt[i];
  }
  else i = 0;
};

function onArrowRigth(event) {
  if (event.code === 'ArrowRight') {
    onRightNext();
  }
}

function onArrowLeft(event) {
  if (event.code === 'ArrowLeft') {
    onLeftPrev();
  }
}
galleryRef.addEventListener('click', overlayOpen);
closeBtn.addEventListener('click', overlayClose);
overlay.addEventListener('click', overlayClickClose);
prevBtn.addEventListener('click', onLeftPrev);
nextBtn.addEventListener('click', onRightNext);

/*function keyHandler(event){
console.log("code: " +event.code);
}
 window.addEventListener('keydown', keyHandler);*/
