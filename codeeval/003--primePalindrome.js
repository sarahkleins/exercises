// Instructions

// Write a program which determines the largest prime palindrome less than 1000

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(num) {
  num = num.toString();
  numReverse = num.split('').reverse().join('');
  return num === numReverse;
}

function isBoth(num) {
  var largest = 0;
  for (var i = 3; i < num; i+=2) {
      if (isPrime(i) && isPalindrome(i)) {
          largest = i;
      }
  }
  console.log(largest);
}

isBoth(1000);

