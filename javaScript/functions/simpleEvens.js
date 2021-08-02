/*
Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even.
If so, return the string true, otherwise return the string false. 
For example: if num is 4602225 your program should return the string false because 5 is not an even number.
*/

function simpleEvens(num) { 
    num = num.toString()
  
    for (n of num){
      n = parseInt(n)
      if(n % 2 !== 0){
        return 'false'
      }
    }
  
    return 'true' 
  
  }
     