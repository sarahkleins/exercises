/*

The main idea is to count all the occuring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

*/

function count (string) {
  var obj = {}

  string = string.split('');

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    var count = 1;

    obj[letter] ? obj[letter] += count : obj[letter] = count;
  }

 return obj;
}