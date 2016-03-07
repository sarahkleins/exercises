// Instructions

// A happy number is defined by the following process. 
// Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a 
// cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
// while those that do not end in 1 are unhappy numbers.

// If the number is a happy number, print out 1. If not, print out 0.  

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (number) {
  if (number !== "") {
    var squaresSum = 0; 
    var i = 0;

    while (i < 10) {
      squaresSum = 0;
      for (var j = 0; j < String(number).length; j++) {
        digit = parseInt(String(number)[j]);
        squaresSum += (digit * digit); 
      }
      number = squaresSum;

      if (number === 1) {
        console.log(1); 
        return; 
      }
      i++;
    }
    console.log(0);
  }
});


