// old function from a previous activity
const eqArrays = function(arr1, arr2) {
  let result = true;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  // console.log(result); //test
  return result;
};

// old function from a previous activity
const assertArraysEqual = function(arr1, arr2) {

  let comparison = eqArrays(arr1, arr2);

  if (comparison) {
    console.log("this is true"); //test
    return true;
  } else {
    console.log("this is false"); //test
    return false;
  }

};


// new function below
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// below, arg1 (words) is the words array, arg2 (word) is the element's value in the array
// word[0] actually means "ground"[0], which returns "g" because it's the letter on index 0 of the word "ground"
const results1 = map(words, word => word[0]); 
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 

console.log(results1);

// tests
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['h', 'c', 't', 'm', 't']);