/*

Given an array, find the int that appears an odd number of times
[20,1,1,2,2,3,3,5,5,4,20,4,5]
= 5

*/

function findOdd(numbers) {
  var counts = {};

  // add each number as a key
  // add each number's count as key's value
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }

  // return key (number) with the odd value
  for (var key in counts) {
    if (counts[key] % 2) {
      return parseInt(key);
    }
  }
}