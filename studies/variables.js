/*
 * VARIABLES:
 *
 * 0.   Variables are point to values of a particular type, like a Number, String, Boolean, Array, Object 
 *      or another data-type.  Variables are called so because once created, 
 *      we can CHANGE the value (and type of value) to which they point.
 *
 * 1.   To create a variable we use the keywords var, let or const followed by a name which is ususally a 
 *      string and is formatted in camel case.
 */
        var numVar = 74;
        let stringVar = "Variable declared with let";
        const arrayVar = ["variable", "declared", "with", "const"];

// var - this is the original variable keyword in javascript. Variables declared with the var 
//       keyword are globally scoped or function scoped, and are reassignable and redeclarable.

var luckyNum = 74;
var luckyNum = 53; //var variables can be redeclared

if(1 < 3){
    luckyNum = 11 //reassignment of a var delcared variable
    console.log(luckyNum); //this function has access to the variable because the variable is globally scoped
    var blackJack = 21;
}
console.log(blackJack); //this expression can use the variable declared inside the code block because var was used


// let - Variables declared with let are instead block scoped, and can be reassigned but not redeclared.

if(1 < 2){
    let myPet = "Geo"
    myPet = "Biscuit" //reassignment is allowed with let declared variables
}
//console.log(myPet);// this will throw an error as we don't have access to the block scoped variable



// const - Variables declared with const are block scoped similar to let, but unlike let, a variable
//         declared with const cannot be reassigned.  This is often used with collections such as arrays to
//         allow for the editing of the values IN the array, but not the reassignment of the array variable.

if(1 > 0){
    const myShelf = ["The Once and Future King", "Dune", "Sams Teach Yourself SQL In 10 Minutes: 4th ed"];
    myShelf.push("City of Mist Player's Guide"); //we can change the value in the array but cannot reassign the variable.
}

//console.log(myShelf);// this will throw an error as we dont have access to the block scoped variable

// DECLARATION AND ASSIGNMENT 
//2.   There are 2 steps to using variables: declaration and assignment/initialization.

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
