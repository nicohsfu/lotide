// old function from a previous activity
const assertEqual = require('./assertEqual');

// new function below
const findKey = (obj, callback) => {
  for (const keys in obj) {
    // console.log("keys :", keys); // item is the value of each array item

    innerObj = obj[keys]; // access the inner objects 
    // console.log("innerObj: ", innerObj);

    // "callback(innerObj)" is passing the inner object to the anon function "x.stars === 2"
    // the callback "dots in" to each of the inner objects
    if (callback(innerObj)) {
      return keys;
    }
  }

  return undefined;
};


// input
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"


// test
const expectedResult = "noma";

assertEqual(result1, expectedResult);