'use strict';
const nameArr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numberArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function logItems(arr = []) {
  const arreyLength = arr.length;

  for (let i = 0; i < arreyLength; i += 1) {
    console.log(`Position: ${i + 1} - ${arr[i]}`);
  }
}

logItems(nameArr);
logItems(numberArr);
