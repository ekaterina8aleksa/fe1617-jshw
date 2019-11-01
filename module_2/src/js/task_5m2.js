'use strict';
let string = '[SPAM] How to earn fast money?';

function checkForSpam(string) {
  const str = string.toLowerCase();
  if (str.includes('spam') || str.includes('sale')) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkForSpam(string);
