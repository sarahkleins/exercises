// Instructions

// Given a positive integer, find the sum of its constituent digits.

// Input: 496
// Output: 19

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split('').map(Number);
        var counter = 0;
        for (var i = 0; i < line.length; i++) {
            counter += line[i];
        }
        console.log(counter);
    }
});