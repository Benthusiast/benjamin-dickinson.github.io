/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
[ ] Open up the file data.js.
[ ] Create a variable named animal and assign it to an empty object.
[ ] Using dot notation give animal a property named species with a value of any animal species.
[ ] Using bracket notation give animal a property called name with a value of your animal`s name.
[ ] Using either notation, give animal a property called noises with a value of empty array.
[ ] Print your animal Object to the console by adding, console.log(animal);,
[ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what animal looks like.
[ ] It should be something like:
 */

var animal = {};

animal.species = "dog";

animal["name"] = "Geo";

animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = "bark";

noises.push("growl");

noises.unshift("whine");

noises[noises.length] = "fart";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;// [ ] Using bracket syntax, assign the noises property on animal to our new noises array.
animal.noises.push("jingle");// [ ] Using any syntax add another noise to the noises property on animal.
console.log(animal)// [ ] console.log animal.

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];// [ ] Create a variable named animals and assign it to an empty array.
animals.push(animal);// [ ] push our animal that we created to animals. You should now see your first animal appear on your index.html page!
console.log(animals);// [ ] console.log animals. What does it look like?
var duck = {// [ ] Create a variable called duck and assign it to the data:
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}// { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }

animals.push(duck);// [ ] push duck to animals
console.log(animals);// [ ] console.log animals. What does it look like?
// [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var rabbit = {
  species: 'rabbit', 
  name: 'Buiscut', 
  noises: ['scratching', 'thumping']
}
animals.push(rabbit);
var bird = {
  species: 'bird', 
  name: 'Mr. Dove', 
  noises: ['coo', 'singing']
}
animals.push(bird);
console.log(animals); // [ ] console.log animals, and, console.log the length of animals. Is everything looking right?

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//choosing the array data structure to hold the list of friends.
//choosing that structure as it is the only one that will pass the assignments tests

var friends = []; //Create a variable called friends and assign it to the data structure that you chose.


function getRandom(array){// [ ] Write a function called getRandom that takes our animals array and returns a random index of the input array, using Math.random

  min = 0;
  max = Math.floor(array.length - 1);
  return Math.floor(Math.random() * (max - min + 1) + min);

}
friends.push(animals[getRandom(animals)]["name"]);// [ ] Using a random index from this function that you just created, get a random animal and add its name to friends.

animals[getRandom(animals)]["friends"] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}