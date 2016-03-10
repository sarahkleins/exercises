// Instructions

/* Remove Characters */

// Each source string and characters you need to scrub are delimited by comma.

// Print out the scrubbed strings, one per line.

// Input:
// how are you, abc
// hello world, def

// Output:
// how re you
// hllo worl



/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
  function removeChars(input) {
    input = input.split(', ');
    var str = input[0];
    var chars = input[1];
    var scrub = new RegExp("[" + chars + "]", 'g');

    str = str.replace(scrub,'');

    console.log(str);
  }
    
    
  if (line !== "") {
    removeChars(line);
  }
});
