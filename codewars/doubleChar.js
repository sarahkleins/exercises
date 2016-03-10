// Instructions

/* Double Char */

// Given a string, return a string in which each character is repeated once.

// doubleChar("String") --> "SSttrriinngg"

function doubleChar(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    newStr += string[i] + string[i];
  }
  return newStr;
}

doubleChar("String");