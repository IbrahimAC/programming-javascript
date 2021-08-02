/*
Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's,
otherwise return the string false. 
Only these two letters will be entered in the string, no punctuation or numbers.
For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
*/

function ExOh(str) { 
    str.toLowerCase();
    let counterOfO = 0
    let counterOfX = 0
    
    for(letter of str){
      if (letter === 'x') {
        counterOfX += 1
      }else if(letter === 'o') {
        counterOfO += 1
      }
    }
    if (counterOfX === counterOfO) {
      return 'true'
    }
  return 'false'
  
  }