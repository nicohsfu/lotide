// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// exporting the function from this module, 
// notice we're NOT calling the function, eg. assertEqual, NOT assertEqual()
module.exports = assertEqual;

// TEST CODE is in another file now, under /lotide/test
