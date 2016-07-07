/*

In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

*/

function alphabetPosition(text) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  text = text.replace(/\W|\d|_/g, '').toLowerCase().split('');

  var string = [];
  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    var letterPosition = alphabet.indexOf(letter) + 1;
    string.push(letterPosition);
  }

  return string.join(' ');
}

