'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const userChoice = Number(prompt('Сколько дроидов хотите купить'));
const totalPrice = pricePerDroid * userChoice;
const restCredits = credits - totalPrice;
let message;

if (userChoice === 0) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${userChoice} дроидов, на счету осталось ${restCredits} кредитов.`;
}
console.log(message);
