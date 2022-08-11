//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var returnArray = [];
    for(var key in object){
        returnArray.push(object[key]);
    }
    return returnArray; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var valueArray = [];
    for(var key in object){
        valueArray.push(key);
    }
    return valueArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var valueArray = [];
    for(var key in object){
        if(typeof object[key] === "string")
        valueArray.push(object[key]);
    }
    return valueArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return"array";
    }else if(typeof collection === "object"){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var stringArray = string.split("");
    var bigLetter = stringArray[0].toUpperCase();
    stringArray.shift();
    stringArray.unshift(bigLetter);
    return stringArray.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var wordsArray = string.split(" ");
    for(var i = 0; i < wordsArray.length; i++){
        var stringArray = wordsArray[i].split("");
        var bigLetter = stringArray[0].toUpperCase();
        stringArray.shift();
        stringArray.unshift(bigLetter);
        wordsArray[i] = stringArray.join("");
    }
    return wordsArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var stringArray = object.name.split("");
    var bigLetter = stringArray[0].toUpperCase();
    stringArray.shift();
    stringArray.unshift(bigLetter);
    dude = stringArray.join("");
    return "Welcome " + dude +"!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var stringArray = object.name.split("");
    var bigLetter = stringArray[0].toUpperCase();
    stringArray.shift();
    stringArray.unshift(bigLetter);
    dude = stringArray.join("");
    var stringArray2 = object.species.split("");
    var bigLetter2 = stringArray2[0].toUpperCase();
    stringArray2.shift();
    stringArray2.unshift(bigLetter2);
    whatsit = stringArray2.join("");
    return dude + " is a " + whatsit; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises === undefined){
        return "there are no noises";
    }else if(object.noises.length >= 1){
        return object.noises.join(" ");
    }else if(object.noises.length === 0){
            return "there are no noises";
        }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var lookFor = word.toLowerCase();
    string = string.toLowerCase();
    var toCheck = string.split(" ");
   
  //this loop iterates over the array and returns true upon finding the word
    for(var index = 0; index < toCheck.length; index += 1){
        if(lookFor === toCheck[index]){
            return true;
        }
    }
    return false;
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
//assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
function isFriend(name, object) {
    if(object.friends === undefined){
        return false;
    }
    for(var i = 0; i < object.friends.length; i++){
        if(name === object.friends[i]){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
    var notFriends = [];  
    for(var i = 0; i < array.length; i++){
  
      if(array[i].name !== name){
        if(!(array[i].friends.includes(name))){
          notFriends.push(array[i].name);        
        } 
      } 
     }
    console.log(notFriends);
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(object, key, value) {
    object[key] = value;
    return object;
    }


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}