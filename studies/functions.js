/**
 * FUNCTIONS
 * 
 * Functions are blocks of code that evaluate into a value. That being said, in Javascript, 
 * fuctions themselves are treated as values. This means that functions can be stored in 
 * variables and collections, and even passed into or returned from functions. 
 * 
 * Functions optionally take in values to be used within the code block, and always return
 * a value to the calling program.  Even when no return value is specified (done using the 
 * return keyword), a function will default to returning the value of undefined. 
 * 
 * Funtions execute, or resolve, when called by other code in the program.
 * 
 * Note the distiction between parameters and arguments in the examples below: 
 * function parameters are set in the declaration of a fuction, but what is passed in 
 * during a function call are arguments. 
 * 
 * A function is declared with the following syntax:
 * keyword functionName(parameter1, parameter2, and so on){function body code block}   
 */

// Declarations
//function declaration
function printMessage (){
    console.log("Hello"); 
 }

//function declaration with parameters
function add(x, y){
    return x + y; // here is an example of the return keyword being used to specify a returned value
}

// Calls
//calling a function:
printMessage(); // prints => Hello

//calling a function with arguments
add(1, 2); // returns 3

//Function Expressions - As mentrioned above, functions can be stored in variables by being written
// in the form of expressions. 

var zeroGrabber = function(array){  // function expression assigned to a variable.
    return array[0];
}

/**
 * Scope - Refers to where a variable can be accesed from. which depends on the keyword used to 
 * declare the variable, and wheather it is inside of the global window (global scope), or inside
 * a function body or other code block (local scope). 
 * Functions can access variables in parent scopes but not child ones.
 */ 
 
var doggo = "Geo"; //variable initialized in the global scope 

function dogCall(){
    console.log(doggo + ", come here, boy!") //function has access to the variable in the parent scope
};

/**
 * Closure - When a function retains access to a variable from a parent function AFTER the parent
 * function has returned/resolved.  This is mainly used when a function returns another function
 * that keeps values to use it is called.  
 */

function addToMe(x){ //this function takes in a value for x and returns a new function that has kept that value
        return function(y){                     
        return x + y; 
        }
}
var stillHasX = addToMe(5); /* This variable now has the the value:

                             * function(y){
                             *   return 5 + y
                             * }
                             * 
                             * because it kept the value of 5 that was passed into the 
                             * outer function as the x argument, 
                             * this is an example of closure.
                             */
