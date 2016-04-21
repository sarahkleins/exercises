/* Instructions */

// Given an integral number, determine if it's a square number:

// Examples
// isSquare(-1) // => false
// isSquare( 3) // => false
// isSquare( 4) // => true
// isSquare(25) // => true
// isSquare(26) // => false

var isSquare = function(n){
  return (Math.sqrt(n)) % 1 === 0;
}