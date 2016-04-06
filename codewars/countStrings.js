/* Instructions */
//http://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript

/* Create a function strCount (takes an object as argument) 
   that will count all string values inside an object. For example:

   strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
  })
  //returns 3
*/

function strCount(obj) {
  var count = 0; 
  for(key in obj) {
    if (typeof obj[key] == 'object') {
      count += strCount(obj[key]);
    } else if (typeof obj[key] == 'string') {
      count++;
    }
  }
  return count;
}

