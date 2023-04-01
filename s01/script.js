console.log("Shhh!!!");

// Two types of comments:

// This is a single line comment.

/* 

    This is a multi line comment.

*/

// Naming Variables

const pi = 3.1416; //constant variables cannot be re-assigned.
// pi = 2.0000;
console.log(pi);

let name1 = "BorsCode";
name1 = "Richard";

console.log (name1);

// Let name1 = "David"; //Let cannot be declared

// var food = "pizza"; //ES6 slowly unused var as declaring variable
// console.log (food);

//Primitive Data Types

let name = "Joel" //String Data Type
name = 'Tonet';
name = 'Kokou';
console.log (name);

let age = 15; //number of intiger
console.log (age);
console.log (typeof age); //it displays the data type that was assigned in the variable

let grade = 90.5;
console.log (grade);

let myCopy; //This is an example of declaring a variable in a camel case notation.
console.log (myCopy); //it will be tag as undefine because nothing is declared in the variable

let option1 = null;
console.log (option1);

// let 1fruit = "apple"; we do not apply a number before the word in the variable
// console.log (1fruit);

/*
let /fruit = apple;
console.log (_fruit);

let $year = 2023;
console.log ($year);

let $_year = 2023;
console.log ($_year);

let _year = 2023;
console.log (_year);

let .year = 2023;
console.log (.year);

let !year = 2023;
console.log (!year);

let ?year = 2023;
console.log (?year);
*/

// let #_character = "Doraemon"
// Note: Certain special characters are acepted when naming a variable
//Noted: When combining special characters, it is depends when naming a variable.

//Objects
//They have properties or key value pairs

let person = {
    //property:value

    name: "Jose Rizal", //String
    age:30, //number
    address: "Calamba, Laguna", //string
    isDoctor:true, //boolean
    spouse: null, //null
    siblings : [    //array
        "Paciano",
        "Maria",
        "Olympia",
        "Saturnina",
        "Josefa",
        "Narcisa",
        "Lucia",
        "Soledad",
        "Concepcion",
        "Trinidad"
    ]

}

console.log (person); //it displays the object content
console.log (person.name);
console.log (person.address);
console.log (person.siblings); //it displays an array of siblings

//Note: We will use don (.) notation to call the properties in the specific object.

//Array - storage of data types

let fruits = ["Apple", "Pear", "Guava", "Aratilis", "Grape"];

console.log (fruits);
console.log (fruits.length); //this method displays the number of elements inside the array/size of an array.
console.log (fruits[2]);
console.log (fruits[4]);

//Function
    //Function Declaration
        //Function Keyword
        //Function name and parenthesis (which holds the parameters)
        //Curly braces - determines the block of codes/statements that are written inside the code block
function greeting (firstName, lastName) {
    //Parameters are a.k.a "arguments", "properties", and "attributes"

    console.log(`My name is ${firstName}, ${lastName}. It was nice to meet you!`);

}

greeting ("Gerard", "Way"); //invoke function calls.
greeting ("Rey", "Toro");

function product (a,b) {
    console.log ("Product: "); 
    return (a*b); //stops the execution of a function and returns a value.   
}

console.log (product(2,4)); //invoke the function


//Activity
function computeAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let average = computeAverage(4, 8, 12);
console.log(average); // Output: 8

function convertMetersToKilometers(meters) {
    var kilometers = meters / 1000;
    return kilometers;
}

var meters = 1000;
var kilometers = convertMetersToKilometers(meters);
console.log(kilometers); // Output: 1




function averageNum (num1, num2, num3) {
    return (num1+num2+num3)/3;
}

console.log (averageNum(1,2,3));

/*
    Create a function that converts meter to kilometer using a return statement
*/

function convertNumbers (meters) {
    const m = 1000;
    console.log("Result in KM: ");
    return (meters/m);
}

console.log(convertNumbers(20000));

