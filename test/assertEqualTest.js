const assertEqual = require('../assertEqual');

//test codes
assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual(1, 1); //should pass
assertEqual("Bootcamp", "Bootcamp"); //should pass
assertEqual(5, 6); //should fail
