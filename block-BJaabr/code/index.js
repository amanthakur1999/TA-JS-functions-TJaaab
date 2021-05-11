// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num) {
  return num
}
// - Write a Function Expression
let addOne =function (num) {
  return num
  
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne = num => num
// - Write an Arrow Function with curly brackets
let addOne = num =>{
  return num };

// - Execute the function
addOne (1);
// - Execute the function and store the return value in a variable.
let returnValue= addOne(1);
// - What is the typeof returnValue
//typeof returnValue is number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num) {
  return num - num
}
// - Write a Function Expression
let substractOne =function (num) {
  return num -num
  
}
// - Write an Arrow Function without curly brackets(if possible)
let substractOne = num => num 
// - Write an Arrow Function with curly brackets
let addOne = num =>{
  return num };
// - Execute the function
substractOne (1);
// - Execute the function and store the return value in a variable.
let returnValue= (1)
// - What is the typeof returnValue

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA ,numB) {
  return numA+numB
  
}
// - Write a Function Expression
let sum =function(numA ,numB) {
  return numA+numB
  
}
// - Write an Arrow Function without curly brackets(if possible)
let sum =( numA ,numB) =>  numA+numB
// - Write an Arrow Function with curly brackets
let sum =( numA ,numB) =>  {
   return  numA+numB}
// - Execute the function
sum(1+1);
// - Execute the function and store the return value in a variable
let returnValue = sum(2)
// - What is the typeof returnValue
      Number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(numA) {
  return numA*numB
  
}
// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y) {
  if (x>y){
    return true
  }
  else{
    return false
  }
  
}
// - Write a Function Expression
let isGreater= function (x,y){
  if (x>y){
    return true
  }
  else{
    return false
  }
}
  

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y)=>x>y ? true: false
// - Write an Arrow Function with curly brackets
  isGreater =(x,y)=>{
  if (x,y){
    return true
  }
  else{
    return false
  }
}
// - Execute the function
isGreater(x>y)
// - Execute the function and store the return value in a variable
let returnValue =isGreater(x>y)
// - What is the typeof returnValue
Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  {if(num%2==0){return even
  }
else 
  {return even}
}
// - Write an anonymous Function Expression
let oddOrEven=function (num) {
  {if(num%2==0){return even
  }
else 
  {return even}
}
// - Write an named Function Expression
let oddOrEven=function oddOrEven (num) {
  {if(num%2==0){return even
  }
else 
  {return even}
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets
let oddOrEven =(num)=>{
  {if(num%2==0){return even
  }
else 
  {return even}
}
}
// - Execute the function
oddOrEven(num)
// - Execute the function and store the return value in a variable
let returnValue= oddOrEven()

