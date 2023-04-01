console.log ("connected");

//Js Operators - symbols used to manipulate values/operands.
//It is used to perform specific mathematical and logical computation in operands.

//Assignment Operators (=)
//let - can be re-assigned but cannot be re-declared

let a =14;
a = 18;

console.log (a);

let b = a;
console.log (b);

//Arithmetic Operators - performs mathematical operation on numerical values/operands and returns a single numerical value.

//Addition
console.log (20+30); //it displays the sum which is a number/integer
console.log ("20"+"30"); //2030 - concatenation - it links 2 strings together.
//string concatenation

//Substraction (-)
console.log (20-10); //10 - integer/number
console.log ("20"-"10"); //10 - type coercion - automatic/implicit conversion of values from one data type to another

let val1 = 50;
let val2 = "30";
let diff = val1 - val2;
console.log (diff);

console.log ("twenty" - "ten"); //NaN - not a number

//Multiplication (*)

console.log (10*5);
console.log ("10"*"5"); //coercion

//Division (/)
console.log (50/5); //integer
console.log ("50"/"5");

//Modulo (%) - remainder
console.log (100 % 3); //1 - number
console.log ("100" % "3"); //coercion

//Increment (++) and Decrement (--)

let c = 30;
console.log (++c); //31 increased by 1
console.log (c); //31
console.log (--c); //30 => decreased by 1
console.log (c); //30

//if operator comes first (++ and --), it performs arithmetic operations before displaying the result

console.log (c++); //30
console.log (c);
console.log (c--);//31
console.log (c);

//if operand comes first before the operator (++ and --) it displays he value of the operand before performing arithmetic operations.

//Perform arithmetic operation on two numbers.
//Perform arithmetic operation on two variables with numerical values.
//Multiply a nuber to the difference of the two numbers PEMDAS RULE.

//Activity

let num1 = 10;
let num2 = 5;

let result1 = num1 + num2; // Addition
let result2 = num1 - num2; // Subtraction
let result3 = num1 * num2; // Multiplication
let result4 = num1 / num2; // Division

console.log(result1); // Output: 15
console.log(result2); // Output: 5
console.log(result3); // Output: 50
console.log(result4); // Output: 2

let d = 10;
let e = 5;

console.log(d++); //10, because it displays the value of a before performing the increment operation
console.log(e--); //5, because it displays the value of b before performing the decrement operation

let results = (d - e) * 2; //multiply the difference of a and b by 2
console.log(results); //12

console.log(++d); //12, because it performs the increment operation before displaying the value of a
console.log(--e); //4, because it performs the decrement operation before displaying the value of b

let num5 = 8;
let num6 = 5;
let num7 = 3;

let result = num5 - num6 * num7;
console.log(result); // Output: -7

//Compound Assignment Operators - shorthand for arithmetic and assignment operators
//performs methematical operation first then assigning the result back to the variable.

//Long method:
let j = 15;
console.log (j+3);
console.log (j);

//Addition-Assignment Operator (+=)
let i=15;
console.log(i+=3); //18

//Subtraction-Assignment Operator (-=)
console.log (i-=10); //8 wherein 18 is the final value of addition-assignment operator

//Multiplication-Assignment Operator (*=)
console.log (i*=6); //48

//Division-Assignment Operator (/=)
console.log (i/=2); //24

//Modulus-Assignment Operator (%=)
console.log (i%=8); //0

//Comparison Operators
//Compares two operands and return a logical value (true or false)
//relational: < - less than and > - greater than

//Equality Operator or a.k.a. "loose equality" (==)
//Coercion is allowed
//compares the same value REGARDLESS of data type because of coercion

console.log ("jan" == "Jan"); //true
console.log ("jan" == "January"); //false - different strings of data
console.log (true == true); //true
console.log(false == true); //false
console.log (true==false); //false
console.log (false==false); //true
console.log (null==undefined); //true - both empty

