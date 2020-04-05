import menuItems from '../json/menu.json';
import menuItemTmpl from '../tmpl/item-tmpl.hbs';
import '../css/styles.css';

const menuGallery = document.querySelector('.js-menu');

function menuCreator(menuItems) {
  const markup = menuItems.reduce((acc, item) => {
    acc = menuItemTmpl(item);
    return acc;
  }, '');
  menuGallery.insertAdjacentHTML('beforeend', markup);
}
