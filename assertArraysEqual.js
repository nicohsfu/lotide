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

// new function below
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

//tests
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //false