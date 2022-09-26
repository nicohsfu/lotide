// old function from a previous activity
const assertEqual = require('./assertEqual');

// new function below
// allItems: an *array* - of strings that we need to look through
// itemsToCount: an *object* - specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {

  };

  // for... of loop - "for element of array"
  for (const item of allItems) {
    // inside the loop, 
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    if (itemsToCount[item]) {  // looping through array - starts with "Karl" in this example, once there's a hit then the condition is met and the inside of this first if-statement is next
      if (results[item]) {     // if the results object (at the top of this function) have a key "Agouhanna", for example, then just increment its count
        results[item] += 1;
      } else {
        results[item] = 1;     // if the results object (at the top of this function) DOES NOT have a key "Agouhanna", for example, then create that key and assign 1 as its value or count
      }
    }
  }

  return results;
};


// test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
