'use strict';
let input;
const numbers = [];
let total = 0;
let message;
let userInfo;

do {
  input = prompt('Введите число');
  if (input !== null) {
    userInfo = Number(input);
    if (!isNaN(userInfo)) {
      numbers.push(userInfo);
      console.log(numbers);
    } else alert((message = 'Было введено не число, попробуйте еще раз'));
  }
} while (input !== null);
for (userInfo of numbers) {
  total = total + userInfo;
  console.log(total);
  //return total; uncaught syntaxerror illegal return statement потому что у меня просто цикл, а не функция
}
alert((message = `Общая сумма чисел равна ${total}.`));
