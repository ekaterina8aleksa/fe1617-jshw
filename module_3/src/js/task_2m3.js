'use strict';

function countProps(obj){
    return Object.keys(obj).length;
}

/*function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
function countProps(obj) {
  let count = 0;

  for (let item in obj) {
    if (!isEmpty(obj)) count += 1;
  }

  return count;
}*/

/*console.log(obj.size); для map*/

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
