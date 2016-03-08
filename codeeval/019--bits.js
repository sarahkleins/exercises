// Instructions

// Bit Positions

// Given a number n and two integers p1,p2 determine if the bits in position p1 and p2 
// are the same or not. Positions p1 and p2 are 1 based.

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    line = line.split(',').map(Number); 
    var num = line[0];
    var p1 = line[1] - 1;  
    var p2 = line[2] - 1; 
    
    console.log(((num >> p1) & 1) == ((num >> p2) & 1) ? true : false);
  }
});

// 86 represented in binary
// var num = 86;
// num.toString(2) --> "1010110"