console.log ("20"==20); //true - trpe coercion
console.log (true==1); //true
console.log (true == 2); //false
console.log (false == 0); //true - binary code

//type coercion - automatic/implicit conversion of values from one data type to another.
//parseInt() - for whole numbers
//parseFloat() - for decimal numbers

let ex = 75.68;
console.log (parseInt("75.68")); //75 rounded as a whole number
console.log (parseFloat("75.68")); //75.68 - it retains their decimal places
console.log (parseInt("75.68").toFixed(2)); //it displays the number of decimals in the number that was declared
console.log (parseFloat("75.68").toFixed(3)); //

//Strict Equality Operator (===)
//compares "sameness of value" and data type
//No Coercion Allowed
console.log (1===1); //true
console.log (5==="5"); //false
console.log (true===1); //false - different data type and no coercion
console.log (null===undefined); //false
console.log ("James"==="Daniel"); //false - different value
console.log (true===true); //true - same boolean
console.log (false===true); //false - different value
console.log (false===false); //true - same value
console.log (true===false); //false - no coercion is allowed

//Inequality Operator (!=) a.k.a "loose Inequality Operator"
//it compares "difference of values"
//coercion will take place

console.log (false!=true); //true
console.log (3 != 3.00); //false
console.log (3 != 3.01); //true
console.log (null != undefined); //false 
console.log (true != 1); //false - they are equal and coercion takes place

//Greater Than (>)

console.log (100>75); //true
console.log (95.75>95); //true

//Less than (<)
console.log (45<50); //true
console.log (67<45); //false

//Greater Than or Equal to (>=)
console.log(45>=45);//true
console.log(44>=45);//false

//Less Than or Equal to  (<=)
console.log(100<=100); //true
console.log(1<=0.5); //false

//Logical Operators 

//AND (&&)
console.log (true && true); //true
console.log (true && false); //false
console.log (false && true); //false
console.log (false && false); //true

console.log (("Max" == "Max") && (undefined == null));
            //( T && T )
            //T

let kei = true;
let el = false;

console.log (kei > 2 && kei < 2); //false
            // F && T
            // F

console.log (kei == el); //false

let isOnline = true;
let isBoss = false;
let chatSiBoss = isOnline && isBoss;
console.log (chatSiBoss); //false

//OR Operator (||)
//it evaluates to true of either of the operation is true
//if both operands are true result is tru (vise versa: if both operands are false the result is false)

console.log (true || true); //true
console.log (true || false); //true
console.log (false || true); //true
console.log (false || false); //false

//NOT OPERATOR (!)

console.log (!true); //false
console.log (!false); //true

let isAdmin = true;
let isInstructor = 1;

let isAnswer = !isAdmin === isInstructor;
            //false === "1"
            //F - no coercion
console.log (isAnswer); //false

let faveNum = 333;
let chooseNum = 245;

let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum);
            // = ! (F || T)
            // = !T
            // = F
console.log (isHigher); //false

//Exercise:

let isTrue = true;
let isFalse = false;

let isTralse=!(!isFalse!=!isFalse&&isFalse !==isTrue ||(isTrue !=!isFalse&& isFalse !=!isTrue));

console.log (isTralse); //true
//Without using a console log, determine the output whether the statement will be true or false.

/*
!
(!isFalse != isFalse && isFalse !== isTrue ||
T != T && F !== T
F && F
= F    

(!isTrue != !isFalse && is False != !isTrue));
F != T && F != F
T && F
!F
= True

!isFalse evaluates to true
!isFalse != !isFalse evaluates to false since both !isFalse expressions are True
isFalse !== isTrue evaluates to true since false is not equal to true
isTrue != !isFalse evaluates to false since !isFalse evaluates to true
isFalse != !isTrue evaluates to false since !isTrue evaluates to false
Combining the above using && and ||, the expression becomes: true && (false || false) which evaluates to false
Finally, applying the ! operator to false results in True
Therefore, the output of isTralse will be True.

*/

