const takeUntil = function(array, callback) {
  let output = [];

  for (const elem of array) {

    const shouldWeKeepGoing = !callback(elem); // if it's NOT the stop condition yet

    if (shouldWeKeepGoing) { // if it's not a truthy, keep pushing that current element to a new array
      output.push(elem);
    } else {
      return output;
    }

  }

  return output;
};


// expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // for each of the elements, it's returning true/false based on whether or not it's less than 0
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // for each of the elements, it's returning true/false based on whether or not the element's equal to ","
console.log(results2);


// expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]