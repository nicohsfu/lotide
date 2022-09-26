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

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"