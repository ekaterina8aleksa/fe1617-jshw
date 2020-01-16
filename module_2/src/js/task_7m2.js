'use strict';
let login = 'Ajax';
let message;
const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else return false;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login) === false) {
    return true;
  } else return false;
};

/*const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log((message = 'Логин успешно добавлен!'));
    } else {
      console.log((message = 'Такой логин уже используется!'));
    }
  } else {
    console.log((message = 'Ошибка! Логин должен быть от 4 до 16 символов'));
  }
};*/

/*const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    console.log((message = 'Ошибка! Логин должен быть от 4 до 16 символов'));
  } else if (!isLoginUnique(allLogins, login)) {
    console.log((message = 'Такой логин уже используется!'));
  } else {
    allLogins.push(login);
    console.log((message = 'Логин успешно добавлен!'));
  }
};*/

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    console.log((message = 'Логин успешно добавлен!'));
  } else if (!isLoginUnique(allLogins, login)) {
    console.log((message = 'Такой логин уже используется!'));
  } else {
    console.log((message = 'Ошибка! Логин должен быть от 4 до 16 символов'));
  }
};

addLogin(allLogins, login);
