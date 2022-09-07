/*
 * DATA TYPES:
 *
 * 0. Values in Javascript are typed.  It is important for
 * values to have a tpye in our programming so that we can 
 * understand and control how data values can be manupulated 
 * and how they can interact.
 * 
 * The types covered below are number, string, boolean, 
 * array, object, fucntion, undefined, null, NaN, infinity, 
 * and -infinity. These types fall into two categrories, 
 * primitive and complex, and the differences between those 
 * categories is also examined below.
 */

// 1. Number //
// The number datatype is exactly what is says on the tin, data that stores a numeric value.  
// There are some limits to how large or small a Number can be, and that's where infinity 
// and -infinity come in as shown below.  Numbers are, unsprisingly, mose usefull when doing 
// math or counting, in order to track some value that can be best represented as a number. 
// A number stored in a variable is done so with the syntax:
// keyword variableName = integer;

let myNumber = 74; //a number variable containing the value 74
console.log(myNumber); // prints 74

let sum = 1 + 1; // This will resolve to hold the number 2
console.log(sum) // prints 2

let counter = 0; // a number variable to be used to track a number or increasing or decreasing occurances.
console.log(counter); //prints 0
counter++ // this increments the value of counter by +1
console.log(counter); //now prints 1


// 2. String //
// The string datatype is used to hold sequences of alpha-numeric characters and symbols that represent text.  
// A string will usually hold some number of characters in the form of words, sentences, names, 
// urls, and even numbers that are intended as text rather than mathable values. That being said, 
// an empty string, which is a string that contains no characters, is also possible, and in fact quite common.
// Strings can be combined, added to, and otherwise manipulated after creation.  Strings are zero indexed, 
// so characters within them can be accessed similarly to arrays.
// A string stored in a variable is done so with the syntax:
// keyword variableName = "string here!"; or keyword variableName = 'string here!';

let myString = "My lucky number is: 74."; //Note that this string contains upper and lowercase letters, non letter characters, spaces, and numbers. 
console.log(myString); //prints My lucky number is: 74.

let nameString = "My name is";
console.log(nameString); //prints My name is

nameString += " Ben."; //adds the text in quotes to the above string
console.log(nameString); //now prints My name is Ben.


// 3. Boolean //
// A boolean is a logical value, and is one of two things, true or false.  
// Booleans are used primarily when a programmer needs a value to be totally binary, 
// like a circut switch, or a yes or no answer.  These are used constantly in 
// control flow mechanisms such as if statements and while loops.
// Booleans are often not directly coded in the same way strings and numbers are.  
// More often, a variable will resolve INTO a boolean value when we check if a 
// certain expression resolves to true or false.
// A boolean stored in a variable is done so with the syntax:
// keyword variableName = true; or keyword variableName = false;

let myBool = true;  //stores the logical value of true
console.log(myBool) //prints true

let aBool = false; //stores the logical value of false
console.log(aBool) //prints false

let tOrF = 1 < 0; //will store the logical value false
console.log(tOrF) //prints false

//This code checks the value of the myBool variable, then performs the code inside the squigglies if that statement itself resolves to true
if(myBool === true){ //performs the check which resolves to a boolean
    console.log(myBool); //prints true
    myBool = false; //changes the value of myBool to false.
}

// 4. Array //
// An Array is a zero indexed collection of values, like a list.  This means that we can access the stored values 
// inside of an array using numbered indexes, with index zero being the first index of the array.
// The values stored within an array can be of any data types, even other arrays or collections!
// An array is stored in a variable with the syntax:
// keyword variableName = [ value, value, value ];

let myArray = [ 74, "Ben", [1, 2, 3, 4], true ];
console.log(myArray) // prints => [ 74, "Ben", [1, 2, 3, 4], true ]

// An array index is accessed with the syntax:
// variableName[index number];

myArray[0] = 21; // changes the value at the zero index of the array to the number 21

console.log(myArray[1]) // prints => Ben

// 5. Object //
/**
 * Object is another collection data type. Objects, however, are not indexed lists. Instead, objects
 * are collection of key : value pairs, called properties. An object's keys are usually strings or numbers, 
 * but the value at a key can be anything, including other collections.  Object properties are ususally 
 * accessed via the key, since there is no index or set order to the properties within the object.
 * An array is stored in a variable with the syntax:
 * keyword variableName = { key : value, key: value, key: value };
 * and is usually formatted as below 
 */

let myObject = { //declaration and initialization
    name: "Ben", 
    luckyNum: 74, //comma separated key: value pairs
    crunching: true,
    pets: ["dog", "rabbit"] //collection inside a collection
}

