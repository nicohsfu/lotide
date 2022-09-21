// old function from a previous activity
const eqArrays = function(arr1, arr2) {
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  return result;
};

// old function from a previous activity;
const assertArraysEqual = function(arr1, arr2) {

  let comparison = eqArrays(arr1, arr2);

  if (comparison) {
    return true;
  } else {
    return false;
  }

};

// new function below
const without = function(sourceArr, toRemoveArr) {
  newArr = [];

  for (const elem of sourceArr) {
    if (!toRemoveArr.includes(elem)) {
      newArr.push(elem);
    }
  }

  console.log("new array: ", newArr);
  return newArr;
};


//tests
without([1, 2, 3, 4, 5, 5, 5], [5]); // => [1, 2, 3, 4]
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

console.log(assertArraysEqual(without(['hello', 'world', 'light'], ['light']), ["hello", "world"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);