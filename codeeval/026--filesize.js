// The first argument to your program has the path to the file you need to check the size of
// Print the size of the file in bytes

/*Sample code to read in test cases:*/
var fs  = require("fs");
var stats = fs.statSync(process.argv[2]);
var fileSizeInBytes = stats["size"];

console.log(fileSizeInBytes);