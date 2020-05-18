
/*

1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*/
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(7, 9));
  console.log(sumTriple(5, 5));
  
  /*2)
  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
  */
  function numbersBetweenFifty(x, y) {
    if ((x === 50 && y ===0) 
    || x + y === 50)
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbersBetweenFifty(40,0));
  
  /*3)
  Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
  */
  let string = "Hello";
  string = string.slice(0,4);
  console.log(string)
  /*
  4) Write a JavaScript program to find the largest of three given integers.
  */
  function large_of_three(x, y, z) 
   {
    max_value = 0;
    if (x > y)
    {
      max_value = x;
    } else
    {
      max_value = y;
    }
    if (z < y) 
    {
      max_value = z;
    }
    return max_value;
  }
  
  console.log(large_of_three(40,20,10));
  /*
  5)
  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
   
  *
  */
  function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(70,100));
  /*
  6) 
  
  Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
  */
  
    let str= "GOODBYE";
    let str1= "HELLO THERE";
   let fullString= str.concat(str1);
  console.log(fullString);
  /* 
  7)
  Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
  
  8)
  Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
  */
  function sumOfThree(numbers){
  return numbers[0] + numbers[1] + numbers[2];
    
  }
  console.log(sumOfThree([4,6,8]));
  
  /*
  9)
  Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 
  */
  function blam(numbers){
    for(let i=0;i<numbers.length;i++){
      if((numbers[i] === 1)||(numbers[i]===3)){
        return true;
      }
    }
    return false;
  }
  /*
  /*10)
  
  Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
  
  11)
  
  Write a JavaScript to find the longest string from a given array of strings.
  
  12)
  
  Write a JavaScript program to find the types of a given angle.
  
  Types of angles:
      Acute angle: An angle between 0 and 90 degrees.
      Right angle: An 90 degree angle.
      btuse angle: An angle between 90 and 180 degrees.
      Straight angle: A 180 degree angle.
  
  13)
  
  Write a JavaScript program to find the index of the greatest element of a given array of integers
  
  14)
  
  Write a JavaScript program to get the largest even number from an array of integers.
  
  15)
  
  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
  
  16)
  
  Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
  
  17)
  
  Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
  
  18)
  
  Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
  
  19)
  
  Convert a number to a string, the contents of which depend on the number's factors.
  
  If the number has 3 as a factor, output 'Pling'.
  If the number has 5 as a factor, output 'Plang'.
  If the number has 7 as a factor, output 'Plong'.
  If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
  Examples
  28's factors are 1, 2, 4, 7, 14, 28.
  In raindrop-speak, this would be a simple "Plong".
  30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
  In raindrop-speak, this would be a "PlingPlang".
  34 has four factors: 1, 2, 17, and 34.
  In raindrop-speak, this would be "34".
  
  20)
  Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).
  
  */