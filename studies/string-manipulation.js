//4-7 methods needed to be shown
/**
 * STRING MANIPULATION
 * 
 * Strings are values, just like any data type in Javascript, and as such we can manipulate them using
 * operators as well as methods native to the string data type. Since they are zero indexed, we can 
 * manipulate the sting in it's entirety, or access a single value within the string.
 */

/**
 * String Manipulation With Operands
 *  - Strings can be used with several operands.   
 */
let nameString = "My name is"; //Uses the assignment operator to se the variable to the value of the string 
  
nameString += " Ben."; //Uses addition assignment operator to add the text in quotes to the end of the above string

"Ben" === "Ben"; //Uses the strictly equal comparison operator to check the equality of the strings


/**
 * String Manipulation With Methods
 *  - The string data type has several native methods that can be invoked on any string.     
 */

//.slice - takes in a starting index (inclusive) and an ending index (not inclusive), and returns a new string
//         containing the values between the input indexes

//.toUpperCase/.toLowerCase - takes in an index of the string at which to change the case of the character.

//.replace - takes in a value to search the string for, and a value to replace the initial with 

//.concat - takes in a string, which is added to the end of the called on string.

//.split - optionally takes in a character, and splits the string into an array of values at the given character(such as a space), 
//         or at every character if no character is specified. 