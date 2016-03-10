// Instructions

// Song decoder

//Let's assume that a song consists of some number of words. 
//To make the dubstep remix of this song, Polycarpus inserts a certain number 
//of words "WUB" before the first word of the song (the number may be zero), 
//after the last word (the number may be zero), and between words 
//(at least one between any pair of neighbouring words), and then the boy 
//glues together all the words, including "WUB", in one string and plays the 
//song at the club


//songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
  var wub = /WUB/g;
  song = song.replace(wub, ' ').split(' ');

  var i = song.length;
  while (i--) {
    if (song[i] === '') {
      song.splice(i,1)
    }
  }

  return song.join(' ');
}


// Learned -- replace Regex with " "
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

