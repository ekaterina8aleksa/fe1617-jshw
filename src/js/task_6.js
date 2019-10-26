'use strict';
let input;
let total = 0;
let message;

do{
    input = Number(prompt('Введите число'));
    if (!isNaN(input)){
        total = total + input;
    }
    else
    alert(message = 'Было введено не число, попробуйте еще раз');
}while (input !== 0)
alert(message = `Общая сумма чисел равна ${total}.`);



