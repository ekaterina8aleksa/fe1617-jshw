

/*function keyHandler(event){
console.log("code: " +event.code);
}
 window.addEventListener('keydown', keyHandler);*/

 import galleryItems from './gallery-items.js';
const galleryRef = document.querySelector('.js-gallery');
const overlay = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const imgSrc = document.querySelector('.lightbox__image');
//let currentImg = galleryItems.find(img => img.original === imgSrc.src);
let currentImgIdx;
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
    window.addEventListener('keydown', onArrowRight);
    window.addEventListener('keydown', onArrowLeft);
    if (event.target.nodeName !== 'IMG') return;
    else {
        overlay.classList.add('is-open');
        imgSrc.src = event.target.parentNode.href;
        imgSrc.alt = event.target.alt;
    }
    const currentImg = galleryItems.find(img => img.original === imgSrc.src);
    currentImgIdx = currentImg ? galleryItems.indexOf(currentImg) : 0;
    if (currentImgIdx === 0) {
        prevBtn.classList.add('visually-hidden');
        nextBtn.classList.remove('visually-hidden');
    } else if (currentImgIdx === galleryItems.length - 1) {
        prevBtn.classList.remove('visually-hidden');
        nextBtn.classList.add('visually-hidden');
    } else {
        prevBtn.classList.remove('visually-hidden');
        nextBtn.classList.remove('visually-hidden');
    }
}
function overlayClose() {
    event.preventDefault();
    window.removeEventListener('keydown', onEsc);
    window.removeEventListener('keydown', onArrowRight);
    window.removeEventListener('keydown', onArrowLeft);
    overlay.classList.remove('is-open');
    imgSrc.src = '';
    imgSrc.alt = '';
}
function onEsc(event) {
    if (event.code === 'Escape') {
        overlayClose();
    }
}
/*function overlayClickClose(event) {
  if (event.target.parentNode === event.currentTarget) {
    overlayClose();
  }
}*/
function overlayClickClose(event) {
    if (
        nextBtn !== event.target &&
        prevBtn !== event.target &&
        event.target.parentNode === event.currentTarget
    ) {
        overlayClose();
    }
}
// пытаюсь определить на какую картинку клацнули, проверяю ее в диапазоне, чтобы использовать ее как стартовую точку
const onLeftPrev = () => {
    const currentImg = galleryItems.find(img => img.original === imgSrc.src);
    currentImgIdx = currentImg ? galleryItems.indexOf(currentImg) : 0;
    nextBtn.classList.add('btn-next');
    nextBtn.classList.remove('visually-hidden');
    if (currentImgIdx > 0) {
        currentImgIdx -= 1;
        console.log(currentImgIdx);
        imgSrc.src = galleryItems[currentImgIdx].original;
        imgSrc.alt = galleryItems[currentImgIdx].alt;
        if (currentImgIdx === 0) {
            prevBtn.classList.add('visually-hidden');
        } else {
            prevBtn.classList.remove('visually-hidden');
        }
    }
};
const onRightNext = () => {
    const currentImg = galleryItems.find(img => img.original === imgSrc.src);
    currentImgIdx = currentImg ? galleryItems.indexOf(currentImg) : 0;
    prevBtn.classList.add('btn-prev');
    prevBtn.classList.remove('visually-hidden');
    if (currentImgIdx < galleryItems.length - 1) {
        currentImgIdx += 1;
        console.log(currentImgIdx);
        imgSrc.src = galleryItems[currentImgIdx].original;
        imgSrc.alt = galleryItems[currentImgIdx].alt;
        if (currentImgIdx === galleryItems.length - 1) {
            nextBtn.classList.add('visually-hidden');
        } else {
            nextBtn.classList.remove('visually-hidden');
        }
    }
};
function onArrowRight(event) {
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
