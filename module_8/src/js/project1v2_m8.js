
import items from './gallery-items.js';
const galleryRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]',);
const lightboxContentRef = document.querySelector('.lightbox__content');
let index;

const createGalleryRef = item => {
    const galleryItemRef = document.createElement('li');
    galleryItemRef.classList.add('gallery__item');
    const galleryLinkref = document.createElement('a');
    galleryLinkref.classList.add('gallery__link');
    galleryLinkref.setAttribute('href', item.original);
    const galleryImgRef = document.createElement('img');
    galleryImgRef.classList.add('gallery__image');
    galleryImgRef.setAttribute('src', item.preview);
    galleryImgRef.setAttribute('data-source', item.original);
    galleryImgRef.setAttribute('alt', item.description);
    galleryLinkref.appendChild(galleryImgRef);
    galleryItemRef.appendChild(galleryLinkref);
    galleryRef.appendChild(galleryItemRef);
    return galleryItemRef;
};
const galleryItems = items.map(item => createGalleryRef(item));
galleryRef.append(...galleryItems);

const imgLink = document.querySelectorAll('.gallery__image');
imgLink.forEach((item, i) => {
    item.setAttribute('data-idx',((i+=1)-1));
    
});
console.log(imgLink);
function onRightNext() {
    if (index < items.length-1) {
        index++;

        console.log(index);
        console.log(typeof(index));
    } else {
        index = 0;
    }
    lightboxImageRef.src = items[index].original;
    lightboxImageRef.alt = items[index].alt;
    lightboxImageRef.dataset.idx = index;
    
}


function onLeftNext() {

    if (index >= -1) {
        index--;
        console.log(index);
        console.log(typeof(index));

    } else {
        index = items.length-1;
    }
    lightboxImageRef.src = items[index].original;
    lightboxImageRef.alt = items[index].alt;
    lightboxImageRef.dataset.idx = index;

}
function onOpenModal(event) {
    event.preventDefault();
    index = Number(event.target.dataset.idx);
    window.addEventListener('keydown', onArrowRight);
    window.addEventListener('keydown', onArrowLeft);
    window.addEventListener('keydown', onPressEsc);
    if (event.target === event.currentTarget) {
        return;
    }
    window.addEventListener('keydown', onPressEsc);
    lightBoxRef.classList.add('is-open');
    lightboxImageRef.src = event.target.getAttribute('data-source');
    lightboxImageRef.alt = event.target.alt;

}
function onCloseModal() {
    window.removeEventListener('keydown', onPressEsc);
    window.removeEventListener('keydown', onArrowRight);
    window.removeEventListener('keydown', onArrowLeft);
    lightBoxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
    lightboxImageRef.alt = '';
    lightboxImageRef.dataset.idx = '';
}

function onArrowRight(event) {
    if (event.code === 'ArrowRight') {
        onRightNext();
    }
}
function onArrowLeft(event) {
    if (event.code === 'ArrowLeft') {
        onLeftNext();
    }
}
function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        onCloseModal();
    }
}
function onPressEsc(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

galleryRef.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
lightboxContentRef.addEventListener('click', onOverlayClick);
//galleryRef.addEventListener('keydown', onArrowRight);
//galleryRef.addEventListener('keydown', onArrowLeft);

