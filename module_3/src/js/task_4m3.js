'use strict';

const employees = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const salary = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};

const countTotalSalary = function(count) {
  const salaryKyes = Object.keys(count);
  let total = 0;
  for (const key of salaryKyes) {
    console.log(`${key}: `, count[key]);
    total += count[key];
  }
  console.log('Total salary ', total);
};

countTotalSalary(salary);
countTotalSalary(employees);
