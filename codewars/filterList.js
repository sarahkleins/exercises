/* Instructions */

/* List Filter */

/* Create a function that takes a list of non-negative integers 
  and strings and returns a new list with the strings filtered out. */

// [1,2,'a','b'] --> [1,2] 

function filterList(list) {
  newList = [];
  for(var i = 0; i < list.length; i++) {
    if (typeof list[i] !== 'string') {
      newList.push(list[i]);
    }
  }
  return newList;
}

/* Using filter */
// function filter_list(l) {
//   return l.filter( function(elem){return typeof elem != "string"} )
//}

