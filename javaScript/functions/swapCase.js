/*
Have the function SwapCase(str) take the str parameter and swap the case of each character.
For example: if str is "Hello World" the output should be hELLO wORLD.
Let numbers and symbols stay the way they are.
*/


function SwapCase(str) { 
    let array = []
  
    for(letter of str){
      if(letter === letter.toLowerCase()){
        letter.toUpperCase()
        array.push(letter.toUpperCase())
    
      } else if(letter === letter.toUpperCase()) {
        letter.toLowerCase()
        array.push(letter.toLowerCase())
      }
    
  
  }
  return array.join('')
  }

//Better solution

function SwapCaseImproved(str) { 
    let array = []
  
    for(letter of str){
      if(letter === letter.toLowerCase()){
        array.push(letter.toUpperCase())
        
    
      } else if(letter === letter.toUpperCase()) {
        array.push(letter.toLowerCase())
        
      }
    
  }
    return array.join('')
  }