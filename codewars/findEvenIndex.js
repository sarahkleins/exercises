/*

You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index 
({3,2,1}) both equal 6

*/

function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    var arrLeft = arr.slice(0, i);
    var arrRight = arr.slice(i+1);
    var totalLeft = arrLeft.reduce(function(a,b){
      return a + b;
    });
    var totalRight = arrRight.reduce(function(a,b){
      return a + b;
    });

    if (totalLeft === totalRight) return i;
  } 

  return -1;
}