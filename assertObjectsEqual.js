// old function from a previous activity
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

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

module.exports = assertObjectsEqual;
