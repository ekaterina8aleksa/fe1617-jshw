'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(arr, prop) {
  let totalBill;
  for (const item of arr) {
    const keys = Object.keys(item);
    for (const key of keys) {
      if (item[key] !== NaN && item['name'] === prop) {
        totalBill = item['price'] * item['quantity'];
      }
    }
  }
  return {
      prop,
      totalBill,
  }
};
console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));
