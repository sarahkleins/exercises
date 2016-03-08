// Instructions 

// Write a program which determines the sum of the first 1000 prime numbers.

function sumOfPrimes(limit) {
  var isPrime = function(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var sum = 0;
  counter = 0;
  for (var i = 2; counter < limit ; i++) {
    if ( isPrime(i) ) {
      sum += i;
      counter++;
    }
  }
  console.log(sum)
}

sumOfPrimes(1000);