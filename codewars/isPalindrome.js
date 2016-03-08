/* Instructions */

/* Palindrome Checker */

// Check if a string is a palindrome. Account for capital letters, punctuation, and word dividers

function isPalindrome(str) {
  if (str !== null) {
    str = str.replace(/[']+|[!]|[.]|[?]|[`]|[;]|\s/g, '').toLowerCase();
    var reverse = str.split('').reverse().join('');
    return reverse === str ? true : false;
  } else {
    return false;
  }
}