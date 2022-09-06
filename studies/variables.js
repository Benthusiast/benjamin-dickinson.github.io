/*
 * VARIABLES:
 *
 * 0. Variables are named identifiers that can point to values of a particular type, like a Number, 
 * String, Boolean, Array, Object or another data-type.  Variables are called so because once created, 
 * we can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keywords var, let or const followed by a name which is ususally a 
 *string and is formatted in camel case.
 *
 * 2. There are 2 steps to using variables: declaration and assignment/initialization.
 */

// 1. declaration //
var myName;
let yourName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Ben';
console.log(myName); // prints => Benjamin

// NOTE: variables created with const must be initialized at declaration
const namesArray = ["Ben", "Brittany", "Geovanni"];
console.log(namesArray); // prints => ["Ben", "Brittany", "Geovanni"]

// 3. re-assignment //
myName = 'Benjamin';
console.log(myName); // prints => Benjamin

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";