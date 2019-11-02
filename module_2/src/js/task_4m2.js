'use strict';
let string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';

function formatString(string) {
  const arr = string.split('');
  const formatLimit = 40;
  const strLength = arr.length;
  const strOverLimit = strLength - formatLimit;
  if (strLength > formatLimit) {
    const modifyArr = arr.splice(formatLimit, strOverLimit, ' ...');
    const newStr = arr.join('');
    console.log(newStr);
  } else {
    console.log(string);
  }
}

formatString(string);
