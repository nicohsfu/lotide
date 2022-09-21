// old function from a previous activity
const eqArrays = function(arr1, arr2) {
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  console.log(result);
  return result;
};

// old function from a previous activity
const assertArraysEqual = function(arr1, arr2) {

  let comparison = eqArrays(arr1, arr2);

  if (comparison) {
    // console.log("this is true"); //test
    return true;
  } else {
    // console.log("this is false"); //test
    return false;
  }

};

// new function below
const letterPositions = function(str) {
  const results = {

  };

  // "for... in" loop
  for (const i in str) {
    // console.log([i]);    // test - [i] is the index number
    // console.log(str[i]);    // test - str[i] is the value of that particular index

    const letter = str[i];  // index number of a string, this loop starts at 0 for instance, so str[0]

    // "continue" skips over a particular iteration in a loop
    if (letter === " ") {
      continue;           // skip spaces since the instructions said not to count those
    }

    if (!results[letter]) {  // if an array doesn't exist for a particular letter,
      results[letter] = [];  // then make the array
    }

    results[letter].push(Number(i)); // push the index position/number of a letter to its array
    // Number() converts the number strings (eg. "1") to a number with a Number data type (eg. 1)
  }

  return results;
};



console.log(letterPositions("lighthouse in the house"));


//expected result should be
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
