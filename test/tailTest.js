// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// Test Case: Check the original array
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("words.length should be 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });

  it("ensure second element is \"Labs\"", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // ensure we get back two elements
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });

});
