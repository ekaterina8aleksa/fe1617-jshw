'use strict';
let string = 'May the force be with you';

function findLongestWord(string) {
  const arr = string.split(' ');
  /*let indexOfLongest = 0;
  let longestWord;
  for (let i = 0; i < arr.length; i++) {
    if (indexOfLongest < arr[i].length) {
      indexOfLongest = arr[i].length;
      longestWord = arr[i];
    }
  }*/
  let longestWord = ' ';
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  console.log(`Longest word of "${string}" is "${longestWord}"`);
  return longestWord;
}

findLongestWord(string);
