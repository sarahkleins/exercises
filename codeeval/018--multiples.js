// Instructions

// Given numbers x and n, where n is a power of 2, print out the smallest multiple of n 
// which is greater than or equal to x. 
// Do not use division or modulo operator

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      line = line.split(',').map(Number);
      var limit = line[0];
      var num = line[1];

      for (var i = 1; i <= limit; i++) {
        if ( (num * i) >= limit ) {
          return console.log(num * i);
        }
      }
    }
});

// Notes
// Write a function that returns three multiples of 3
function multiplesOfThree(limit) {
  for (var i = 1; i <= limit; i++) {
    console.log(3 * i);
  }
}

