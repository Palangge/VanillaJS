console.log("Answer 1");
console.log("Hello World!");
let firstName = "Angelito";
let lastName = "Arboleda";
let age = "32";
let hobbies = ["Anime","Reading Novel","Gaming"];
const city = "Caloocan";
const houseNumber = "38";
const state = "Metro Manila";
const street = "Josefina";

function UserInformation(firstName,lastName,age,hobbies,city,houseNumber,state,street,relationShipStatus = false){
    let userInformation = [];
    userInformation["First Name"] = firstName
    userInformation["Last Name"] = lastName
    userInformation["Age"] = age
    userInformation["Hobbies"] = hobbies
    userInformation["City"] = city
    userInformation["house Number"] = houseNumber
    userInformation["state"] = state
    userInformation["street"] = street
    /*let uIStr = `First Name: ${firstName}\n`;
    uIStr+= `Last Name: ${lastName}\n`;
    uIStr+= `Age: ${age}\n`;
    uIStr+= `Hobbies: ${hobbies}\n`;
    uIStr+= `City: ${city}\n`;
    uIStr+= `house Number: ${houseNumber}\n`;
    uIStr+= `state: ${state}\n`;
    uIStr+= `street: ${street}`;*/
    console.log(userInformation);
    console.log(firstName+" "+lastName+" is "+age+" years of age");
    console.log("His bobbies are: "+hobbies.join(", "));
    console.log("city: "+city);
    console.log("house number: "+houseNumber);
    console.log("state: "+state);
    console.log("street "+street);

    console.log("The value of isMarried is:");
    console.log(relationShipStatus);

}

UserInformation(firstName,lastName,age,hobbies,city,houseNumber,state,street)

console.log("\n\n\n");
console.log("Answer 2");
let num1 = 10;
let num2 = 20;
console.log("num1: "+num1);
console.log("num2: "+num2);
console.log("num1==num2: "+(num1==num2));
console.log("num1>=num2: "+(num1>=num2));
console.log("num1<=num2: "+(num1<=num2));
num1+=30;
num1-=20;
num1*=30;
num1/=10;
console.log("num1: "+num1);
console.log("num2: "+num2);
console.log("num1==num2: "+(num1==num2));
console.log("num1>=num2: "+(num1>=num2));
console.log("num1<=num2: "+(num1<=num2));
console.log("num1!==num2: "+(num1!==num2));


console.log("\n\n\n");
console.log("Answer 3");

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

let colorInput = ["Black", "Violet", "Pink"];//prompt("Enter a color: ");
colorInput.forEach(color => {
    let result = checkColor(color);
    console.log(result);
});


console.log("\n\n\n");
console.log("Answer 4");

function oddOrEven(num){
    if(isNaN(num) || typeof num !== "number"){
        return (`unexpected input`);//(`"${num}" is unexpected input`);
    }else
    if(num%2==0){
        return (`even number`);//(`${num} is even number`);
    }else{
        return (`odd number`);//(`${num} is odd number`);
    }
}
let userInput = [5, 10, "8", "20", "seven", "Fifteen", true, null, undefined, NaN];
userInput.forEach(num => {
    let result = oddOrEven(num);
    console.log(result);
});


console.log("\n\n\n");
console.log("Answer 5");

function countEvenNumbers(num=20) {
    if (isNaN(num) || num < 0 || num > 20) {
      console.log("Invalid input, please enter a number between 0 and 20.");
      return;
    }
    for (let i = num; i >= 0; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
console.log("part 1");
countEvenNumbers();

userInput = parseInt(prompt("Enter a number between 0 and 20:"));
console.log("part 2");
countEvenNumbers(userInput);



console.log("\n\n\n");
console.log("Answer 6");

function checkNumber() {
    let number = prompt("Enter a number:");

    for (;number >= 50;number--) {
        if (number % 10 === 0) {
            console.log(number + " is divisible by 10. Skipping...");
            continue;
        }
        if (number % 5 === 0) {
            console.log(number + " is divisible by 5.");
        }
    }

    console.log("Loop terminated.");
}
checkNumber();

console.log("\n\n\n");
console.log("Answer 7");

function loginAttempts() {
    const correctUsername = "student@mail.com";
    const correctPassword = "discovery";
    let usernameInput, passwordInput;
    let attempts = 3;

    while (attempts > 0) {
        usernameInput = prompt("Enter a username or email:");
        passwordInput = prompt("Enter a password:");

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            alert("SuccessFully Login");
            console.log("Welcome User");
            return;
        } else {
            attempts--;
            alert(`Login Failed Now Only ${attempts} Login Attempts Available.`);
        }
    }
    alert("Login attempts exceeded. Please try again later.");
    console.log("Login failed");
}

console.log("Entry Response");
loginAttempts();

  