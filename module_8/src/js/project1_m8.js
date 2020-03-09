import galleryItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const overlay = document.querySelector('.js-lightbox');
const pictureItem = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

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

function overlayOpen() {
  event.preventDefault();
  window.addEventListener('keydown', onEsc);

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

galleryRef.addEventListener('click', overlayOpen);
closeBtn.addEventListener('click', overlayClose);
overlay.addEventListener('click', overlayClickClose);


