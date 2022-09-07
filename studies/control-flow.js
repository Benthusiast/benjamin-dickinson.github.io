/**
 * CONTROL FLOW
 * 
 * Control flow is the use of conditional statements to determine what code happens when in a program.
 * It is possible to have some code execute under certain condtions, and other code execute under
 * others. 
 * 
 */

let x = 3;
let y = 5;  //to be used in below conditionals
let z = 7;

// if Statements use a conditional and execute a code block if the conditional resolved true
// created with the syntax if(conditional){code block}

if(x < y){ //this check resolves true so the code block is executed
    console.log("The if conditional returned true!")
}

// else if Statements follow if statements and execute a block of code when the if conditional resolved 
// false, and the else if conditional resolved as true 

if(x > y){ //this check resolves false so the code block is not executed
    console.log("The if conditional returned true!")
}else if(z > y){ //this check happens when the if resolved false, and then resolves true so the code block is executed
    console.log("The else if conditional was true!")
}

// else Statements follow if statements or end if-else if chains and execute the code block within when all
// the previous conditionals resolved as false. They do not have a conditional of their own. Else statements 
// are often used to create the default option of conditional code.

if(x > y){ //this check resolves false so the code block is not executed
    console.log("The if conditional returned true!")
}else if(x > z){ //this check happens when the if resolved false, and then resolves to false also 
    console.log("The else if conditional was true!")
}else{ // No conditional needed as this code should trigger when the other conditionals were all false
    console.log("None of the conditionals returned true!")
}


// switch Statements establish a variable, and executes the block of code based on the "case", or value, of 
// the switch variable.  Switch statements can also have a default case, which would trigger if none of the 
// other case checks were resolved true.

var petSwitch = "dog";

switch(petSwitch){
    case "dog":  // this case resolved true, so this block of code executes and the other cases are not checked
        console.log("woof woof"); 
        break;
    case "rabbit":
        console.log("thump thump");
        break;    
    case "raccoon":
        console.log("Wait a second. We don't have a ra- AH! AH! GET IT OFF ME!");
        break;
    default:
        console.log("Feels a bit too quiet in here.")
    }
