'use strict';
const total = 100;
const ordered = 50;
const enoughGoods = total > ordered;
/*let message;

if(!enoughGoods){
message = 'На складе недостаточно твоаров!';
}
else
message = 'Заказ оформлен, с вами свяжется менеджер.';
console.log(message);*/

const message = enoughGoods
  ? 'Заказ оформлен, с вами свяжется менеджер.'
  : 'На складе недостаточно твоаров!';

console.log(message);
