/* Instructions */

/* Deutschstunde */

// Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted


function derDieDas(wort){
  var vowels = ["a","e","i","o","u","ä","ö","ü","A","E","I","O","U"];
  wort = wort.split('');

  var vowelCount = 0
  vowels.forEach(function(vowel) {
   wort.forEach(function(character) {
    if (character == vowel) {
      vowelCount++;
    }
   })
  });

  wort = wort.join('');
    
  if ((vowelCount == 2) || (vowelCount == 3)) {
    return("die " + wort);
  } else if (vowelCount > 3) {
     return("der " + wort);
  } else if (vowelCount < 2) {
     return("das " + wort);
  } else {
    return(wort);
  }
}