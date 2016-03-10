// Instructions

// The Fibonacci series is defined as: 
// F(0) = 0; F(1) = 1; F(n) = F(n–1) + F(n–2) when n>1. 
// Given an integer n≥0, print out the F(n).

// Input: 5
// Output: 5
// Input: 12
// Output: 144

/*Sample code to read in test cases:* -- one*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {

  function fibonacci(num) {
    num = parseInt(num);
    var a = 0, b = 1, f = 1;

    for (var i = 2; i <= num; i++) {
      f = a + b;
      a = b;
      b = f;
    }
    console.log(f);
  }
    
  if (line !== "") {
      fibonacci(line);
    }
});


