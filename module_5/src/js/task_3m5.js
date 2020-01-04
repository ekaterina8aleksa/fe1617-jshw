'use strict';

class Storage {
  constructor(items = []) {
    this._items = items;
  }
  getItems() {
    return this._items;
  }
  addItem(item) {
    if (item !== isNaN) {
      if (this._items.includes(item) === false) {
        this._items.push(item);
      } else {
        console.log('This item already exist');
      }
    } else {
      console.log('Error, incorrect information');
    }
  }
  removeItem(item) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.addItem('Дроид');
console.table(items);