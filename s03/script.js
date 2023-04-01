console.log ("GO");

//Selection Control Structure

//If Statements - conditional branching statement
//condition is true, a group of statement is executed
//condition is false, the statement is skipped

/*
    SYNTAX:
    if (condition)
    {
        //statement1
        //statement2
    }
*/

// if (20 <= 30) {
//     console.log("not allowed to enter"); //displayed
// }
// if (50 <= 30) {
//     console.log("not allowed to enter"); //not displayed/skipped
// }
// let age = prompt ("Enter your age");
// function getAge (age) {
//     if (age <= 30)
//     {
//         console.log ("You are not allowed");
//     }
//     return (age);
// }

// getAge (age);

//If -Else statement
//2 way decision statement
//it is used to make decisions and execute commands conditionally

/*
    SYNTAX:
    if (condition)
    {
        statement 1
    }
    else {
        //statement 2
    }
*/

// let myAge = 75;

// if (myAge === 30) {
//     alert("Hello from the codeblock");
// } else {
//     console.log ("haller sa aming bloke");
// }

/*
Assign a variable that lets the user input a height in centimeter.
Ensure that the word centimeter is indicated for proper reference.

Create an If-Else Statement using the following conditions:

1. If the height is below 150, display "Did not pass the minimum height requirement".
2. If the height is above 150, display "Pass the minimum height requirement".

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

*/

/*
    Exercise: 1

function checkHeight() {
    let heightInCm = prompt("Please enter your height in centimeters:");
    
    if (heightInCm < 150) {
      alert("Did not pass the minimum height requirement.");
    } else {
      alert("Pass the minimum height requirement.");
    }
}

checkHeight();
*/

// let height = prompt ("enter your height in cm");

// function humanHeight (height) {
//     if (height >= 150) {
//         console.log ("Pass the minimum height requirements");
//     } else {
//         console.log ("Did no pass the minimum height requirements");
//     }
// }

// humanHeight(height);

//Else If - 2 or more possible outcomes

//Syntax

/*
    if (condition)
    {
        //statement 1
    } else if (condition) {
        //statement 2
    } else {
        //statement 3
    }
*/

// let price = prompt ("Enter your price:");

// if (price < 50) {
//     console.log ("affordable");
// } else if (price <= 75) {
//     console.log ("pricey");
// } else if (price <= 90) {
//     console.log ("benta ko muna atay ko");
// } else {
//     console.log ("out of budget");
// }

/*
Determine the typhoon intensity with the following data:
    Windspeed of 30, not typhoon
    61 tropical depression is detected
    61-88 tropical storm is detected
    89-117 severe tropical is detected
    others, typhoon detected

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.
*/


// let windSpeed = prompt("Enter the wind speed:");
// let typhoonIntensity;

// function checkTyphoonIntensity() {    
//     if (windSpeed < 30) {
//       typhoonIntensity = "Not a typhoon";
//     } else if (windSpeed >= 30 && windSpeed <= 60) {
//       typhoonIntensity = "Tropical depression detected";
//     } else if (windSpeed >= 61 && windSpeed <= 88) {
//       typhoonIntensity = "Tropical storm detected";
//     } else if (windSpeed >= 89 && windSpeed <= 117) {
//       typhoonIntensity = "Severe tropical storm detected";
//     } else {
//       typhoonIntensity = "Typhoon detected";
//     }
    
//     alert(typhoonIntensity);
// }

// let intensity = prompt ("Enter your")

//Switch Statement - used to perform different actions on different conditions
//compare the same expression to several different values.

//RULE OF THUMB
/*
    YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING
    A LIST OF VALUES AGAINST A SINGLE VARIABLE
*/

/*
    SYNTAX:
    switch (expression) {
        case (condition) 1:
            //statements
            //break; stops the execution inside the switch block
        case (condition) 2;
            //statements
            //
            .
            .
            .
            .
        default: 
            //statement
            specifies the code to run if there is no match.
    }
*/

// let day = prompt ("enter a number between 1 to 7");

// switch (day)
// {
//     case (day = "1"):
//         console.log ("Monday");
//         break;
//     case (day = "2"):
//         console.log ("Tuesday");
//         break;
//     case (day = "3"):
//         console.log ("Wednesday");
//         break;
//     case (day = "4"):
//         console.log ("Thursday");
//         break;
//     case (day = "5"):
//         console.log ("Friday");
//         break;
//     case (day = "6"):
//         console.log ("Saturday");
//         break;
//     case (day = "7"):
//         console.log ("Sunday");
//         break;
//     default:
//         console.log ("Invalid weekday");
// }

/*
Create a Switch Statement that accepts the colors: Black, Violet and Pink.
Lowercase and Uppercase letters must be accepted
Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

*/

// Activity
let colorInput = prompt("Enter a color: ");
let result = checkColor(colorInput);

function checkColor(color) {

    let message;
  
    switch (color.toLowerCase()) {
      case "black":
        message = "You have chosen black.";
        break;
      case "violet":
        message = "You have chosen violet.";
        break;
      case "pink":
        message = "You have chosen pink.";
        break;
      default:
        message = "Invalid color.";
    }
  
    return message;
  }

console.log(result);

let name = "Jiezel Olandag";
console.log (name.length); //total 14: it counts the characters including space

//Arrays and Objects
let numbers = [1,54,58,60,75,90,99];
console.log (numbers.length); //7 - because it counts the number of elements inside the array.

let grades = [
    //properties are also known as key value pair
    {first: 90},
    {second: 92},
    {third: 94},
    {fourth: 96}
];

console.log (grades.length); //4 - it displays number of objects.

if (numbers.length == 7 && grades.length >= 4)
{
    console.log ("From the codeblock");
}

else {
    console.log ("From the others");
}

//BONUS: Ternary Operator
// ? - if
// : - else

/*
    SYNTAX:
    condition ?  <statement> : statement
*/

let legalAge = 18;

(legalAge >= 18)? 
console.log("Legal"): 
console.log ("Minor"); //legal 