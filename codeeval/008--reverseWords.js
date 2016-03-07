/* Instructions */
/* Write a program that reverses the words in a given string * /
/* Ex. "Hello World" would be come "World Hello" */

/* Sample code to read in test cases: */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      line = line.split(' ').reverse().join(' ');
      console.log(line);
    }
});