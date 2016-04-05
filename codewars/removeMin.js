/* Instructions */

/* Remove the minimum */

/* Given an array of integers, remove the smallest value
   and return the array */

// [1,2,3,4] --> [2,3,4]


function removeSmallest(numbers) {
  var lowest = numbers[0];
  var index = 0;

  for (var i = 1; i < numbers.length; i++) {
    var next = numbers[i]

    if (next < lowest) {
      lowest = next;
      index = i;
    }
  }

  numbers.splice(index, 1);
  return numbers;
}

