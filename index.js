
/********************

In this exercise, we will be creating a function that takes in two numbers and returns the sum

Step 1. Create and declare a function,
that takes in two parameters

Step 2. In the function body, add both
numbers together and return the sum

Step 3. Call the function

For extra credit, create a conditional that executes a message if the sum is over 10 or less than 100 

********************/

// Your Solution:

function summation (x, y) {
  var add = x + y;
  if (add > 10) {
    console.log("Sum is over 10.");
  }
   else
   if (add === 10) {
    console.log("Sum is equal to 10.");
   }
   else {
   console.log("Sum is less than 10.");
   }
   return add;
 }

 summation(2, 3)