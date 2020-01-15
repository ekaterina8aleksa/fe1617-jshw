'use strict';

let country;
let price;
let message;
const promptInfo = 'Введите страну доставки';
const userAnswer = prompt(promptInfo);


if(userAnswer === null){
  console.log('Запрос отменен пользователем');
}
else{
  const userChoice = userAnswer.toLowerCase();
switch (userChoice) {
  case 'китай':
    country = 'Китай-China';
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case 'чили':
    country = 'Чили-Chili';
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case 'австралия':
    country = 'Австралия-Australia';
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case 'индия':
    country = 'Индия-India';
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case 'ямайка':
    country = 'Ямайка-Jamaica';
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
    alert(message);
    break;
}
console.log(message);
}
