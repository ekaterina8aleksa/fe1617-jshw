'use strict';
let pricePerWord = 10;
let message = 'Proin sociis natoque et magnis parturient montes mus';

function calculateEngravingPrice(message, pricePerWord) {
  const arr = message.split(' ');
  const arreyLength = arr.length;
  const totalAmount = pricePerWord * arreyLength;
  console.log(`Your amount ${totalAmount} for " ${message} "`);
  return totalAmount;
}
calculateEngravingPrice(message, pricePerWord);

pricePerWord = 40;
message = 'Donec orci lectus aliquam est';
calculateEngravingPrice(message, pricePerWord);
