/**
 * LOOPS 
 * In Javascript, we use loops when we have code that we want to have execute multiple times in a row. 
 * Loops are useful for iterating over collections, and running code with each index or value within.  
 */

 // for loops - uses a counter variable, a stop condition, and an increment to run code a set number of times
 
 let emptyArr = []; //array we want to manipulate

 for(i = 0; i <= 10; i++){ //This loop starts counting at 0, executes the code block within onece then 
    emptyArr.push(i);      //increments the counting variable by one.  It will continue the process, or
 }                         //loop, until the stop statement resolves false. 


 

//Looping n Times - using a counting variable, we can set a loop to execute a predetermined number of times

 for(let i = 0; i < 10; i++){ // This loop is set to stop once the value of i is 10 or more, and since it increments
    console.log(i);           // the value of i by 1 each loop, we know it will happen 10 times. In this case,
 }                            // the loop will print the value of i to the console each iteration. 


//Looping Over an Array - using a for loop, we can iterate over an array and use or manupulating the values at each index
//To do so, we set the counting variable to the index of the array we want to start at, then increment in the direction
//we want to go in the array.

let myArr = ["Gandalf", "Radagast", "Saruman", "Sauron"]; //array of Maiar named myArr 

for(let i = 0; i < myArr.length; i++){ // loop stops when the counter variable is equal to array.length
    if (myArr[i] === "Gandalf"){       // each iteration performs the code block using the value at the 
        console.log("grey")            // current index of the array
    }
    if (myArr[i] === "Radagast"){
        console.log("grey")
    }
    if (myArr[i] === "Saruman"){
        console.log("white")
    }
    if (myArr[i] === "Sauron"){
        console.log("the titular Lord of the Rings")
    }
}


for(let i = myArr.length - 1 ; i >= 0; i++){ // loop stops when the counter variable is equal to 0, but starts
    if (myArr[i] === "Gandalf"){             // aat a value equal to the length of the array. This allows us
        console.log("grey")                  // to loop backwards over the array.
    }
    if (myArr[i] === "Radagast"){
        console.log("grey")
    }
    if (myArr[i] === "Saruman"){
        console.log("white")
    }
    if (myArr[i] === "Sauron"){
        console.log("the titular Lord of the Rings")
    }
}

// while loops - use a conditional check at the start of each iteration to see when to stop, and so must 
// have an increment or other change to the conditional within the code block 

var stop = 0; //counter variable outside of actuall loop
 while ( stop < 10 ){ //keeps looping as long as this check resolves true
    console.log(stop); //each iteration of the loop performs the code block
    stop++;  //the counting variable is incremented within the code block to prevent an infinite loop
 }           //this loop will just continue forever until the conditional resolves false.


 // for in loops are used to iterate through objects and perform a code block for each property of the object.
 
 let benObject = { // an example object for us to iterate through
    name: "ben",
    location: "home",
    pet: "rabbit"
 }
 
 for(var key in benObject){  //iterates through the specified object and performs the code block for each property 
    benObject[key] = benObject[key].toUpperCase(); //sets the value at each key to an uppercase version of itself.
 }

