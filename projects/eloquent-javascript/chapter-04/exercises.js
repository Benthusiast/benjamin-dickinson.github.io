////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, step) {
  let retArr = [];
  
  if(x === y){
    return [];
  }
  
  if(!step){
    if(x < y){
      while(x <= y){
        retArr.push(x);
        x++;
      }
    }else if(y < x){
      while(y <= x){
        retArr.push(x);
        y++;
      }
    }
  }
  if(step > 0){
    if(x < y){
      while(x <= y){
        retArr.push(x);
        x += step;
      }
    }else if(y < x){
      while(y <= x){
        retArr.push(x);
        y += step;
      }
    }
  }

   if(step < 0){
    // if(x < y){
    //   while(x <= y){
    //     retArr.push(y);
    //     y += step;
    //   }
    // }else if(y < x){
    //   while(y <= x){
    //     retArr.push(x);
    //     x += step;
    //   }
    // }
  }  
  return retArr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let arrSum = 0;
  if (array.length === 0){
    return 0;
  }
  for(let i = 0; i < array.length; i++){
    arrSum += array[i];
  }

  return arrSum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let retArr = [];
  if (array.length === 0){
    return retArr;
  }
  for(let i = array.length - 1; i >= 0 ; i--){
    retArr.push(array[i]);
  }
  return retArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let retArr = reverseArray(array);
  for (let i = 0; i < array.length; i++){
    array[i] = retArr[i];
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for(let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(listObj) {
  let retArr = [];
  for (let node = listObj; node; node = node.rest){
    retArr.push(node.value);
  }
  return retArr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest : list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

 function nth(array, index) {
  if(index < 0 || index === undefined){
    return undefined;
  }
  let listArr = listToArray(array);

  return listArr[index];
  
 }

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //determine if x and y are both NOT objects
  if (typeof x !== "object" && typeof y !== "object") {
    return x === y;
  }

  //determine if one of x or y is not an object
  if (typeof x !== "object" || typeof y !== "object") {
    return false;
  }

  //create an array of keys of each object
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  //check lengths to see if same and return false if no match
  if (xKeys.length !== yKeys.length) {
    return false;
  }

  //check if the keys are all the same
  //iterate through one of the arrays
  for (let i = 0; i < xKeys.length; i++) {

    //check if each key is also in the other array with .includes, and if they       have the same values at those keys with a deep equals recursion
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
