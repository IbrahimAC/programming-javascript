/*
Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains
(e.g. "Never eat shredded wheat or cake" would return 6).
Words will be separated by single spaces.
*/

function WordCount(str) { 
    let counter = 0
      let strArray = str.split(' ');
      for(word of strArray){
        counter += 1;
      }
      return counter
    
    }
       