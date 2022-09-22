// old function from a previous activity
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// new function below
const findKeyByValue = function(obj, val) {
  let output = undefined;

  let genres = Object.keys(obj); //returns all of an object's keys in an array
  // console.log("genres array: ", genres); //test

  // genre in this instance is the actual value of the keys, NOT index
  for (const genre of genres) {   // 1st loop - genre is "sci_fi", 2nd loop is "comedy", 3rd is "drama"
    if (obj[genre] === val) {     // 1st loop - value of obj[genre] is "The Expanse", 2nd is "Brooklyn Nine-Nine", 3rd is "The Wire"
      output = genre;             // in our example, on the 3rd loop, output is assigned the value of "drama" 
    }
  }

  // console.log("this is my output: ", output); //test
  return output;
};


//tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);