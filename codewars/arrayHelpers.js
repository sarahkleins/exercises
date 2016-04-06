/* Instructions */

/* Write some array helper methods to do the following:

- square() must return a copy of the array, containing all values squared, the original array must not be changed
- cube() must return a copy of the array, containing all values cubed, the original array must not be changed
- average() must return the average of all array values, average() on an empty array must return NaN
- sum() must return the sum of all array values
- even() must return an array of all even numbers, the original array must not be changed
- odd() must return an array of all odd numbers, the original array must not be changed

*/

Array.prototype.square = function() {
  newArr = this.slice();
  return newArr.map(function(num){
    return num * num;
  })
};

Array.prototype.cube = function() {
  newArr = this.slice();
  return newArr.map(function(num){
    return Math.pow(num, 3);
  })
};

Array.prototype.average = function() {
  if (this != []) {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum/this.length;
  } else {
    return NaN;
  }
};

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.even = function() {
  newArr = this.slice();
  return newArr.filter(function(num){
    if (num % 2 == 0) {
      return num;
    } 
  })
}

Array.prototype.odd = function() {
  newArr = this.slice();
  return newArr.filter(function(num){
    if (num % 2 != 0) {
      return num;
    } 
  })
}
