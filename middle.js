// old function from a previous activity
const eqArrays = require('./eqArrays');

// old function from a previous activity
const assertArraysEqual = require('./assertArraysEqual');

// new function below
const middle = function(arr) {
  let newArr = [];

  if (arr.length > 2) { // if array elements are more than 2

    if (arr.length % 2 === 1) { // if odd numbered # of elements 

      //get the average length by dividing the array length by 2
      //math round down cause index has to be a whole number
      let middleIndex = Math.floor(arr.length / 2);

      // console.log("middle element's index: ", arr[middleIndex]); //test

      let middleValue = arr[middleIndex];
      newArr.push(middleValue);

      // newArr.push("odd numbered # of elements"); //test
    }

    if (arr.length % 2 === 0) { // if even numbered # of elements 

      //get the average length by dividing the array length by 2
      //math round down cause index has to be a whole number

      let middleIndex = Math.floor(arr.length / 2);

      // console.log("higher-value middle element's index: ", arr[middleIndex]); //test

      // minus 1 on the middle value, since there should be 2 middle values for even numbered # of elements
      let middleLowerValue = arr[middleIndex] - 1;
      newArr.push(middleLowerValue);

      let middleValue = arr[middleIndex];
      newArr.push(middleValue);

      // newArr.push("even numbered # of elements"); //test
    }

  } // outside-most if statement

  // console.log(newArr);
  return newArr;
};

module.exports = middle;
