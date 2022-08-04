// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/** 
 * I: 
 * O: 
 * C: 
 * E: ??
*/

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/** 
 * I: takes a string as an input
 * O: returns the length of the string as a number
 * C: n/a
 * E: ??
*/


function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length of the string as a number
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/** 
 * I: takes a string as an input
 * O: returns the string in all lower case
 * C: n/a
 * E: ??
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //create a variable to store the new string in all lowercase
    var loweredString = string.toLowerCase();
    //return the new string
    return loweredString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/** 
 * I: takes 1 param, a string 
 * O: returns a new string in all uppercase
 * C: n/a
 * E: ??
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //create a variable to store the new string in all lowercase
    var upperedString = string.toUpperCase();
    //return the new string
    return upperedString;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/** 
 * I: takes a string as an input
 * O: returns the a new string in dash case
 * C: n/a
 * E: ??
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    var splitArray = string.split(" ");
    var joinedString = splitArray.join("-");
    joinedString = joinedString.toLowerCase();
    return joinedString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/** 
 * I: takes a string and a character as inputs
 * O: returns a boolean value of true or false
 * C: return true if the given string begins with the given character
 * E: make sure function is case insensitive
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // create lowercase versions of the given parameters in local variables
    var testString = string.toLowerCase();
    var testChar = char.toLowerCase();
    //check if matching and return appropriate boolean value
    if(testString[0] == testChar){
        return true;
    }else{
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/** 
 * I: takes a string anda character as inputs
 * O: returns a boolean value
 * C: should not be case sensitive 
 * E: ??
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //create lower case version of each parameter
    var testString = string.toLowerCase();
    var testChar = char.toLowerCase();
    //check if matching and return appropriate boolean
    if(testString[testString.length - 1] === testChar){
        return true;
    }else{
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/** 
 * I: takes two strings as inputs
 * O: returns a new string
 * C: new string is the parameter strings concatenated
 * E: ??
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //create a new string that is the two params concatenated
    var fuuusionHa = stringOne + stringTwo;
    //return the new string
    return fuuusionHa;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/** 
 * I: takes some number of strings as inputs
 * O: returns a single string that  is all arguments concatenated
 * C: n/a
 * E: ??
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //return the stored strings as a single string
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/** 
 * I: takes two strings as inputs
 * O: returns the longer of the two input strings
 * C: n/a
 * E: ??
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //compare argument lengths and return the longer argument
    if(stringOne.length > stringTwo.length){
        return stringOne;
    }else if(stringOne.length < stringTwo.length){
        return stringTwo;
    }else{
        return "Arguments are of equal length.";
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne > stringTwo){
        return 1;
    }else if(stringOne < stringTwo){
        return -1;
    }else if(stringOne === stringTwo){
        return 0;
    }
    
    //return stringTwo.localeCompare(stringOne);

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
       // YOUR CODE BELOW HERE //
    if(stringOne < stringTwo){
        return 1;
    }else if(stringOne > stringTwo){
        return -1;
    }else if(stringOne === stringTwo){
        return 0;
    }
//return stringOne.localeCompare(stringTwo);


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
