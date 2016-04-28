/* Instruction */

/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in the same order.

"h,o,l,a"
*/

function printArray(array){
  var arrayofStr = array.map(function(n) {
    return n.toString();
  });
  return arrayofStr.join(',');
}