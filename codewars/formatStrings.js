/* Instructions */

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two 
// names, which should be separated by an ampersand.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

function list(names) {
  var arr = [];
  for (var i = 0; i < names.length; i++) {
    arr.push(names[i].name);
  }

  if (arr.length >= 2) {
    last = arr.pop();
    arr = arr.join(', ');
    return arr + ' & ' + last;
  } else {
    return arr.toString();
  }
}