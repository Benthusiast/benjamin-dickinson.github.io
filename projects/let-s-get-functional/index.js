// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
const { countBy, forEach } = require('lodash');

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
var oldestCustomer = function(array){
    return _.reduce(array, function(oldest, current){
        if(oldest.age < current.age){
           return current;            
        }
        return oldest;
    }).name;
};
// ### 4: `youngestCustomer`
//  - **Objective**: Return the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var youngestCustomer = function(array){
    return _.reduce(array, function(youngest, current){
        if(youngest.age > current.age){
           return current;            
        }
        return youngest;
    }).name;
};


// ### 5: `averageBalance`
//  - **Objective**: Return the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var averageBalance = function(array){
    
    let arrSum = _.reduce(array, function(totalSum, current){
        let balNum = parseFloat(current.balance.replace("$", "").replace(",", ""))
        totalSum += balNum;
        return totalSum;
    }, 0)

    return arrSum / array.length;
}


// ### 6: `firstLetterCount`
//  - **Objective**: Return how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var firstLetterCount = function(array, letter){
   return _.filter(array, (current) => current.name[0].toLowerCase() === letter.toLowerCase()).length;
}

// ### 7: `friendFirstLetterCount`
//  - **Objective**: Return how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var friendFirstLetterCount = function(array, customer, letter){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
        return firstLetterCount(array[i].friends, letter);
        }
    }
};


// ### 8: `friendsCount`
//  - **Objective**: Return the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:
var friendsCount = function(array, customer){
    return _.reduce(array, function(accum, current){
           
        for (let i = 0; i < current.friends.length; i++) {     
            if (current.friends[i].name === customer) {          
            accum.push(current.name);          
            return accum;  
            }      
        }      
        return accum;
    }, [])   
}

// ### 9: `topThreeTags`
//  - **Objective**: Return the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**://expected return: [ 'Lorem', 'aliqua', 'veniam' ]
var topThreeTags = function(customersArray){
            
    let retArr = [];
    let trackingObj = {};    
    let tagsArr = [];

    for(let i = 0; i < customersArray.length; i++){
        tagsArr = tagsArr.concat(customersArray[i].tags);
    }
      
    trackingObj = _.reduce(tagsArr, function(accum, current){
        if(trackingObj[current]){
            trackingObj[current]++
        }else{
            trackingObj[current] = 1;
        }
          
        return trackingObj;
        }, {})
      
    let placementArr = Object.entries(trackingObj);
        
    let sorted = placementArr.sort((a, b) => {
        return b[1] - a[1];
    });
         
    for(let i = 0; i < 3; i++){
        retArr.push(sorted.shift().shift());
    }
    
    return retArr;
}



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
var genderCount = function(array){
    return _.reduce(array, function(accum, current){
        if(accum[current.gender]){
          accum[current.gender]++;
        }else{
          accum[current.gender] = 1;
        }
        return accum;
        }, {});
    };
 
 

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
