//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array
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
//Should take an object and return all its keys in a string each separated with a space
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
//Should take an object and return all its string values in a string each separated with a space
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
//Should take one argument and return 'array' if its an array and 'object' if its an object
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
//Should take a string of one word, and return the word with its first letter capitalized
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
//Should take a string of words and return a string with all the words capitalized
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
//Should take an object with a name property and return 'Welcome <Name>!'
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
//Should take an object with a name an a species and return '<Name> is a <Species>'
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
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
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
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
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
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++){
        for(var key in object){
            if(key === array[i]){
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed"
function dedup(array) {

    let dedupedArray = [];
    
    for(var i = 0; i < array.length; i++){
        if(!dedupedArray.includes(array[i])){
            dedupedArray.push(array[i]);
        }
    }

    return dedupedArray;
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