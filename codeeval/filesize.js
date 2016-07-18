// The first argument to your program has the path to the file you need to check the size of
// Print the size of the file in bytes


/*Sample code to read in test cases:*/
var fs  = require("fs");
var file = process.argv[2];
var stats = fs.statSync(file);
var fileSizeInBytes = stats["size"];

console.log(fileSizeInBytes);
