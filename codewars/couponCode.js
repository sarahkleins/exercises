/* Instructions */

// Write a function called checkCoupon to verify that a coupon is valid and not expired. 
// If the coupon is good, return true. Otherwise, return false

// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this 
// format: "June 15, 2014"

// Sample input:
//('123a','123','September 5, 2014','October 1, 2014')


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  currentDate = currentDate.split(' ');
  expirationDate = expirationDate.split(' ');

  var months = {
    January: "00",
    February: "01",
    March: "02", 
    April: "03" ,
    May: "04",
    June: "05", 
    July: "06", 
    August: "07", 
    September: "08", 
    October: "09", 
    November: "10",
    December: "11",  
  }

  var formatDay = function(string) {
    string = string.split('');
    string.pop();    

    if (string.length == 1) {
      string.unshift("0")
      return string = string.join('');
    } else {
      return string.join('');
    }
  }

  if (enteredCode !== correctCode) {
    return false;
  } else {
    var currentDay = formatDay(currentDate[1]);
    var expirationDay = formatDay(expirationDate[1]);

    var currentMonth = months[currentDate[0]];
    var expirationMonth = months[expirationDate[0]];

    var newCurrentDate = new Date(currentDate[2], currentMonth, currentDay);
    var newExpirationDate = new Date(expirationDate[2], expirationMonth, expirationDay);


    if (newCurrentDate > newExpirationDate) {
      return false;
    } else {
      return true;
    }
  }
}

// More succinct solution
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
*/
