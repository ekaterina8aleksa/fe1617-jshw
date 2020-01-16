'use strict';
const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const poly = new Account('Poly', 'poly@gmail.com');
poly.getInfo();
