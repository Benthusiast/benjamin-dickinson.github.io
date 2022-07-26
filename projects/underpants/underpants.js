// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){ //takes in a value and returns that value unchanged
    return value; //return of value argument
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){ //takes in a value and returns the data type of the argument as a string
    if(typeof value === "object"){ //checking if value is an object
        if(value === null){
            return "null"; //if value is null returns the string "null"
        }else if(Array.isArray(value)){
            return "array"; //"if value is an array returns "array"
        }else{
            return typeof value; //should return 'object'
        } 
    }else{ //is typeof does not identify value as an object
        return typeof value; //returns the datatype of the value argument as a string
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(anArray, aNum){
    let retArray = [];
    //check if array argument is an array and if not return an empty array
    if(!Array.isArray(anArray)){
        return [];
    }
    // check if number argument is defined and is a number and if not return array index zero
    if(typeof aNum !== "number"){
        return anArray[0];
    }
    for(let i = 0; i < aNum && i < anArray.length; i ++){
        retArray.push(anArray[i]); //push n values from the input arrat to the output array
    }
    return retArray;
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(anArray, aNum){
    //check if array argument is an array and if not return an empty array
    if(!Array.isArray(anArray)){
        return [];
    }
    // check if number argument is undefinded or is not a number and if not return array index zero
    if(typeof aNum !== "number"){
        return anArray[anArray.length - 1];
    }
    if(aNum === 1){
        return anArray[anArray.length - 1];
    }
    let i = anArray.length - aNum;
        while(i > 0){
            anArray.shift(); //remove n values from the front of input arrat to the output array
            i--
    }
    return anArray;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must not use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// _.contains = function(array, value){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             return true;
//         }
//     }
//     return false;
// }

_.contains = function(array, value){
    let retBool = false;
    let placeholder = 0;
    for(let i = 0; i < array.length; i++){
      (array[i] === value) ? retBool = true : placeholder += 0;
    }
    return retBool;
  }

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){ //iterates through a collection and calls the input function once on each element
    if(Array.isArray(collection)){ //determine if the collection is an array
        for(let i = 0; i < collection.length; i++){// iterates through the collection argument
            func(collection[i], i, collection); //calls the argument function with the instructed arguments
        }
    }else{ //assuming the collection is an object
        for(var key in collection){ //iterates through the collection argument 
            func(collection[key], key, collection); //calls the argument function with the instructed arguments
            }
        }
    }


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// _.indexOf = function(array, value){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }
_.unique = function(array){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(retArr, array[i]) >= 0){
            continue;
        }else{
            retArr.push(array[i]);
        }
    }
    return retArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array,func){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            retArr.push(array[i]);
        }
    }
    return retArr; 
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            retArr.push(array[i]);
        }
    }
    return retArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    let retArr = [];

    retArr.push(_.filter(array, func));
    retArr.push(_.reject(array, func));

    return retArr;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    let retArray = [];
    // determine if collection is an array or another collection object
    if(Array.isArray(collection)){
        //iterate through collection
        for(var i = 0; i < collection.length; i++){       
            //push each manipulated value to the return array
            retArray.push(func(collection[i], i, collection));
        }
    }else{
        //iterate through collection
        for(var key in collection){
            //push each manipulated value to the return array
            retArray.push(func(collection[key], key, collection));
        }
    }
    return retArray; //return the array of resulting values
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(objArr, keyname){
    return _.map(objArr, function(obj){
        return obj[keyname];
    })
    
    // let retArr = [];
    // for(let i = 0; i < objArr.length; i++){
    //     if(objArr[i][keyname]){
    //         retArr.push(objArr[i][keyname]);
    //     }
    // }    
    // return retArr;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //iffunc is not given
    if(!func){
        //determine if collection is array
        if(Array.isArray(collection)){
            //iterate over colletion with for loop
            for(let i = 0; i < collection.length; i++){
                //check falsey-ness of current index and return false if appropriate
                if(!collection[i]){
                    return false;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(!collection[key]){
                    return false;
                }
            }
        }
    //if func was given    
    }else{
        //if collection is an array
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
        }
    }
    return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
        //iffunc is not given
        if(!func){
            //determine if collection is array
            if(Array.isArray(collection)){
                //iterate over colletion with for loop
                for(let i = 0; i < collection.length; i++){
                    //check falsey-ness of current index and return false if appropriate
                    if(collection[i]){
                        return true;
                    }
                }
            //if collection is non-array    
            }else{
                for(var key in collection){
                    if(collection[key]){
                        return true;
                    }
                }
            }
        //if func was given    
        }else{
            //if collection is an array
            if(Array.isArray(collection)){
                for(let i = 0; i < collection.length; i++){
                    if(func(collection[i], i, collection)){
                        return true;
                    }
                }
            //if collection is non-array    
            }else{
                for(var key in collection){
                    if(func(collection[key], key, collection)){
                        return true;
                    }
                }
            }
        }
        return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    let arrSum;
    //if seed is given
    if(seed !== undefined){
        arrSum = seed; // assign the to be returned variable the initial value of seed
        for(let i = 0; i < array.length; i++){
            arrSum = func(arrSum, array[i], i, array
        }
    //if seed is not given
    }else{
        arrSum = array[0]; // assign the to be returned variable the value of the first index of the array
        for(let i = 1; i < array.length; i++){
            arrSum = func(arrSum, array[i], i, array);
        }
    }
    return arrSum;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, object2){
      
    for(let i = 0; i < arguments.length; i++){
        for(var key in arguments[i]){
            object1[key] = arguments[i][key];
        }
    }

    return object1;
}   

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
