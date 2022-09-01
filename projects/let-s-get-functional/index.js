// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 *  To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./benjamin-dickinson.github.io/projects/let-s-get-functional
 * 
 */
//  ### 1: `maleCount`
//  - **Objective**: Return the number of male customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `filter`
var maleCount = function(array) {
      return _.filter(array, (current) => current.gender === "male").length;
};

// ### 2: `femaleCount`
//  - **Objective**: Return the number of female customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `reduce`
var femaleCount = function(array){
   
    return _.reduce(array, function(femSum, current){
        if(current.gender === "female"){
            femSum +=1;
        }
        return femSum;
    }, 0);
};

//  ### 3: `oldestCustomer`
//  - **Objective**: Return the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var oldestCustomer;
//    let oldest = _.reduce(array, function(oldName, array))
    
// ### 4: `youngestCustomer`
//  - **Objective**: Return the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var youngestCustomer;


// ### 5: `averageBalance`
//  - **Objective**: Return the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var averageBalance;


// ### 6: `firstLetterCount`
//  - **Objective**: Return how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var firstLetterCount;

// ### 7: `friendFirstLetterCount`
//  - **Objective**: Return how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var friendFirstLetterCount;

// ### 8: `friendsCount`
//  - **Objective**: Return the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:
var friendsCount;

// ### 9: `topThreeTags`
//  - **Objective**: Return the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:
var topThreeTags;

// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`
var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
