console.log("Answer to number 1:");
console.log("hello world")

/*
Instructions:
	
1. Ensure that your script is connected to your HTML document.
2. Create a function to input the student’s name and inform that the name is added to the list.
3. Once student names are added, create a function to display the total number of students added to the list.
*/


function student(){
    let add = {
        list: [],
        add: function (name) {
            this.list.push(name);
            console.log(`${name} is added to the student's list`);
        }
    }
    return add;
}

let arrayInput1 = ["John","Jane","Joe"];
let studentsList = student();
arrayInput1.forEach((name) => {
    studentsList.add(name);
});

function count(list){
    console.log(`There are total number of ${list.length} students in the student's list.`);
    return list.length;
}

count(studentsList.list);

console.log("\nAnswer to number 2:");
//answer to number 2:
/*
Instruction: Create a function that will print student names that were input previously.
*/
function enumerate(list){
    list.forEach((name) => {
        console.log(`${name}`);
    });
}
enumerate(studentsList.list);

console.log("\nAnswer to number 3:");

/*
Instructions:

Create a function that will check if Joe is an enrollee.
When searched, it will accept the upper and lower case letters and display the result.
You can use .toLowerCase() or .toUppercase() if needed. 
If Joe is not on the list, the result must display that Joe is not found on the list.
*/
function check(list,find,log = true){
    let found = false;
    let i = -1;
    list.every((name,index) => {
        if(find.toLowerCase() == name.toLowerCase()){
            if(log)
                console.log(`${name} is an Enrollee`);
            found = true;
            i = index;
            return false;
        }
        return true;
    });
    if(log && !found){
        console.log(`${find} is not found on the list`);
    }
    return i;
}

let arrayInput2 = ["john","jane","joe","dave"];

arrayInput2.forEach((name)=>{
    check(studentsList.list,name);
});

console.log("\nAnswer to number 4:");

/*
Instructions:

Create an empty array to store the student section.
Create a function that will add the student section.
Display the student with their added section.
*/
let studentsSectionList = [];
function addSectionFor(name,section){
    let i = check(studentsList.list,name,false);
    if(i<0){return;}
    studentsSectionList[i]=section;
}

//let arrayInput1 = ["John","Jane","Joe"];
let arrayInput3 = ["A","A","A"];
arrayInput1.forEach((name,index)=>{
    addSectionFor(name,arrayInput3[index]);
});

function sectionList(){
    let list = [];
    studentsList.list.forEach((name,index)=>{
        list.push(`${name} - Section ${studentsSectionList[index]}`)
    });
    return list
}
let studentsWithSectionList = sectionList();
console.log(studentsWithSectionList)

console.log("\nAnswer to number 5:");

/*
Instructions:

Create a function for removing students from the list.
Once removed, display the student name that was removed from the list.
Display the names of the remaining students.
*/
function remove(name){
    let list = studentsList.list;
    let i = check(list,name,false);
    if(i<0){return;}
    let studentName = list[i];
    //student list update
    studentsList.list.splice(i,1);
    //section list update
    studentsSectionList.splice(i,1);
    console.log(`${studentName} was removed from the student's list`);
    //optional update
    studentsWithSectionList = sectionList();
}

let stringInput1 = "Joe";
remove(stringInput1);

console.log(studentsList.list);


console.log("\nAnswer to number 6:");
/*
Instructions:

Compute the average grade of each student object.
Add the computed average of the student as a value to a new property called average to the studentGrades array of objects.
Log the modified object array (including the average property) to the console.

Stretch Goals:
Round off the average into a single decimal number.
Note: Value for average property cannot be a string.
*/

const studentGrades = [
	{ studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
	{ studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
	{ studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
	{ studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
	{ studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];
console.log("\nSolution a:");
//Solution a:
function round(value, precision = 1) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
studentGrades.forEach((s) =>{
    s.A = round((s.Q1+s.Q2+s.Q3+s.Q4)/4);
});
//create copy of const due to console.log only showing current values of array
let copyData = JSON.parse(JSON.stringify(studentGrades));
console.log(copyData);

console.log("\nSolution b:");
//Solution b:
for (let i = 0; i<studentGrades.length; i++)
{
    let forAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    
    studentGrades[i].forAve = parseFloat(forAve.toFixed(1));
    console.log(studentGrades[i].forAve);
}
console.log(studentGrades);

console.log("\nAnswer to number 7:");
/*
Instructions:
Add a new person object to the people array.

Remove the person object with the name "John" from the people array.

Sort the people array by age, from oldest to youngest.

Find the first-person object in the people array with an age greater than or equal to 30.
*/

function person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this;
}
let people = [
    {
        name: 'John',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Jane',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Bob',
        age: 40,
        gender: 'male'
    }
]

//optional, so that all entry in [people] array becomes [person] object
people.forEach((p,i)=>{
    people[i] = new person(p.name,p.age,p.gender);
});


console.log("\nSolution part 1:");
function addPerson(p,log = true){
    people = people.concat(p);
    console.log(`${p.name} was added.`);
    if(log)
        console.log(people.slice(0));
}
addPerson(new person('Mary',35,'female'));


console.log("\nSolution part 2:");
function removePerson(name){
    people.every((person,index) => {
        if(name.toLowerCase() == person.name.toLowerCase()){
            people.splice(index,1);
            console.log(`${person.name} was removed.`);
            return false;//end every func
        }
        return true;//continue every func
    });
    console.log(people.slice(0));
}
removePerson("John");


console.log("\nSolution part 3:");
people.sort(function(a, b){return b.age - a.age});
console.log(people.slice(0));


console.log("\nSolution part 4:");
const found = people.find(person => person.age >= 30);
console.log(found);

console.log("\nAnswer to number 8:");
/*
Instructions:

Calculate the weight based on the user input in kilograms (kg).
Create a function that displays the converted weight in pounds.
Execute the function property based on the initialized object with arguments.
*/

function converter(){
    let converter = {
        name : 'Jelly',
        convertKilogramToPounds: function (kg,precision = 2) {
            let pounds = kg*2.2046;
            pounds = round(pounds,precision);
            console.log(`${this.name}'s weight in lbs is ${pounds}`);
            return pounds;
        }
    }
    return converter;
}

let c = converter();

console.log("\nSolution a:");
let userInput = 59.87419;//prompt(`Input ${c.name}'s weight in kilograms (kg)`);

c.convertKilogramToPounds(userInput,0);


console.log("\nSolution b (prompt):");
//prompt
userInput = prompt(`Input ${c.name}'s weight in kilograms (kg)`);
c.convertKilogramToPounds(userInput);