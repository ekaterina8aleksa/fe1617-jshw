const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*const galleryList = document.querySelector('#gallery');

  const imagesList = images.map(image =>
  {const imageItem = document.createElement('li');
  const imageProp = document.createElement('img');
  imageProp.url = image.url;
  imageProp.alt = image.alt;
  imageItem.insertAdjacentHTML("afterbegin", 'imageProp');

  return imageItem;
});
galleryList.append(...galleryList);

const galleryList = document.querySelector('#gallery');
const imagesList = images.map(image =>
    {
        galleryList.insertAdjacentHTML('afterbegin', `<li>${image.url}</li>`);

  
        return galleryList;
    });*/

const galleryList = document.querySelector('#gallery');

const listImage = images.reduce((acc, image) => {
  acc += `<li class = grid-unit><img src="${image.url}" alt="${image.alt}"></li>`;
  return acc;
}, '');

galleryList.insertAdjacentHTML('afterbegin', listImage);
