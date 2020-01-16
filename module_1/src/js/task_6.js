'use strict';
let input;
let total = 0;
let message;
let userInfo;

do {
  input = prompt('Введите число');
  if (input !== null) {
    userInfo = Number(input);
    if (isNaN(userInfo)) {
      alert((message = 'Было введено не число, попробуйте еще раз'));
    } else {
      total = total + userInfo;
    }
  }
} while (input !== null);
alert((message = `Общая сумма чисел равна ${total}.`));
