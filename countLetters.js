// old function from a previous activity
const assertEqual = require('./assertEqual');

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

module.exports = countLetters;
