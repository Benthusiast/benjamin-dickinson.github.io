// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

//I: a string
//O: a new string made from the old string spelled backwards
//C:
//E:

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //create array to hold the values from the string
    var forwardArray = input.split("");
    //create an array to hold the values in the reversed order
    var backwardArray = [];
    //create a variable to access indexes in the backward array
    var backCounter = 0;
    //loop backwards over the foward array to fill the backwards array.
    for(var index = forwardArray.length - 1; index >=0; index--){
      backwardArray[backCounter] = forwardArray[index];
      backCounter++;
    }
    return backwardArray.join("");
  
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}