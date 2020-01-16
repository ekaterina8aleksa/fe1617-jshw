'use strict';
let str = 'Vestibulum facilisis, purus nec pulvinar iaculis.';

/*function formatString(str) {
  const arr = str.split('');
  const formatLimit = 40;
  const strLength = arr.length;
  const strOverLimit = strLength - formatLimit;
  if (strLength > formatLimit) {
    const modifyArr = arr.splice(formatLimit, strOverLimit, ' ...');
    const newStr = arr.join('');
    console.log(newStr);
    return newStr;
  } else {
    console.log(str);
    return str;
  }
}*/

function formatString(str) {
  if (str.length > 40) {
    const newStr = str.substr(0, 39) + ' ...';
    console.log(newStr);
    return newStr;
  } else {
    console.log(str);
    return str;
  }
}
formatString(str);
// ничего страшного что я заменила переменную string на str?
