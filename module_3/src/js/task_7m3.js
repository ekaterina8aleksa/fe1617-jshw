'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  id: null,
  type: 'type',
  amount: 'amount',
};

const account = {
  balance: 0,
  transactions: [],
  transactionId: 0,

  deposit(amount) {
    if (!isNaN(amount)) {
      this.transactionId = Math.round(Math.random(1,888)*1000);
      console.log(`Id ${this.transactionId} `);
      const depositTransaction = {
        id: this.transactionId,
        type: Transaction.DEPOSIT,
        amount,
      };
      this.balance += amount;
      this.addTransaction(depositTransaction);
      console.log(`Your refill ${amount} renewed balance ${this.balance}`);
      return depositTransaction;
    } 
    else {
      console.log('Error, incorrect information');
    }
  },

  withdraw(amount) {
    if (!isNaN(amount)) {
      if (amount < this.balance) {
        this.transactionId = Math.round(Math.random(1,888)*1000);  
        console.log(`Id ${this.transactionId} `);
        const withdrawTransaction = {
          id: this.transactionsId,
          type: Transaction.WITHDRAW,
          amount,
        };
        this.balance -= amount;
        this.addTransaction(withdrawTransaction);
        console.log(`Your cashing out ${amount} renewed balance ${this.balance}`);
        return withdrawTransaction;
      } 
      else {
        console.log(`Withdrawal not possible, insufficient funds: You are trying to cash ${amount}, 
        Current balance is ${this.balance}.`);
      }
    } else {
      console.log('Error, incorrect information');
    }
  },

  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  getBalance() {
    console.log(` Current balance is ${this.balance}`);
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let trans of this.transactions) {
      if (trans.id === id) {
        console.log(`Your transaction ${trans}`);
        return trans;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let trans of this.transactions) {
      if (trans.type === type) {
        total += trans.amount;
      }
    }
    console.log(`Total sum of ${type} is ${total}`);
    return total;
  },
};


account.getBalance();
account.deposit(100);
account.withdraw(50);
account.getBalance();
account.deposit(100);
account.withdraw(3000);
account.getTransactionTotal('deposit');
console.log(account);
account.deposit('qweqweqwe');
account.withdraw('deposit');
account.getTransactionTotal('withdraw');