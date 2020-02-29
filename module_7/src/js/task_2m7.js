'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

//ingredients.forEach(ingredient => document.createElement('li') );

/* for(let i = 0; i<ingredients.length; i+=1){
      const itemName = document.createElement('li');
      itemName[i].textContent = ingredients[i];
      ingredientsList.appendChild(itemName[i]);
  }*/
const itemList = ingredients.map(function(ingredient) {
  const itemName = document.createElement('li');
  itemName.textContent = ingredient;
  return itemName;
});

ingredientsList.append(...itemList);
