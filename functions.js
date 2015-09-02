/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
var numberToString = function(number){
  return number.toString();
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
var increase = function(n){
  return ++n;
};

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
var decrease = function(n){
  return --n;
};

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
  return x+y;
};

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
var subtract = function(x,y){
  return x-y;
};

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
var multiply = function(x,y){
  return x*y;
};

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var divide = function(x,y){
  return x/y;
};

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var square = function(x){
  return x*x;
};

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation, x, y){
var total;
var op;
switch (operation){
  case 'add':
  //addition
    total = x + ' + ' + y + ' = ' + add(x,y);
    op = '+';
  break;

  case 'subtract':
  //subtraction
    total=x + ' - ' + y + ' = ' + subtract(x,y);
    op = '-';
  break;

  case 'multiply':
  //multiply
    total=x + ' * ' + y + ' = ' + multiply(x,y);
    op = '*';
  break;

  case 'divide':
    total=x + ' / ' + y + ' = ' + divide(x,y);
    op = '/';
}
 console.log(total);
 switch (op) {
  case '+':
  return add(x,y);
  case '-':
  return subtract(x,y);
  case '*':
  return multiply(x,y);
  case '/':
  return divide(x,y);
 }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var isGreaterThan = function(a,b){
  var result;
  result = false;
  if(a>b){
    result = true;
  }
  return result;
};

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var isLessThan = function(a,b){
  var result;
  result = false;
  if(a<b){
    result = true;
  }
  return result;
};

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var areEqual = function(a,b){
  var result;
  result = false;
  if(a===b){
    result = true;
  }
  return result;
};

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var minimum = function(a,b){
  var result = a;
  if(a>b){
    result = b;
  }
  return result;
};

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var maximum = function(a,b){
  var result = a;
  if(a<b){
    result = b;
  }
  return result;
};

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 var isEven = function(a){
  var result = false;
  if((a % 2) === 0){
    result = true;
  }
  return result;
};


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
var isOdd = function(a){
  var result = false;
  if((a % 2) !== 0){
    result = true;
  }
  return result;
};

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
var letterGrade = function(score,total){
  console.log('sdfsdf');
  var grade = score / total;

  if(grade >= 0.9){
    grade = 'A';
    // console.log(grade);
    return grade;
  }
  else if(grade >= 0.8 && grade < 0.9){
    // console.log(grade);
    grade = 'B';
        // console.log(grade);
    return grade;
  }
  else if(grade >= 0.7 && grade < 0.8){
    // console.log(grade);
    grade = 'C';
        // console.log(grade);
    return grade;
  }
  else if(grade >= 0.6 && grade < 0.7){
    // console.log(grade);
    grade = 'D';
        // console.log(grade);
    return grade;
  }
  else{
    // console.log(grade);
    grade = 'F';
        // console.log(grade);
    return grade;
  }
};

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var incrementReviews = function(restaurant){
if(restaurant.hasOwnProperty('reviews')){
   restaurant.reviews++;
  }
else{
  restaurant.reviews = 1;
}
return restaurant;
};

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
var combine = function(word1,word2){
//var combine = word1.concat(word2,' ');
return word1 +' '+word2;
};

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
var createCircle = function(number){
var circle = {
  circumference: 2 * Math.PI * number,
  area: Math.PI * number * number
};
return circle;
};
