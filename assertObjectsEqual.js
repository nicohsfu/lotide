// old function from a previous activity
const eqObjects = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  // if the 2 objects have the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {  // loop through the array of key values for the first object

    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    } else if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
};


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


// new function below
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // <= add this line

  // console.log("eqObjects(actual, expected)", eqObjects(actual, expected)); // test

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  }

  if (!eqObjects(actual, expected)) {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};


// test objects
let obj1 = {
  a: "apple",
  b: 23,
  c: "cavendish"
};

let obj2 = {
  a: "apple",
  b: 23,
  c: "cavendish",
};

let obj3 = {
  a: "apple",
  b: "banana",
  c: [1, 2, 3],
};

let obj4 = {
  a: "apple",
  b: "banana",
  c: [3, 2, 1],
};

assertObjectsEqual(obj1, obj2); // should PASS assertion
assertObjectsEqual(obj2, obj3); // should FAIL assertion since the B an C keys contain different values for each object
assertObjectsEqual(obj3, obj4); // should FAIL assertion since the C keys contain different values for each object