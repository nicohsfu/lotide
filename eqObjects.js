// old function from a previous activity
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
