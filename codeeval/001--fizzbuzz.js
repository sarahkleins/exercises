/* Instructions */

/* FizzBuzz */

/* Write a program that prints out the final series of numbers where those divisible by X, Y and both are replaced by “F” for fizz, “B” for buzz and “FB” for fizz buzz. */
/* The first number is the first divider (X), the second number is the second divider (Y), and the third number is how far you should count (N). You may assume that the input file is formatted correctly and the numbers are valid positive integers */

/* Input Sample */
// 3 5 10 
// 2 7 15 

/* Output Sample */
// 1 2 F 4 B F 7 8 F B 
// 1 F 3 F 5 F B F 9 F 11 F 13 FB 15

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      line = line.split(' ').map(Number)
      var x = line[0];
      var y = line[1];
      var n = line[2];

      var output = [];
      for (var i = 1; i <= n; i++) {
        if ((i % x === 0) && (i % y === 0)) {
          output.push("FB");
        } else if (i % x === 0) {
          output.push("F");
        } else if (i % y === 0) {
          output.push("B");
        } else {
          output.push(i);
        }
      }
      output = output.join(' ');
      console.log(output);
    }
});