// old function from a previous activity
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// new function below
const countLetters = function(str) {
  const results = {

  };

  for (const elem of str) {
    // console.log(elem); //test

    if (elem) {
      if (results[elem]) {
        results[elem] += 1;
      } else {
        results[elem] = 1;
      }
    }

  }

  return results;
};

console.log(countLetters("hello"));