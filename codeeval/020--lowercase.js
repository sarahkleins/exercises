/* Instructions */

/* Given a string write a program to convert it into lowercase.*/

/* Sample code to read in test cases: */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
      line = line.toLowerCase();
      console.log(line);
    }
});