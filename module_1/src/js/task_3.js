'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userAnswer = prompt('Введите пароль');

if (userAnswer === null) {
  message = 'Отменено пользователем!';
  //alert(message);
} else if (userAnswer === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  //alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  //alert(message);
}
alert(message);