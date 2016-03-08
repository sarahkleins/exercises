/* Instructions */

/* IQ Test */

// Bob is preparing to pass IQ test. 
// The most frequent task in this test is to find out which one of the given numbers 
// differs from the others. Bob observed that one number usually differs from the others 
// in evenness. Help Bob — to check his answers, he needs a program that among the given 
// numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers) {
  numbers = numbers.split(' ').map(Number);
  var evenLoop = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0 ) {
        return(i + 1);
      }
    }    
  }

  var oddLoop = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 ) {
        return(i + 1);
      }
    }    
  }

  var evens = 0;
  var odds = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  if (evens > odds) {
    console.log(evenLoop(numbers));
  } else {
    console.log(oddLoop(numbers));
  }
}