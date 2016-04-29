/* Instructions */

// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being 
// added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, 
// find and print the meal's total cost

// Round the total cost to the nearest integer.


function mealCost(input) {
  input = input.split('\n').map(Number);
  var mealCost = input[0];
  var tipPercent = input[1];
  var taxPercent = input[2];
  
  var tip = mealCost * (tipPercent/100);
  var tax = mealCost * (taxPercent/100);
  
  var totalCost = mealCost + tip + tax;
  
  console.log("The total meal cost is " + Math.round(totalCost) + " dollars.");
}