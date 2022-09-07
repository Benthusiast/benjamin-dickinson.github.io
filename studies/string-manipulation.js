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
  
nameString += " Ben"; //Uses addition assignment operator to add the text in quotes to the end of the above string

if("Ben" === "Ben"){ //Uses the strictly equal comparison operator to check the equality of the strings
    console.log(nameString)
}

/**
 * String Manipulation With Methods
 *  - The string data type has several native methods that can be invoked on any string.     
 */

//.slice - takes in a starting index (inclusive) and an optional ending index (not inclusive), 
//and returns a new string containing the values between the input indexes, or from the given 
//to the end of the string if no end is specified.
let benString = nameString.slice(11); // stores the value "Ben" in a new string variable

//.toUpperCase /.toLowerCase - takes in an index of the string and returns a new string with changed case.

let littleBen = benString.toLowerCase(); //stores "ben" in a new string variable
let bigBen = benString.toUpperCase(); //stores "BEN" in a new string variable

//.replace - takes in a value to search the string for, and a value to replace the initial with 
let nowBrittany = nameString.replace("Ben", "Brittany"); //stores "My name is Brittany" to a new string variable

//.concat - takes in a string, which is added to the end of the called on string.
let andTheDog = nameString.concat(", and my dog's name is Geo."); //stores "My name is Ben, and my dog's name is Geo." 
                                                                  //to a new string variable

//.split - optionally takes in a character, and splits the string into an array of values at the given character(such as a space), 
//         or at every character if given an empty string. 
let benArray = bigBen.split(""); //since given an empty string, this stores ["B", "E", "N"] in an array variable

