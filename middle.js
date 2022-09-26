// old function from a previous activity
const eqArrays = function(arr1, arr2) {
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  console.log(result);
  return result;
};

// old function from a previous activity
const assertArraysEqual = function(arr1, arr2) {

  let comparison = eqArrays(arr1, arr2);

  if (comparison) {
    // console.log("this is true"); //test
    return true;
  } else {
    // console.log("this is false"); //test
    return false;
  }

};


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

  console.log(newArr);
};


// ------ 

// tests
// For arrays with one or two elements, there is no middle. Return an empty array.

middle([1]); // => []
middle([1, 2]); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
