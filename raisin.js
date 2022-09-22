const raisinAlarm = function(cookie) {
  // Put your solution here

  if (cookie.includes('🍇')) {
    return "Raisin Alert!";
  }
  if (!cookie.includes('🍇')) {
    return "All good!";
  }
};

//tests
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// expected output
// Raisin alert!
// Raisin alert!
// All good!

// ------------------

const raisinAlarmArray = function(cookies) {
  let output = [];

  for (const element of cookies) {

    if (element.includes("🍇")) {
      output.push("Raisin Alert!");
    }
    if (!element.includes("🍇")) {
      output.push("All good!");
    }
  }

  return output;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

// expected output
// ["Raisin alert!", "Raisin alert!", "All good!"]