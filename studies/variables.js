/*
 * VARIABLES:
 *
 * 0.   Variables are point to values of a particular type, like a Number, String, Boolean, Array, Object 
 *      or another data-type.  Variables are called so because once created, 
 *      we can CHANGE the value (and type of value) to which they point.
 *
 * 1.   To create a variable we use the keywords var, let or const followed by a name which is ususally a 
 *      string and is formatted in camel case.
 * 
 *      1. var - this is the original variable keyword in javascript. Variables declared with the var 
 *      keyword are hoisted to the top of their scope, and are reassignable.
 * 
 *      2. let - Variables declared with the let keyword are not hoised to the top of their scope, but
 *      are instead block scoped, meaning they are inaccessible in higher scopes than they are created.
 * 
 *      3. const - Variables declared with const are block scoped as is let, but unlike let, a variable
 *      declared with const cannot be reassigned.  This is often used with collections such as arrays to
 *      allow for the editing of the values IN the array, but not the reassignment of the array variable.
 *
 * 
 * 2.   There are 2 steps to using variables: declaration and assignment/initialization.
 */

// 1. declaration //
var myName;
let yourName;

/**
 * At declaration, the variable myName is undefined because it has not
 * been assigned a value
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Ben';
console.log(myName); // prints => Benjamin

// NOTE: variables created with const must be initialized at declaration
const namesArray = ["Ben", "Brittany", "Geovanni"];
console.log(namesArray); // prints => ["Ben", "Brittany", "Geovanni"]

// 2a. re-assignment //
myName = 'Benjamin';
console.log(myName); // prints => Benjamin

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/**
 * HOISTING
 * 
 * Hoisting is a behavior in Javascript that allows variables to be accessed before they are actually declared.
 * This is because variable declarations that use the var keyword and function declarations are "moved" to the 
 * top of the scope when the code is run. 
 * The best example of this is with the var keyword.
 */

console.log(hoistME); /* because the declaration of the variable, BUT NOT ITS ASSIGNMENT, is hoisted, this
                         will print => undefined */ 
var hoistME = "Please!";
