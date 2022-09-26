// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(oldArr) {
  let newArr = [];

  // we start the counter at index 1 to skip the head and only display the tail elements (ie. all the elements except the first/head which is index 0)
  for (let i = 1; i < oldArr.length; i++) {
    newArr.push(oldArr[i]);
  }

  return newArr;
};

module.exports = tail;