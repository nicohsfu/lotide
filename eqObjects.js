// old function from a previous activity
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// new function below

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test", eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("test", eqObjects(ab, abc)); // => false

// tests with array
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("test", eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("test", eqObjects(cd, cd2)); // => false


// console.log("eqArrays: ", eqArrays(["2", 3], ["2", 3, 4]));