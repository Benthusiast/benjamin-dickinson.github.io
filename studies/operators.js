/**
 * OPERATORS
 * 
 * Operators perform actions, or operations, on values in Javascript.
 * Using operators to build expressions, we can create and change values
 * in memory.
 *   
 * There are many types of Operators, organized by their general use.
 * 
 */

/**
 * Assignment Operators like = and += assign or reassign variables to given or resulting values.
 * 
 * examples include 
 */
// =   
var myName = "Ben"; //assigns the variable myName the value of the string "Ben"
var myInt = 74;
var bDay = 53;


// +=
myName += "jamin"; // adds the string "Ben" and "jamin" then ASSIGNS the result, "Benjamin", to myName
myInt += 1; //the value of myInt is reassigned to the result of 74 + 1 => 75

// -=
myInt -=1 //the value of myInt is reassigned to the result of 75 - 1 => 74

// *=
myInt *=2 //the value of myInt is reassigned to the result of 74 * 2 => 148

// /=
myInt /= 2 //the value of myInt is reassigned to the result of 148 / 2 => 74


/**
 * Arithmetic Operators perform mathematical operations on numerical values to return a new value.
 * 
 * examples include
 */

// +
myInt + bDay; //add the values together and returns the result => 127

// -
myInt - bDay; //subracts the scond value from the first and return the result => 21

// *
myInt * bDay; //returns the product of the two values => 3922

// /
myInt / bDay; //returns the quotient of the two values => 1.39622641509434...

// %
myInt % bDay; //returns the remainder after divinding the two values => 21

// **
myInt ** 2; //returns the first number rasied to the power of the second number

// ++
myInt++; //Increments the value by 1, equivalent to += 1 

// --
myInt-- //Decrements the value by 1, equivalent to -= 1

/**
 * Comparison Operators compare two values and return a boolean based on the result of the comparison
 */
// ==
myInt == bDay; //Compares the two values for loose (value) equivalency, in this case returning false

// ===
myInt === bDay; //Compares the two values for strict (value and type) equivalency, in this case returning false

// !=
myInt != bDay; //Compares the two values for loose inequality, in this case returning true

// !==
myInt !== bDay; //Compares the two values for strict inequality, in this case returning true

// >
myInt > bDay; //Checks if the first value is greater than the second, in this case returning true

// <
myInt > bDay; //Checks if the first value is less than the second, in this case returning false

// >=
myInt >= bDay; //Checks if the first value is greater than or equal to the second, in this case returning true

// <
myInt >= bDay; //Checks if the first value is less than or equal to the second, in this case returning false

/**
 * Logical Operators are used to create logic between other operators.
 */

// &&
1 < 2 && 3 < 4; // "and": does both expressions and returns true if BOTH expressions are true.

// || 
1 < 2 && 3 > 4; //"or": does both expressions and returns true if EITHER expression is true.

// !
!(1 < 2); //"not": returns true if the expression would return false and vice versa.

/**
 * Unary Operators are any operators that operate on only one value
 */

// ++
myInt++; //Increments the value by 1, equivalent to += 1 

//typeof
typeof myInt; //returns the data type of the operand as a string, in this case "number"


/**
 * The Ternary Operator is the only Javascript operator that takes 3 values: a condition 
 * to check, a return if condition is true, and a return is condition is false
 */

// ?
myInt > bDay ? console.log("true") : console.log("false"); 
// checks if the comparison is true or false and preforms the expression before the colon 
// if true and the expression after the colon if false