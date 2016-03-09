// Instructions

// Time Conversion -- Twenty-Four Hour Time
// Given a time in AM/PM format, convert it to military (24-hour) time.

// Sample Input: 07:05:45PM 
// Sample Output: 19:05:45


/* Version 1 */
function timeConversion(time) {
  var pm = /PM/g;

  if(time.match(pm)) {
    time = time.split(':');
    time[2] = time[2].slice(0,2);
    time[0] = parseInt(time[0]);

    if (time[0] < 12) {
      time[0] = time[0] + 12;
    }

    time = time.join(':');
    console.log(time);
  } else {
    time = time.split(':');
    time[2] = time[2].slice(0,2);
    time[0] = parseInt(time[0]);

    if (time[0] === 12) {
      time[0] = time[0] - 12;
      time[0] = String("0" + time[0]);
    } else if (time[0] < 9) {
      time[0] = String("0" + time[0]);
    }

    time = time.join(':');
    console.log(time);
  }
}


/* Version 2 */
function timeConversion(time) {
  var pm = /PM/g;

  var splitTime = time.split(':');
  var minutes = splitTime[2] = splitTime[2].slice(0,2);
  var hour = splitTime[0] = parseInt(splitTime[0]);
  var addZero = function(num) {
    return String("0" + num);
  }
  
  if(time.match(pm)) {
    if (splitTime[0] < 12) {
      splitTime[0] = splitTime[0] + 12;
    }
    time = splitTime.join(':');
    console.log(time);
  } else {
    if (splitTime[0] === 12) {
      splitTime[0] = addZero(splitTime[0] - 12);
    } else if (time[0] < 9) {
      splitTime[0] = addZero(splitTime[0]);
    }
    time = splitTime.join(':');
    console.log(time);
  }
}