console.log(myobject) /* prints => { 
                                    name: 'Ben', 
                                    luckyNum: 74, 
                                    crunching: true,
                                    pets: ['dog', 'rabbit']
                                    }
*/
// The values in an object are accessed with either of the following syntax
console.log(myObject["name"]); //can be used even if the actual key is not known, such as during a loop
//or
console.log(myObject.name); //can only be used when the key is known.
//both ot these examples print => Ben


// 6. Function //
/**
 * Functions are blocks of code that evaluate into a value. That being said, in Javascript, 
 * fuctions themselves are treated as values. This means that functions can be stored in 
 * variables and collections, and even passed into are returned from functions. 
 * Function optionally take in values to be used within the code block, and always return
 * a value to the calling program.  Even when no return value is specified, a function will
 * default to returning the value of undefined. 
 * Funtions execute, or resolve, when called by other code in the program.
 * Note the distiction between parameters and  * arguments in the examples below: 
 * fuction parameters are set in the declaration of a fuction, but what is passed in 
 * during a function call are arguments. 
 * A function is declared with the following syntax:
 * keyword functionName(parameter1, parameter2, and so on){function body code block}  
 */ 

//function declaration
function printMessage (){
    console.log("Hello"); 
 }

//function declaration with parameters
function add(x, y){
    return x + y;
}

//calling a function:
printMessage(); // prints => Hello

//calling a function with arguments
add(1, 2); // returns 3

// 7. undefined //
/**
 * The data type called undefined is just one single value, undefined. This serves primarlity
 * as the default value of any variable that is declared but not (or not yet) initialized.
 * Functions with no coded return value will return undefined as a default also.
 */

var aName; // declared but not inititalized, this variable will be undefined when accessed 
console.log(aName); //prints => undefined

function printMessage (){
    console.log("Hello"); 
 }
console.log(printMessage); // prints => undefined


// 8. null //
/**
 * Null is different from other datatypes in that is represents the ABSENCE of a value.
 * That being said, it is itself a value, so you can initialize variables with the 
 * value of null as you would a number or string.
 */

var nothingHere = null;
console.log(nothingHere) // prints => null

// 9. NaN //
/**
 * NaN stands for Not a Number, and is a value that will be returned when an operation failed 
 * in one of a few ways that involve needing a number, but not being provided with one. A good
 * example would be trying to do non-addition math with strings, such as trying to multiply "frog" by 12.
 */

var frog = "frog";
var bigFrog = frog * 12;
console.log(bigFrog)// prints => NaN


// 10. Infinity and -Infinity //
/**
 * Infinifty is a numeric datatype that represents an infinitly large number. It is
 * used if a number breaches a certain size limitation in Javascript. It serves as 
 * a value that will be calculated as bigger than any number value. The opposite 
 * ideas hold true for -Infinity, which represents negative infinity. 
 */

var biggestNum = Infinity; 
var smallestNum = -Infinity;

console.log(biggestNum); // prints => Infinity
console.log(smallestNum);


// 11. Primitive vs Complex //
    /**
     * The major difference between Primitive and Complex data types in Javascript is that 
     * complex data types serve as COLLECTIONS of data, rather than single values.  So
     * numbers, strings, undefined, null, NaN, and booleans are Primitive types and hold single
     * data values.  Objects, arrays, and other collections of data and code such as funcitons 
     * are Complex.
     *
     */
//Simple Data Types
var nothingHere = null;
var frog = "frog";
var boolF = false;
var myNum = 74;

//Complex Data Types

let dog = {
    name: "Geo",
    breed: "Mutt",
    houseTrained: true,
};

let luckArray = [7, 4, 74];

// 12. Pass By Copy vs pass By Reference//
/**
 * Pass by Copy (aka Pass by Value) and Pass by Reference describe the ways that 
 * variables are reassigned, as well as passed into functions. The most important 
 * distiction is that Pass by Copy creates new values to be used, while Pass by 
 * Reference creates a new reference to the same data.
 */
    

/**
 * Pass by Value is the norm for simple datatypes such as numbers and strings. 
 * In Pass by Value, a value is copied, and an independant instance of that value 
 * gets created in memory that the new variable or argument will referenced.
 *    
 */
//Pass by Copy Example

let x = 1; //set x to the value 1
let z = x; //set z to the value 1
x = 2; //set x to the value 2, but this does not affect z despite the previous line
console.log(z) // prints => 1

/**
 * Pass by Reference is the norm for complex data types such as arrays and objects.
 * In Pass by Reference, what gets created is a new REFERENCE to the same location 
 * in memory. This means that any changes made to one variable would affect the data 
 * located at all references to that value, because theres only ever the one collection.
 */
//Pass by Reference Example
let hand = ["Ace H", "2 D", "4 C", "Ace S", "King H"];
let nextHand = hand; //creates a new reference to the same array as the hand variable
nextHand[0] = 'Red Joker'; //changes to either variable will affect the single array
console.log(hand[0]); // prints => Red Joker
