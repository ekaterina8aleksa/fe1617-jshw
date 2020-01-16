'use strict';
let string = '[SPAM] How to earn fast money?';

function checkForSpam(string) {
  const str = string.toLowerCase();
  if (str.includes('spam') || str.includes('sale')) {
    console.log('Oh no, there is a SPAM');
    return true;
  } else {
    console.log('Everything is good, no spam');
    return false;
  }
}

checkForSpam(string);
