/// to use something you need to have the element name then
/// what you want to do with the element
/// like windows.something document.something console.something

/// styling console 
/// -Directive %c to style the way of the console

/*
Data Types 
- string "string"
- number 000
- array ["stuff", "stuff"] => object 
- key: value {key: value, key: value} => object
- boolean (true or false) 
- undefined 
- null
to know the data type we can use console.log(typeof value)
*/ 

/*
    Variables Types
- Declare a variable and use aka keyword
var
- syntax (keyword | variable name | assignment operator | variable value)
var name = "value";
- multi var in same line
var name = "value", name2 = "another_value";
- HTML id are also variable names
*/ 


/*
var
- Redeclare, (Yes) aka use more than once
- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window] ( )
- Block or Function Scope


Let
- Redeclare (No => Error) 
- Access  Before Declare (error)
- Variable Scope Drama ()
- Block or  Function Scope


Const
- Redeclare (No => Error)
- Access Before Declare- (error)
- Variable Scope Drama ( )
Block or Function Scope
*/

/*
string syntax and character escape
\ ignore + line continue 
\n new line

console.log("Elzero Web School"); works
console.log('Elzero Web School'); works
console.log("Elzero 'Web' School"); works
console.log('Elzero "Web" School'); works
console.log("Elzero "Web" School"); error 
console.log('Elzero 'Web' School'); error
console.log('Elzero \'Web\' School'); works
console.log("Elzero \"Web\" School"); works 

console.log("Elzero \Web School"); the \ will be hidden
console.log("Elzero \\Web School"); one \ will be shown

console.log("Elzero
Web 
School"); error

console.log("Elzero \
Web \
School"); works Elzero Web School

console.log("Elzero \nWeb \nSchool"); 
works as 
Elzero 
Web
school
*/

/// concatenation is a way to mix stuff together
/// var a ="1",b = "2"; document.write(a + b); will get 12


/* a `` is the best to use since it apply any thing you put
the stuff how you want it but you need a ${} to call any
var or let or const example

var a = `1`,b = `2`; document.write(${a} ${b}); will get 12
or use HTML instead
var html = `
<div class="hi">
<h1>hi</h1>
</div>
`
document.write(html)
*/ 

/* first JS test by Elzero 
var title_main = "Elzero", des_main = "Elzero Web School", date_main = "25/10";

var html = `
<div>
<h3>${title_main}</h3>
<p>${des_main}</p>
<span>${date_main}</span>
</div>
`
document.write(html.repeat(4))
*/

/*
Arithmetic Operators
+ Addition
- Subtraction
* Multiplication
/ Division
** Exponentiation, (ES7) example 2^4 = 16
% Modulus , (Division Remainder) what's left from divison
example 11/2 = 5 and rimander is 1
++ Increment- [ Post / Pre ] post num++ pre ++num
-- Decrement [ Post / Pre ] 
*/

/*
- + Unary Plus [Return Number If Its Not Number] => Number()
- - Unary Negation [Return Number If Its Not Number + Negates It]
Tests
- Normal Number => number
- String Number => number
- String Negative Number => number
- String Text => NaN
- Float => number
- Hexadecimal Numeral System => number
- null => number 0
- false => number 0
- true => number 1
console.log(+"100") => 100
*/

/*
Assignment Operators
let a = 10; => 10

a = a + 20; => 30

a = a + 70; => 100

a += 100; => 200 aka a = a + 100

a -= 50; => 150  aka a = a - 50

a /= 50; => 3    aka a = a / 50
*/

/*
/// Elzero 2nd challenge 


let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++)
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a );

/* first one
[++a]
-value: 11
-explain: pre Increment
[+]
-explain: addition
[+b++]
-value: 20
-explain: post Increment
[+]
-explain: addition
[+c++]
-value: 80
-explain: post Increment
[-]
-explain: subtract
[+a++]
-value: 11
-explain: pre Increment and it got +1 from the previous ++a
*/

/* second one
[++a]
-value: 13
-explain: pre Increment
[+]
-explain: addition
[-b]
-value: -21
-explain: make string number
[+]
-explain: addition
[+c++]
-value: 81
-explain: post Increment
[-]
-explain: subtract
[-a++]
-value: -13 => cuz there's subtract next to it
-explain: pre Increment
[+]
-explain: addition
[+a]
-value: 14
-explain: pre Increment
*/

/* third one
[--c]
-value: 81
explain: post Increment
[+]
explain: addition
[+b]
value: 21
[+]
explain: addition
[--a]
-value: 13
explain: post Increment
[*]
explain: multiplication
[+b++]
-value: 21
explain: post Increment
[-]
explain: subtract
[+b]
-value: 22
[*]
explain: multiplication
[a]
value: 13
[+]
explain: addition
[--a]
-value: 12
explain: post Increment
[-]
explain: subtract
[+true]
value: 1

/// challenge 2


let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); /// 2000
console.log(-d * ++g - --f + +2); /// 173
*/

/* Number
- Double Precision
Syntactic - Sugar "_"
- With Decimal
- Number + Biglnt
- Number Min Value
- Number Max Value

console.log(1000000); ///1000000
console.log(1_000_000); ///1000000
console.log(1e6); ///1000000
console.log(10 ** 6); ///1000000
console.log(1000000.0); ///1000000

console.log(Number.MAX_SAFE_INTEGER); ///max integer
console.log(Number.MAX_VALUE); ///max number that won't go above it
*/ 

/*
    Number Methods
- Two Dots to call a method
- toString() ///gets any number and turn it to a string
    console.log((100).toString()); ///"100" string
    console.log((100.19).toString()); ///"100.19" string

- toFix(amount of numbers) /// basically a ~
    console.log(100.555.toFix(2)); ///100.56

- parseInt(text) ///this will get normal number out first text
    console.log(parseInt("100.1 muneer")); ///100

- parseFloat(text) ///this will get number out of first text
    console.log(parseFloat("100.1 muneer")); ///100.1

- isInteger /// Normal number True anything else False
    console.log(Number.isInteger("100")); ///False
    console.log(Number.isInteger(100.5)); ///False
    console.log(Number.isInteger(100)); ///True

- isNAN(anything) /// any NAN value will be true otherwise False
    console.log(Number.isNAN("muneer")); ///False
    console.log(Number.isNAN("muneer" - 5)); ///True

Math Object 
- Math.round() basically ~
console.log(Math.round(99.2)); /// 99
console.log(Math.round(99.5)); /// 100

- Math.ceil() up the the next number
console.log(Math.ceil(99.2)); /// 100

- Math.floor() down to the previous number
console.log(Math.floor(99.9)); /// 99

- Math.min() minimum number possible
console.log(Math.min(10, 20, 100, -100, 90)); /// -100

- Math.max() maximum number possible
console.log(Math.min(10, 20, 100, -100, 90)); /// 100

- Math.pow() aka **
console.log(Math.pow(2, 4)); ///16 aka 2 ** 4

- Math.random() ///*EVERY IMPORTANT 
console.log(Math.random()); /// random numbers 

- Math.trunc () lets you get only the normal numbers 
console.log(Math.trunc(99.5)); /// 99
*/

/*
/// challenge three
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

/// Find the smallest number in all variables return integer
console.log(Math.min(a,b,c,d).toString()); ///done

/// use variables a + b one to get get the output 10000
console.log(Math.pow(a, Math.trunc(d))) ///10000 done

///get integer "2" from d variable with 4 methods
console.log(Math.trunc(d).toString());
console.log(Math.floor(d).toString());
console.log((d).toFixed());
console.log(parseInt(d).toString());

/// use variable b + d to get this values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(Math.trunc(b) / Math.ceil(d)));
*/

/*
string Methods
let theName = "Ahmed  "

- access with Index []
console.log(theName[0]); ///A

- access with charAt()
console.log(theName.charAt(1)); ///h

- length 
console.log(theName.length); /// 7

- trim()
console.log(theName.trim()); /// "ahmed"

- toUpperCase()
console.log(theName.toUpperCase()); ///"AHMED  "

- toLowerCase()
console.log(theName.toLowerCase()); /// "ahmed  ""

- chain methods
console.log(theName.trim().charAt(2).toUpperCase()); /// M


indexOf(Value [Force], starting [optional] 0)
- let a = "Elzero Web School"
console.log(a.indexOf("Web")); /// 7
console.log(a.indexOf("o")); /// 5

- lastIndexOf(Value [Force], starting [optional] length)
console.log(a.lastIndexOf("o")); /// 15

- slice(start [force], End [optional] Not include end)
console.log(a.slice(2)); /// "zero Web School"
console.log(a.slice(2, 7)); /// "zero "
console.log(a.slice(-5, -3)); /// "ch"

- repeat(Times)
console.log(a.repeat(5)); /// print 5 times
- split(Separator [optional], Limit [optional]) /// **IMPORTANT
console.log(a.split()); /// ["Elzero Web School"]
console.log(a.split("")); ///['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(a.split(" ")); ///['Elzero', 'Web', 'School']
console.log(a.split("", 6)); ///['E', 'l', 'z', 'e', 'r', 'o']

substring(start [force], end [optional] not include end)
--start > end will swap
--start < 0 it start from 0
--use length to get last character
console.log(a.substring(2, 6)); ///zero
console.log(a.substring(6, 2)); ///zero
console.log(a.substring(-10, 6)); ///Elzero
console.log(a.substring(a.length -6)); ///School

substr(start [force], character to extract)
--start >= length = empty ""
--Negative start from end
console.log(a.substr(0, 6)); ///Elzero
console.log(a.substr(17)); /// ""
console.log(a.substr(-3)); /// ool
console.log(a.substr(-5, 2)); /// ch 

includes(value [force], start[optional] default 0)
console.log(a.includes("Web")); /// True

startsWith(value [force], start [optional] default 0)
console.log(a.startsWith("E")); /// True
console.log(a.startsWith("l", 1)); /// True

endsWith(value [force], length[optional] default full length)
console.log(a.endsWith("l")); /// True
console.log(a.endsWith("o", 6 )); /// True
*/

/* string challenge
let a = "Elzero Web School"

/// include this method in your solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+ a.slice(3, 6)); /// Zero

/// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); ///HHHHHHHH

/// Return Array
console.log(a.split(" ", 1)); ///["Elzero"]

/// Use only "substr" method + template literals in your solution
console.log(a.substr(0, 6) + a.substr(-7)); /// Elzero School

console.log(a.charAt(0).toLowerCase()+ a.slice(1).toUpperCase()); /// eLZERO WEB SCHOOL

*/

/* 
Comparison operator
- == equals | compare value only
console.log(10 == "10"); /// true
- != Not equals | compare value only
console.log(10 != "10"); /// false

- === identical | compare value and type
- console.log(10 === "10"); /// False type is different
- !== not identical | compare value and type
console.log(10 !== "10"); /// true

- > larger then
console.log(10 > 10); ///false 
- >= larger then or equal
console.log(10 >= 10); /// true

- < smaller then
console.log(10 < 10); /// false
- <= smaller then or equal
console.log(10 <= 10); /// true

question console.log("Osama" === "Ahmed"); /// make it True

answer console.log(typeof "Osama" === typeof "Ahmed"); 


Logical operator
- ! Not change true to false or false to true
console.log(!true); /// false

- && And (all conditions have to be meet)
console.log(10 == "10" && 10 >= 10); /// true
console.log(10 == "10" && 10 > 10); /// false

- || Or (one condition have to be met)
console.log(10 == "10" || 10 > 10); /// true


Control Flow
- if
- else if
- else

if (condition){ /// if condition is meet this will happen
    ///block of code
} else if (condition){ ///another condition if the first one didn't work
    ///block of code
} else{ /// if all the above conditions didn't meet
    ///block of code
}
example
let price = 100;
let discount = false;
let discountAmount = 30;
let Country = "KSA"

if (discount === true){

    price -= discountAmount; /// price = price - discountAmount

} else if (country === "iraq"){

    price -= 40

} else {

    price -= 50

}

console.log(price); /// 50 cuz the two conditions didn't meet

Nested flow
if (condition){ 
    ///block of code
} else if (condition){
    if (condition){
        ///block of code
    }
    else{
        ///block of code
    }
}

Conditional (Ternary) Operator

condition ? if True : if False OR another condition

let theName = "Ahmed";
let theGender = "Male";
let theAge = 30;

if (theGender === "Male"){
    console.log("Mr")
}else{
    console.log("Ms")
}
^ same thing as the above
theGender === "Male" ? console.log("Ms") : console.log("Ms")
console.log(`Hello ${theGender === "Male" ? "Mr" : "Ms"} ${theName}`}
)

if (theAge > 20){
    console.log(20)
}else if (theAge < 20 && theAge < 60){
    console.log("20 to 60")
}else if (theAge > 60){
    console.log("larger than 60")
}else{
    console.log("Unknown")
}
^ same thing as the above
theAge > 20 
? console.log("20) : theAge < 20 && theAge < 60
? console.log("20 to 60")
: theAge > 60
? console.log("Larger then 60")
: console.log("Unknown")

Logical or ||
let price = 0;
-- Null + Undefined + any False Value aka (0, "")
console.log(`The Price is ${price || 200`}); /// The Price is 200

--Nullish Coalescing operator ??
-- Null + Undefined only
console.log(`The Price is ${price ?? 200`}); /// The Price is 0

*/

/*
///change to Conditional (Ternary) Operator
let a = 10;

if (a < 10){
    console.log(10)
}else if (a >= 10 && a <= 40){
    console.log("10 to 40")
}else if (a > 40){
    console.log("> 40")
}else{
    console.log("Unknown")
}
/// answer
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("Unknown")
/// challenge 2
let st = "Elzero Web School";

if (typeof st === typeof "34"){
    console.log("good");
}
if ( st.charAt(st.indexOf("W")) === "W"){
    console.log("good");
}
if ( st !== "string"){
    console.log("good");
}
if (typeof st === typeof "number"){
    console.log("good");
}
if ( st.slice(0, 6).repeat(2) === "ElzeroElzero"){
    console.log("good")
}
*/

/*
Switch statment
    switch (expression){
        Case 1:
        /// block of code
        break;
        case 2:
        case 3:
        /// block of code
        break;
        default
        ///block of code
        break;
    }
- Default ordering
- multiple match
- === identical

let day = 1;

switch (day){
    case 0:
        console.log("sunday")
    break;
    case 1:
    case 2:
        console.log("monday");
    break;
    default:
    console.log("unknown day");
    break;
} 
*/
/*
/// switch challenge 

let job = "adada"
let salary = 0;

if (job === "manager"){
    salary = 8000;
}else if (job === "it" || job === "support"){
    salary = 6000;
}else if (job === "dev" || job === "desiner"){
    salary = 7000;
}else{
    salary = 4000;
}
/// ^ same as above
switch (job){
    case "manager":
        salary = 8000
    break;
    case "it":
    case "support":
        salary = 6000
    break;
    case "dev":
    case "desiner":
        salary = 7000
    break;
    default:
        salary = 4000
}
*/

/* Switch And If Condition Challenge
let day = "   friday  ";
You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
/// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
/// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
/// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
/// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
/// Output => "Its Not A Valid Day"

switch (day){
    case "   friday  ":
        console.log(`${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`);
    break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
    break;
    case "Monday":
    case"Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
    break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
    break;
    default:
        console.log("Its Not A Valid Day");
    break;
}
*/

/*
Arrays
- create Array [items, items]
- access array elements
- nested arrays
- change the arrays elements
- check for array by using Array.isArray(arr);



let myFriends = ["Ahmed", "Mohammed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[1]}`); /// Hello Mohammed
console.log(`Hello ${myFriends[1][0]}`); /// Hello M
console.log(`Hello ${myFriends[3]}`); /// Hello Marwan,Ali
console.log(`Hello ${myFriends[3][1]}`); /// Hello Ali
console.log(`Hello ${myFriends[3][1][2]}`); /// Hello i

myFriends[1] = "Gamal"; /// will replace "Mohammed" with "Gamal"
myFriends[3][0] = "Sameh"; /// will replace "Marwan" with "Sameh" in the second array

-length index start from 0 [0, 1, 2, 3, 4]

let myFriends = ["Ahmed","Mohammed", "Sayed", "Alaa"];

myFriends.length = 0; ///this will make empty the array

myFriends[myFriends.length] = "Gamal" ///this will add "Gamal" to the end of the array
myFriends[myFriends.length - 1] = "Gamal" ///this will replace "Gamal" with last item of the array

Arrays methods [adding and removing]
- unshift add elements to the start of the array
myFriends.unshift("Osama", "Nabil"); /// will add "Osama" and "Nabil" to the start of the array

-push add elements to the end of the array
myFriends.push("karam"); /// will add "Karam" to the end of the array

- shift() Remove first element from array OR you can use it to save first element in new var
first_element = MyFriends.shift()

- pop() Remove last element from array OR you can use it to save last element
last_element = MyFriends.pop()

array methods [searching]

- indexOf(search element [forced], from index [optional]) returns index
- lastIndexOf(search element [forced], from index [optional]) returns index
Note both of these if they don't find the index return -1 ///**IMPORTANT
- includes (ValueToFind [forced], fromIndex [optional]) returns true or false

- sort(Function[optional]) /// this will sort everything from negative to positive to string
- reverse() /// this will reverse any array

console.log(myFriends.sort().reverse()); /// this will sort everything then reverse it

array slicing
- slice(start [optional], end [optional], Not includes end)
--- slice() => all array
--- If start if undefined => 0
--- Negative count from End
--- if end is undefined || > indexes => slice to the end array.length
--- Return new array
- splice(Start [forced], DeleteCount[optional] [0 means no remove], the items to add [optional])
--- if negative => Start from the end

let myFriends = ["ahmed", "sayed", "ali"];
console.log(myFriends.slice(1)); /// we get "sayed" and "ali"
console.log(myFriends.slice(1, 2)); /// we get "sayed" cuz not including end

myFriends.splice(0, 0, "osama"); /// this will start from index 0 and remove 0 elements and add "osama" to the array

joining arrays
- concat(array, array) => return a new array
- join(select separator)

let hi = [1]
let hm = [2]
let pf = [3]

let haha = hi.concat(hm, pf, "new one"); /// will get [1, 2, 3, "new one"]

console.log(haha.join("|").toUpperCase()); /// will make it 1|2|3|New one
*/

/*
/// array challenge

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

console.log(my.slice(3).concat("Ahmed")); ///["Osama","Gamal","Ameer","Ahmed"]

console.log(my.slice(++zero, counter).reverse()); /// ["Elham", "Mazero"]

my[zero] = "Elzero"

console.log(my[zero]);

console.log(my[zero][counter + zero] + my[zero][++counter + zero].toUpperCase());
*/

/*
Loop
- For
        for([انطلاق] [شرط] [الفعل]){
            /// block of code
        }

for (let i = 0; i < 10; i++){
    console.log(i); /// this will print 10 numbers starting from 0 to 9
}

- loop on sequences 

let myFriends = [1, 2, "osama", "ahmed", 2, "Sayed"];

let onlyNames = [];

for (let i = 0, i < myFriends.length; i++){
    if (typeof myFriends[i] === "string"){
        onlyNames.push(myFriends[i]); /// this will get only the names out of the array
    }
}

- nested loops

let products = ["keyboard", "mouse", "pen"]

let colors = ["red", "green", "black"]

let models = [2020, 2021]

for (let i = 0; i < products.length; i++){
    console.log("#.repeat(15)"); /// separator
    console.log(products[i]); 
        for (let j = 0; j < colors.length; j++){
            console.log("-Colors is");
            console.log(colors[j]);
        }
        for (let k = 0; k < models.length; k++){
            console.log("-Model is");
            console.log(models[k]);
        }
    } /// this is gonna print every products with color and model

loop control
- break /// would stop the code from keep going
- continue /// this will skip the condition and keep going
- label mainloop: / nestedloop:

let products = ["keyboard", 2, "mouse", "pen"]

let colors = ["red", "green", "black"]

for (let i = 0; i < products.length; i++){ ///this will print each index of the array
    console.log(products[i]); /// this will keep printing index of products
    if (products[i] === "mouse"){ /// this will each index till it gets to "pen"
        break;
    }
}/// this will print till it gets to the mouse and stop without taking the rest

for (let i = 0; i < products.length; i++){ ///this will print each index of the array
    if (products[i] === "number"){ /// this will skip all numbers from array
        continue;
    }
    console.log(products[i]); /// this will keep printing index of products
}/// this will print only strings

minLoop: for (let i = 0; i < products.length; i++){ ///this will print each index of the array
    console.log(products[i]); /// this will keep printing index of products
    if (products[i] === "mouse"){ /// this will each index till it gets to "pen"
        break mainloop; /// this will stop the selected loop
    }
}/// this will print till it gets to the mouse and stop without taking the rest

*/

/*
practice

let products = ["keyboard", "mouse", "pen", "mobile", "desk"]
let colors = ["red", "green"]
let amountShow = 3;

document.write(`<h1>There's ${amountShow} products showen</h1>`)

for (i = 0; i < amountShow; i++){
    document.write(`<div>`)
    document.write(`<h2>${products[i]}</h2>`)
    for (j = 0; j < colors.length; j++){
        document.write(`<h4>${colors[j]}</h4>`)
    }
    document.write(colors.join(" | "))
    document.write(`</div>`)
}
*/

/* 
while loop is a loop that will keep going till the condition is met 

white loop requires a condition and break point  

let products = ["keyboard", "mouse", "pen", "mobile", "desk"]

let index = 0;

while (index < products.length){
    console.log(products[index]);
    index += 1;
}

- do / while this will do the requires before checking the condition then check it

while (false) {
    console.log(i);
    i++;
} /// this will never do anything

do{
    console.log(i);
    i++;
} while(false); /// this will add a 1 then stop
*/ 

/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let maxShow = []

for (i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop"){
        break;
    }
    maxShow.push(myAdmins[i]);
} /// will stop the the index if it reaches "Stop" and put all the available index in maxShow


document.write(`<div>We Have ${maxShow.length} Admins</div>`); /// this will show the count of the available index


for (i = 0; i < maxShow.length; i++) {
    document.write(`<hr>`)
    document.write(`<div>`)
    document.write(`The Admin For Team ${i + 1} is ${maxShow[i]}`) /// this will show each available index
    document.write(`<h3>Team Members:</h3>`);
    for (j = 0; j < myEmployees.length; j++){
        if(myEmployees[j][0] ===  maxShow[i][0]) /// if the first letter of the admin match the first letter of the employ go
        document.write(`<p>-${j + 1}  ${myEmployees[j]}</p>`)
    }
    document.write(`</div>`)
}
*/

/*
Function
- it's way to save function and call it when needed
- function name (valueToUse){ /// if you pass more than one value and didn't use the other it would be undefined
    ///block of code
}
- example
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("muneer"); /// Hello muneer

-return is a way to return value and break the execution of the function
function generate(start, end){ /// function to generate numbers
    for (let i = start; i <= end; i++) { /// will take the start as stating point and add 1 till it match end
        console.log(i); /// print the numbers
        if (i === 15){ /// if the i get to 15
            return `Stop`; /// stop the function and don't go forward
        }
}
generate(10, 20); /// 10 11 12 13 14 15

-default function parameter /// you can set default parameters to make sure it's not undefined
function sayHello(name, age = Unknown){ /// we set default value for age and it will be overridden if they put another
    if (age === undefined){
        age = "Unknown";
    }
    age = age || "Unknown";
    console.log(`Hello ${name} your are ${age} years old`);
}
sayHello("muneer", 20); /// Hello muneer your are 20 years old
sayHello("muneer"); /// Hello muneer your are Unknown years old

-Rest parameter /// this lets you add the value an array to store values and it HAS to be the last one
function calc(...numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        result += numbers[i]; /// result = result + number[i]
    }
    return `Final Result is ${result}`;
}
console.log(calc(10,20,30)); /// Final Result is 60

function showInfo (name = "Unknown", age = "Unknown", price = 0, show = "Yes", ...skills){ /// gets info
document.write(`<div>`)
document.write(`<h2>Welcome, ${name}</h2>`)
document.write(`<p>Age: ${age}</p>`)
document.write(`<p>Hours Rate: $${price}</p>`)
if (show === "Yes"){ /// if they want to show the skills
    if (skills.length > 0){ ///if the skills is more than once print one next to each other
        document.write(`<p>Skills: ${skills.join(" | ")}</p>`)
    }else{ /// if no skills print no skills
        document.write(`<p>Skills: No Skills</p>`)
    }
}else{ /// if they don't want to show the skills will print that it is hidden
    document.write(`<p>Skills is hidden</p>`)
}
document.write(`</div>`)
}
showInfo("Muneer", 20, 10, "Yes", "VA", "video editing");
*/
/*
///function challenge wutg Ternart conditional
function showDetails(i,j,k){
    let name = "string"
    let age = "number"
    let job = "unkown"

    typeof i === "string" ?  name = i : typeof i === typeof 10 ?  age = i : typeof  i ===  typeof true  ?  job = i : console.log("error")
    typeof j === "string" ?  name = j : typeof j === typeof 10 ?  age = j : typeof  j === typeof true  ?  job = j : console.log("error")
    typeof k === "string" ?  name = k : typeof k === typeof 10 ?  age = k : typeof k === typeof true  ?  job = k : console.log("error")
    job === true ? console.log(`Hello ${name}, Your Age is ${age}, You Are Available For Hire`) : console.log(`Hello ${name}, Your Age is ${age}, You Not Are Available For Hire`) 

}

showDetails("muneer", true, 20)

- anonymous function is a way to set a function only for one take like clicking a button and we can set a value to use it 
example
let calc = function(num1,num2){
    return num1+num2
}
console.log(calc(10,20)); /// will print 30
OR 
function sayHello(){
    console.log("Hello");
}
document.getElementById("button").onclick = sayHello; /// when click on button will print "Hello"

- setTimeOut is a way to give delay on something 
setTimeout(function() => {
    ///block of code of the function
}, time of the function here);


-nested function 
function sayMessege(firstName, lastName){
    let messege = `Hello`;

    ///Nested function
    function conCatMsg(){
        /// another nested function
        function getFullName(){
            ///will add the  first and last name then return the function
            return `${firstName} ${lastName}`

        }
        /// will return the messege with the getFullName function
        return ${messege} ${getFullName}`;

    }
    /// will return the conCatMsg which say all the above companied
    return conCatMsg();
}

- arrow function is a way to make one line function without having all the function stuff
example
let print = function(num1, num2){
    return num1 + num2;
}
console.log(print(100, 20))/// 120

let print = (num1, num2) => num1 + num2; /// 120 same result


-scope
---Global and Local scope is the way that the define something either global on all the JS file or inside a function
example
let a = 1
function showA(){console.log(a)}
showA(); /// works
console.log(a); /// works

another example
function showA(){let a = 1; console.log(a)}
showA(); /// works
console.log(a); /// doesn't work because the a is inside the function not global value
*/

/* challenge 
let names = function(...name){
    return console.log(`String ${name.map(i => `[` + i).map(i => i + `]`)} => Done !`)
}
console.log(names("osama", "mohammed", "ali"))
same code as ^
let names = (...name) => console.log(`String ${name.map(i => `[` + i).map(i => i + `]`)} => Done !`)

console.log(names("osama", "mohammed", "ali"))

-------------------------------------------------------------------------------

let myNumbers = [20,50,10,60]

let calc = (one, two , ...nums) => one + two + +nums ;
same as above ^
function calc(one, two, ...nums) {
    return one + two + +nums ;
}
console.log(calc(10, myNumbers[1], myNumbers[0])); /// 80
*/


/*
higher order function 
---> function that accepts functions as parameters and/or returns a function.

- map
--- method creates a new array
--- populated with the result of the calling a provided function on every element
--- in the calling array

Syntax map(callBackFunction(Element, index, array){ }, thisArgument)
- element => the current element being processed in the array [forced]
- index => the index of the current element being processed in the array [optional]
- array => the current array [optional]

Notes
- Map return a new array

Examples
- anonymous function
- named function

Map
- Swap Cases
-inverted numbers
- ignore boolean value

let swappingCases = "elZERo"
let invertedNumbers = [1, -10, -20, 15, 100, -30]
let ignoreNumbers = "Elz123er4o"

let sw = swappingCases.split("") /// this will make the string an array
    .map(function (ele) { return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()};).join("");
    ///this will check if the string is uppercase then change it to lower case and join the array

let inv = invertedNumbers.map(function (ele){ return -ele;}); ///this will change any value to negative

let ign = ignoreNumbers.split("").map(function (ele){ return isNaN(parseInt(ele)) ? ele : "" }).join("");
///this will make it an array then check if the element is not a number and is a string will print the element else remove

- Filter
-- method create new array like map
-- get's a true or false value if true pass if false not pass

let friends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Samera"]

let filterFriends = friends.filter(function (el){ return el.startsWith("A")}); /// this will return only names start with A

let numbers = [1,2,3,4,5,6,7,20]

let filternum = numbers.filter(function (num){ return num % 2 === 0}); /// this will only get even numbers

let ign = ignoreNumbers.split("").filter(function (ele){ return isNaN(parseInt(ele))}).join(""); /// same as before

- Reduce
-- method executes a reducer function on each element of the array
-- resulting in an single output value

Syntax
reduce(callBackFunction(Accumulator, current value, current index, source array) { }, initialValue)
- Accumulator => the accumulated value previously returned by the last invocation
- Current value => the current element being processed in the array
- index => the index of the current element being processed in the array
------ start from index - if an initialValue is provided
------ otherWise, it starts from index 1
-Array => the current array

let nums = [10, 20, 15, 30]

let add = nums.reduce(function(acc,current,index,arr){ /// this will sum up the numbers one by one
    console.log(`Acc => ${acc}`);
    console.log(`current element => ${current}`);
    console.log(`current element index => ${index}`);
    console.log(`array => ${arr}`);
    console.log(acc + current);
    console.log("##################")
    return console.log(acc + current);
}, 10) /// this will add a 10 the the start of the array then continue

let theBiggest = ["name1", "name11", "name111", "name1111"]

let check = theBiggest.reduce(function(acc, current){ return acc.length > current.length ? acc : current}); 
///this will return the longest name

we can also change the .join("") with reduce(function (acc, current){ return `${acc}${current}`})


- forEach /// *VERY IMPORTANT
--- method executes a provided function once for each array element

Note
- doesn't return anything [undefined]
- break will not break the loop
- only one used to make events like nav


let allLis = document.querySelectorAll("ul li")

allLis.forEach(function(ele){
    ele.onclick = function(){
        /// this will check all elements if they have active class and remove it
        allLis.forEach(function(ele){
            ele.classList.remove("active")
        })
        /// adds active class to the element been clicked on
        this.classList.add("active");
    }
})

*/

/*
/// higher order functions challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").map(function (ele){ return ele === `_` ? ` ` : ele}).filter(function(ele){ return isNaN(parseInt(ele)) && ele !== "," && ele !== "Z"}).join("").slice(+true);

console.log(solution); ///Elzero Web School
*/



/*
Objects is something that has stuff inside it like document. or console. and we can create our own
example
let Object = {
    ///properties
    theName: "Osama",
    theAge: 38,
    ///Methods
    sayHello: function(){
        return `Hello`;
    },
};
to access we call the object and what we want to access
console.log(Object.theName); /// print "Osama"
console.log(Object.theAge); /// print 38
console.log(Object.sayHello()); /// print "Hello"

we also can access the object with []
example
let myVar = "the Name"
let user = {
    "the Name": "Osama",
}
console.log(user["the Name"]); /// print "Osama"
console.log(user[myVar]); /// same as one above

-create with new keyword
let user ={};
user.age = 38;
console.log(user.age); /// 38

user.sayHello = function(){ return "Hello"; };
console.log(user.sayHello()); /// print "Hello

let user = new Object({
    age: 20,
})
console.log(user.age); /// print "20"


- function "this" keyword
---this inside object method
-----when a function is called as a method of an object
-----its this is set to the object the method is called on
---global objects
---global content
---function content

console.log(this === window); /// true

myVar = 100;
console.log(this.myVar); /// 100

let user = {
    age: 20,
    sayHello = function(){ return this},
};
console.log(user.sayHello()); /// print gives the user object back


- create object with create method
example
let user = {
    age: 20,
    doubleAge: function(){ return user.age *2},
};
console.log(user); /// print the object
console.log(user.age); /// print 20
console.log(user.doubleAge()); /// print "40"

let newObj = Object.create(user) /// this will copy the user object
console.log(newObj); /// print the object user
console.log(newObj.age); /// print 20
console.log(newObj.doubleAge()); /// print "40"

let newObj.age = 50
console.log(newObj); /// print {age: 50}
console.log(newObj.age); /// print 50
console.log(newObj.doubleAge()); /// print "40" because it's multiplies the user object age not the newObj age so we need to edit the function and make it { return this.age *2} to make it multiplies the object that's calling it age


- assign object with assign method
let assign = Object.assign({objProp: 1, objProp2: 2}, user, newObj); /// it's way to mix multiple objects or add new properties
*/




/*
DOM is a way to select and change HTML elements using: /// if there's multiple elements we can use [] to select which one

- find element by ID
let myIdElement = document.getElementById("myId");
console.log(myIdElement);

-find element by Tag Name
let myTagElements = document.getElementsByTagName("p"); /// select all paragraph
console.log(myTagElements[1]);

-find element by Class Name
let myClassElements = document.getElementsByClassName("class-name"); /// select all with that class name
console.log(myClassElements[1]);

-find element by CSS selectors
let myQueryElement = document.querySelector(".class-name"); ///this will select first class with that name
console.log(myQueryElement);

let myQueryAllElement = document.querySelectorAll(".class-name"); /// this will select all the elements with that class
console.log(myQueryAllElement[1]);

--find element by collection
-title
console.log(document.title);

-body
console.log(document.body);

-form
console.log(document.forms[0].name.value);

-links
console.log(document.links[0].href); /// get the link address



DOM [Get / Set element content and attributes]
let myElement = document.querySelector(".test")
-innerHTML /// shows what's inside the HTML tag
myElement.innerHTML = "hi <span>from</span> JS file" /// will show "hi from JS file" on html file

-textContent /// shows what's the text without any HTML stuff
myElement.textContent = "hi <span>from</span> JS file" /// will show "hi <span>from</span> JS file" on html file

-change attributes directly and if there's none then create new one
document.images[0].src = "http:///google.com"
document.images[0].alt = "alternate"
document.images[0].title = "something" /// create title and set the value to something
document.images[0].className = "class-name" ///  set the class to class-name

-change attributes with methods
--getAttribute("attName")
--setAttribute("attName", "newValue")

console.log(myElement.getAttribute("class")); /// will get the class attributes value aka "test"
myElement.setAttribute("class". "update"); /// this will update the class on myElement class

DOM [Check Attributes]
let myP = document.getElementByTagName("p")[0];
-Element.attributes
console.log(myP.attributes); /// shows all element attributes

-Element.hasAttribute
console.log(myP.hasAttribute("attName")); ///return True or False value

-Element.hasAttributes
console.log(myP.hasAttributes()); ///will check if there's any attributes at all and return True or False

-Element.removeAttribute
myP.removeAttribute("attName"); /// remove the selected attribute name



DOM [Create Elements]
-createElement
-createComment
-createTextNode
-createAttribute
-appendChild

let myElement = document.createElement("div");
let myAtt = document.createAttribute("data-custom");
let myText = document.createTextNode("product one")
let myComment = document.createComment("this is comment")

myElement.className = "produect";
myElement.setAttributeNode(myAtt)
myElement.setAttribute("test", "testing")

///Append text to myElement
myElement.appendChild(myText)

///Append comment to myElement
myElement.appendChild(myComment) /// after it append the text aka under text

///Append div to the body
document.body.appendChild(myElement)

console.log(myElement)



/// practice
/// make div that has h3 and p inside 100 times
for (let i = 0; i < 101; i++){
    let myElement = document.createElement("div");
    myElement.innerHTML = "this is div <h3>this is h3</h3><p>this is paragraph</p><br>"
    document.body.appendChild(myElement);
}


DOM [Children]
- children /// get all children elements
- childNodes /// get every single thing (element, text, comment, space)
- firstChild 
- lastChild
- firstElementChild
- lastElementChild


DOM [Events]
- use Events on HTML ///can add event and do what's needed
- use Events on JS
--onclick
--oncontextmenu /// right click
--onmouseenter /// when the mouse hover over it
--onmouseleave /// when the mouse leaves 

--onload
--onscroll 
--onresize

--onfocus
--onblur
--onsubmit

--preventDefault /// this will prevent any default stuff that mate happen like going to link to submit form
example

let myBtn = document.getElementById(`btn`);

myBtn.onclick = function (){ console.log("click")}


DOM [Form practice]

let userName = document.querySelector("[name="username"]")
let userAge = document.querySelector("[name="age"]")

document.form[0].onsubmit = function(e){
    let userName = false;
    let userAge = false;

    if (userName.value !== "" && userName.value.length <= 10){
        let userName = true
    }

    if (userAge.value !== "" ){
        let userName = true
    }

    if (userName === false || userAge === false){
        e.preventDefault();
    }
}

DOM [Events Simulation]
- click
- focus
- blur

let one = document.querySelector(".one")
let two = document.querySelector(".two")

window.onload = function(){
    two.focus();
}///when the window load it focus on the input

one.onblur = function(){
    document.links[0].click();
}/// when exit out input it click on the link index 0


DOM [Class List]
- classList
--- Length
--- contains
--- item(index)
--- add
--- remove
--- toggle

example

let element = document.getElementById("my-div")

console.log(element.classList); /// get the class in array
console.log(element.classList.contains("class-name")); /// true/false
console.log(element.classList.item("3")); /// 4th class

element.onclick = function(){
    element.classList.add("add-one", "add-two")
    element.classList.remove("add-one", "add-two")
    element.classList.toggle("add-one"); /// if it's there remove it if it's not there add it
}


DOM [CSS]
- style
- cssText
- removeProperty(propertyName) [inline, StyleSheet]
- setProperty(propertyName, value, priority)

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.5";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

/// all the above is inline style

document.styleSheets[0].rules[0].style.removeProperty("inline-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "black");
/// this is CSS style change or edit


DOM [Deal with element]
- before [Element || String] ///before the element
- after [Element || String] /// after the element
- append [Element || String] /// start of inside the element
- prepend [Element || String] /// end of inside the element
- remove

let element = document.getElementById("my-div")
let createdP = document.createElement("p")

element.before(createdP) ///"<p></p><div></div>"
element.after(createdP) /// "<div></div><p></p>"
element.append(createdP) /// "<div>text <p></p></div>"
element.prepend(createdP) /// "<div><p></p> text</div"
element.remove() /// "remove the div"


DOM [Traversing]
- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling
- parentElement

example
span.onclick = function (){
    span.parentElement.style.color = "red";
    span.parentElement.remove();
}

DOM [Cloning]
- cloneNode(default false, true) /// clone a element with all attributes and if put true clone what's inside as well

let myP = document.querySelector("p").cloneNode(); /// only copy the paragraph and class and attributes
let myP = document.querySelector("p").cloneNode(true); /// copy everything inside it


DOM [Add Event Listener] ///* VERY IMPORTANT
- addEventListener
- use without on aka onclick onfocus
- Attach multiple events
- error test

span.addEventListener("click", function(){
    console.log("span click")
})
same as
span.onclick = function (){
    console.log("span click")
}

another thing is to select uncreated events
document.addEventListener("click", function(e){ /// e means event
    if(e.target.className === "new element"){
        console.log("i'm new element")
    }
})
*/

///DOM challenge to make lots of products with good design only with JS and no HTML
/*
document.body.innerHTML = `
<div class="nav">
<a>Elzero</a>
<ul>
<li><a>Home</a></li>
<li><a>About</a></li>
<li><a>Service</a></li>
<li><a>Contact</a></li>
</ul>
</div>
<div class="content">
<div class="box"><p>1</p><span>Product</span></div>
<div class="box"><p>2</p><span>Product</span></div>
<div class="box"><p>3</p><span>Product</span></div>
<div class="box"><p>4</p><span>Product</span></div>
<div class="box"><p>5</p><span>Product</span></div>
<div class="box"><p>6</p><span>Product</span></div>
<div class="box"><p>7</p><span>Product</span></div>
<div class="box"><p>8</p><span>Product</span></div>
<div class="box"><p>9</p><span>Product</span></div>
<div class="box"><p>10</p><span>Product</span></div>
<div class="box"><p>11</p><span>Product</span></div>
<div class="box"><p>12</p><span>Product</span></div>
<div class="box"><p>13</p><span>Product</span></div>
<div class="box"><p>14</p><span>Product</span></div>
<div class="box"><p>15</p><span>Product</span></div>
</div>
<div class="footer">CopyRight 2022</div>`;
document.body.style.cssText = "text-align: center; margin: 0; padding: 0; font-family: sans-serif"

document.querySelectorAll("ul")[0].style.cssText = "list-style: none; display:flex; gap: 20px"
document.getElementsByClassName("nav")[0].style.cssText = "background-color: white; display: flex; align-items: center; justify-content: space-between; padding: 25px"
document.querySelectorAll("a")[0].style.cssText = "color: #116f4f; font-size: 30px; font-weight: 900;"
document.querySelectorAll(".content")[0].style.cssText = "background-color: #eee; display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; padding: 20px; height: 78vh"

for (i = 0; i < 15; i++) {
    document.querySelectorAll(".content .box")[i].style.cssText ="background-color: white; height: 200px; display:flex; align-items: center; justify-content: center; flex-direction: column"
    document.querySelectorAll(".content .box p")[i].style.cssText ="font-size: 30px; font-weight: bold"
}
document.querySelectorAll(".footer")[0].style.cssText ="background-color: #116f4f; color: white; height: 68px; display:flex; align-items: center; justify-content: center; font-weight: bold; font-size: 30px"
*/


/*
BOM [Browser Object Model] ///* VERY IMPORTANT

-- window object is the browser window
-- window contain the document object
-- all global variables and objects and function are member of the window object
--- what can we do with window object?
----- open window
----- close window
----- Move window
----- Resize window
----- Print document
----- run code after period of time once or more
----- fully control the URL
----- Save data inside browser to use later


BOM [Popups]
- alert(message) => Need No response only OK available  
- confirm(message) => Need response and return true/false
- prompt(message, Default messege) => collect data

alert("Test") /// Ok
let confirm = confirm("Yes or no ?") /// if yes confirm = true if no confirm = false
let prompt = prompt ("what do you want to say") /// if the person write prompt = "message" if not null


BOM [time]
- setTimeOut (function, timeout, params)
- clearTimeout(identifier)

let sayName = setTimeout(function(name){
    console.log(`hi ${name}`)
}, 3000, "muneer")/// will print "hi muneer" after 3 seconds

btn.onclick = function(){
    clearTimeout(sayName);
} /// will stop the sayName function

BOM[interval] /// *VERY IMPORTANT

- setInterval(Function, Milliseconds, Additional Prams) /// loops on a function till it clearInterval
- clearInterval(Identifier) /// stop Interval

example
function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML === "0"){
        clearInterval(counter)
    }
}

let counter = setInterval(countdown, 1000)


BOM[Location] ///*VERY IMPORTANT
- location object
--- href Get / Set [URL || Hash || File || Mail]
--- host
--- hostname
--- protocol
--- hash
--- reload()
--- replace()
--- assign()

console.log(location.href) /// shows the link
location.href = "https:///google.com" /// set the link

console.log(location.host) /// "https:///something.com/otherthing"
location.host = "another" /// "https:///another/otherthing"

console.log(location.protocol) /// https:

console.log(location.hash) /// get hash of link "#footer"

location.replace("https:///google.com") /// will remove the current site from the history

location.assign("https///google.com") /// keep the history and open the link


BOM [window]
- open (URL [optional], window name or target attr [optional], Window features [optional], history replace [T/F])
- close() /// will only close windows open by open()
- Window features
--- width[num]
--- height[num]
--- left[num]
--- top[num]

window.open("https:///google.com", "_blank", "width=400,height=200")


BOM[history]
- history API
--- properties
------ Length /// shows the length of history you have
--- methods
----- back() /// go back
----- forward() /// go forward
----- go(number) /// will go back if it gets negative number and go forward if it get positive number or reload on 0


BOM [scroll]
- stop()
- print()
- focus() /// focus on a selected window
- scrollTo(x, y || options) /// scroll to a selected point in the window
- scroll(x, y || options) /// same as above but don't support safari
- scrollBy(x, y || options) /// scroll BY a amount given 

window.scrollTo({
    left: 500,
    top: 200,
    behavior: "smooth"
});

- scrollX [Alias => PageXOffset]
- scrollY [Alias => PageYOffset]
example making button to scroll up
window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block"
    } else{
        btn.style.display = "none"
    }
}

btn.onclick = function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: `smooth`
    })
}



BOM [Storage] ///* VERY IMPORTANT
    local storage is object and we can use objects stuff
    - setItem()
    - getItem()
    - RemoveItem()
    - clear()
    - key()

/// Set
window.localStorage.setItem("color", "#F00")
window.localStorage.FontWeight = "bold";
window.localStorage[`fontSize`] = "12px";

/// Get 
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

/// Remove item
window.localStorage.removeItem("color");

/// clear items
window.localStorage.clear();

/// use
document.body.style.backgroundColor = window.localStorage.getItem("color");

/// get key
console.log(window.localStorage.key(0));/// show what's on index 0 of the object
*/

/// Local storage practice

/*
    <style>
        body {
        background-color: #eee;
        }
        ul {
        padding: 0;
        margin: 0;
        background-color: #ddd;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        }
        ul li {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
        }
        ul li.active,
        ul li:hover {
        opacity: 1;
        }
        ul li:first-child {
        background-color: red;
        }
        ul li:nth-child(2) {
        background-color: green;
        }
        ul li:nth-child(3) {
        background-color: blue;
        }
        ul li:nth-child(4) {
        background-color: black;
        }
        .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
        }
    </style>
    </head>
    <body>
    <ul>
        <li class="active" data-color="red"></li>
        <li data-color="green"></li>
        <li data-color="blue"></li>
        <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    </body>

let lis = document.querySelectorAll("ul li")
let div = document.querySelector("div")

if (window.localStorage.getItem("color")){ ///if there's a color in the localStorage set it as background
    /// add color to div
    div.style.backgroundColor = window.localStorage.getItem("color");
        /// remove active class from all lis
        lis.forEach((li) =>{
            li.classList.remove("active")
        });
        document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
    ///    console.log(e.currentTarget.dataset.color) ////* VERY IMPORTANT

    /// remove active class from all lis
    lis.forEach((li) =>{
        li.classList.remove("active")
    });

    /// add active class to current element
    e.currentTarget.classList.add("active")

    /// Add current Color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);

    /// change div backgroundColor
    div.style.backgroundColor = e.currentTarget.dataset.color
    })
})
*/

/*
BOM [Session storage]
- getItem()
- setItem()
- removeItem()
- clear()
- key()
same thing as local storage but it only saves to the session and not the website
    Info
    - new tab = new session
    - Duplicated tab = copy session
    - New tab with same URL = new session
example
input.onblur = function(){
    window.sessionStorage.setItem("input-value", this.value);
}
*/


/*
////* local storage challenge
let input = document.querySelector("input")
let submit = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")

///empty array to store the tasks
let arrayOfTasks = [];

let btn = document.querySelector("button")
btn.onclick = () => {
    tasksDiv.innerHTML = ""
    localStorage.clear()
}

/// check if there's task in local storage
if(localStorage.getItem("tasks")){
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage()

/// Add task
submit.onclick = function(){
    if(input.value !== ""){
        addTaskToArray(input.value); /// add task to array of tasks
        input.value = ""; /// empty input field
    }
}

/// click on task element
tasksDiv.addEventListener("click", (e) => {
    /// delete button
    if (e.target.classList.contains("del")){
        /// remove task from local storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        /// remove element from page
        e.target.parentElement.remove()
    }
    ///task element 
    if (e.target.classList.contains("task")){
        ///toggle completed for the task
        toggleStatusTaskWith(e.target.getAttribute("data-id"))
        ///toggle done class
        e.target.classList.toggle("done")
    }
})

function addTaskToArray(taskText){
    /// task data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    /// push task to array of tasks
    arrayOfTasks.push(task)
    /// add tasks to page
    addElementsToPageFrom(arrayOfTasks)
    /// add task to local storage
    addDataToLocalStorage(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks){
    /// empty task div
    tasksDiv.innerHTML = "";
    /// looping on array of tasks
    arrayOfTasks.forEach((task) => {
        /// make task
        let div = document.createElement("div");
        div.className = "task";
        /// check if task is done
        if (task.completed){
            div.className = "task done"
        }
        div.setAttribute("data-id", task.id);
        div.innerHTML = `${task.title} <span class="del">Delete</span>`
        tasksDiv.appendChild(div);
    })
}

function addDataToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks)); /// convert object to string
}

function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if (data){
        let tasks = JSON.parse(data)
        addElementsToPageFrom(tasks) /// add elements to page from the localStorage
    }
}

function deleteTaskWith(taskId){
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorage(arrayOfTasks)
}

function toggleStatusTaskWith(taskId){
    for (let i = 0; i < arrayOfTasks.length; i++){
        if (arrayOfTasks[i].id == taskId){
            arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false
        }
    }
    addDataToLocalStorage(arrayOfTasks)
}

                HTML
    <style>
        body {
        font-family: Arial, Helvetica, sans-serif;
        }
        .container {
        width: 500px;
        margin: 20px auto;
        }
        .form {
        background-color: #eee;
        border-radius: 6px;
        padding: 20px;
        display: flex;
        align-items: center;
        }
        .input {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        flex: 1;
        }
        .input:focus {
        outline: none;
        }
        .add {
        border: none;
        background-color: #f44336;
        color: white;
        padding: 10px;
        border-radius: 6px;
        margin-left: 10px;
        cursor: pointer;
        }
        .tasks {
        background-color: #eee;
        margin-top: 10px;
        border-radius: 6px;
        padding: 20px;
        }
        .tasks .task {
        background-color: white;
        padding: 10px;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s;
        border: 1px solid #ccc;
        cursor: pointer;
        }
        .tasks .task:not(:last-child) {
        margin-bottom: 15px;
        }
        .tasks .task:hover {
        background-color: #f7f7f7;
        }
        .tasks .task.done:not(span) {
        opacity: 0.5;
        }
        .tasks .task span {
        font-weight: bold;
        font-size: 10px;
        background-color: red;
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        cursor: pointer;
        }
        button{
            margin-top: 10px;
            color: White;
            background-color: red;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <div class="form">
        <input type="text" class="input" />
        <input type="submit" class="add" value="Add Task" />
        </div>
        <button class="clear">Clear all</button>
        <div class="tasks"></div>
    </div>
    </body>
*/


/*
Destructuring
    is JS expression that allow us to extract data from arrays, objects, and maps
    and set them into new distinct variables
    - Destructuring Array
    let myFriends = ["ahmed", "Sayed", "ali", "osama"]
    let [a = "hey", b, , c] = myFriends; /// a default value is hey if there's nothing for a
    console.log(a) /// ahmed
    console.log(b) ///Sayed
    console.log(c) /// osama

    advance
    let myFriends = ["ahmed", "Sayed", "ali", ["shady", "amr", ["mohammed", "Gamal"]]]
    let [, , , [a, , [, b]]] = myFriends
    console.log(a) /// shady
    console.log(b) /// Gamal

    swapping 
    let book = "video"
    let video = "book"

    [book, video] = [video, book]
    console.log(book) /// "book"
    console.log(video) /// "video"

    - Destructuring Object
    let user = {
        theName: "osama",
        theAge: 20,
        theTitle: "dev"
        theCountry: "iraq"
    }
    let {theName, theAge, theCountry} = user;///we don't need to leave empty space for title because everything is declared
    console.log(theName) /// osama
    console.log(theAge) /// 20
    console.log(theCountry) /// iraq
    let {theName: a, theAge: b, theColor: c = "red"} = user; /// we set new value and change the object section with letter
    console.log(a) /// "osama"
    console.log(b) /// "20"
    console.log(c) /// "red" /// because there's no color on user object it use the default value

    Nested objects
    const user = {
        skills: {
            html: 70,
            css: 80
        }
    }
    let {skills {html: a, css: b}} = user;
    console.log(a) /// 70
    console.log(b) /// 80
    OR
    let {html: c, css: d} = user.skills; /// this will go to the nested object and change it
    console.log(c) /// 70
    console.log(d) /// 80

    example
    let user = {
        theName: "muneer",
        theAge: 20,
        skills: {
            html: 70,
            css: 80,
        }
    }
    showDetails(user)
    function showDetails({theName: a, theAge: b, skills: { css: c }} = user){
        console.log(`your name is ${a}) /// your name is muneer
        console.log(`your age is ${b}) /// your age is 20
        console.log(`your css skill progress is ${c}) /// your css skill progress is 80
    }

    practice
    const user = {
        theName: "muneer",
        theAge: 20,
        skills: ["HTML", "CSS", "JAVASCRIPT"],
        addresses: {
            iraq: "baghdad",
            ksa: "riyadh"
        },
    };
    let {theName: n, theAge: a, skills[ , ,three], addresses: {iraq: q}} = user;
    console.log(`Your Name is ${n}) /// Your name is muneer
    console.log(`Your Age is ${a}) /// your age is 20
    console.log(`Your Last skills is ${three}) /// your last skills is JAVASCRIPT
    console.log(`You live in ${q}) /// you live in baghdad
*/

/*
///    Destructuring challenge

    let chosen = 2;
    let myFriends = [
        {title: "osama", age: 39, available: true, skills: ["html", "css"] },
        {title: "ahmed", age: 25, available: false, skills: ["python", "Django"] },
        {title: "kareem", age: 33, available: true, skills: ["Php", "Laravel"] },
    ];

let [{title: q, age: w, available: e, skills: [ , r]},
    {title: a, age: s, available: d, skills: [ , f]},
    {title: z, age: x, available: c, skills: [ , v]}] = myFriends

function des(){
    if(chosen == 1){
        console.log(q)
        console.log(w)
        if(e){
            console.log("available")
        }else{
            console.log("Not Available")
        }
        console.log(r)
    } else if(chosen == 2){
        console.log(a)
        console.log(s)
        if(d){
            console.log("available")
        }else{
            console.log("Not Available")
        }
        console.log(f)
    } else if(chosen == 3){
        console.log(z)
        console.log(x)
        if(c){
            console.log("available")
        }else{
            console.log("Not Available")
        }
        console.log(v)
    }
}

des()
*/


/* DATA TYPES
        -Set data type
    syntax: new Set(Iterable)
    -- object to store unique values
    -- cannot access elements by index

    properties:
    -size

    Methods:
    - add
    - delete
    - clear
    - has

let myData = [1,1,1,2,3,"A"];
let myUniqueData = new Set([1,1,1,2,3,"A"]) /// OR new Set(myData)
myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add("A"); /// same as before
myUniqueData.add(1).add("A"); /// add value

console.log(myData) /// [1,1,1,2,3]
console.log(myUniqueData) /// Set{1, 2, 3}

console.log(myUniqueData.size) /// "3" because it has 3 items

console.log(myData[0]) /// 1
console.log(myUniqueData[0]) /// undefined

console.log(myUniqueData.delete(2)) /// true because the item 2 is in the Set data 
myUniqueData.delete(2)
console.log(myUniqueData.size) /// "2" because it delete one item
console.log(myUniqueData) /// Set{1, 3}

console.log(myUniqueData.has("A")) /// true
console.log(myUniqueData.has("a")) /// false
console.log(myUniqueData.has("a".toLocaleUpperCase())) /// true

myUniqueData.clear()
console.log(myUniqueData.size) /// "0" because clear
console.log(myUniqueData) /// Set{ }


    - Set vs WeakSet
    "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
    "
    --
    Set     => Can Store Any Data Values
    WeakSet => Collection Of Objects Only
    --
    Set     => Have Size Property
    WeakSet => Does Not Have Size Property
    --
    Set     => Have Keys, Values, Entries
    WeakSet => Does Not Have clear, Keys, Values And Entries
    --
    Set     => Can Use forEach
    WeakSet => Cannot Use forEach

    Usage: Store objects and removes them once they become inaccessible


/// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

/// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

/// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

/// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

/// Type Of Data

let myWs = new WeakSet([{ A: 1, B: 2 }]);

console.log(myWs);



- Map data type
Syntax: new Map(iterable with key/value)
-- map vs object

---- Map => Does not contain key by default
---- object => Does contain key by default
--
---- Map => key can be anything [function, object, any primitive data type]
---- Object => string or symbol
--
---- Map => Ordered by insertion
---- Object => not 100% Till now
--
---- Map => Get items by size
---- object => need to do manually
--
---- map => can be directly iterated
---- object => not directly and need to use object.key() and so on
--
---- map => better performance when add or remove data
---- object => low performance when compare to map


let myObject = {}
let myEmptyObject = Object.create(null)
let myMap = new Map();

console.log(myObject); /// has keys
console.log(myEmptyObject) /// does not have default keys by default
console.log(myMap) /// does not have default keys by default

let myNewObject = {
    10: "number",
    "10": "string"
};

console.log(myNewObject[10]); /// will get "string" because the "10" override the 10

let myNewMap = new Map();
myNewMap.set(10, "Number")
myNewMap.set("10", "string")

console.log(myNewMap.get(10)); /// Number
console.log(myNewMap.get("10")); /// string

console.log(myNewMap) /// Map {10 => "number", "10" => "string"}
console.log(myNewObject); ///{10: "string"}

myNewMap.set(true, "Boolean")
myNewMap.set({a: 1, b:2}, "Object")
myNewMap.set(function something(){ }, "function")
console.log(myNewMap)


- Map data type
Methods
--- set
--- get
--- delete
--- clear
--- has

properties
--- size

let myMap = new Map([
    [10, "number"],
    ["Name", "string"],
    [false, "boolean"],
])
same as 
myMap.set(10, "Number")
myMap.set("Name", "string")
myMap.set(false, "boolean")

console.log(myMap.has(false)) /// true because false is in the map

console.log(myMap.size) /// 3

console.log(myMap.delete("Name")) /// return true AKA successfully deleted the key
console.log(myMap.size) /// 2

myMap.clear()
console.log(myMap.size) /// 0


- Map vs WeakMap

WeakMap allows garbage collector to do its task but not map

Map => Key can be anything
weakMap => Key can be object only

let mapUser = { theName: "elzero"}

let myMap = new Map();

myMap.set(mapUser, "object value")

mapUser = null; ///override the reference

console.log(myMap) /// it will still keep the mapUser object because it's stored

//// ##########################

let WeakmapUser = { theName: "elzero"}

let myWeakMap = new WeakMap();

myWeakMap.set(WeakmapUser, "object value")

WeakmapUser = null; ///override the reference

console.log(myMap) /// it will delete it because new value is null



    Array Methods
    - Array.from(Iterable, MapFunc, This)
    --- Variable
    --- string numbers
    --- set
    --- using the map function
    --- arrow function
    --- shorten the method + use arguments


console.log(Array.from("OSAMA")) /// ["O", "S", "A", "M", "A"]

console.log(Array.from("1234", function(n){
    return +n + +n;
})) /// [2, 4, 6, 8]

console.log(Array.from("1234", (n) => +n + +n)) /// [2, 4, 6, 8]

let myArray = [1,1,1,1,2,3,4]

let mySet = new Set(myArray) /// Set {1, 2, 3, 4}
console.log(Array.from(mySet)); /// [ 1, 2, 3, 4]
console.log([...new Set(myArray)]) /// [ 1, 2, 3, 4]

function testArgs(){
    return arguments;
}
console.log(testArgs("osama", "ahmed", "sayed")) /// Arguments (3)

function af(){
    return Array.from(arguments);
}
console.log(af("osama", "ahmed", "sayed")) /// ["Osama", "ahmed", "sayed"]


    Array Methods
    - Array.copyWithin(target, start [optional], end [optional])
    "Copy Part of an array to Another location in the same array"
    -- any negative value will count from the end
    -- target
    ---- Index to copy part to
    ---- If At Or Greater than array length nothing will be copied
    -- start
    ---- index to copy part to
    ---- If Omitted = start from index 0
    -- end
    ---- index to end copy from
    ---- not including end
    ---- if omitted = reach the end

let myArray = [10, 20, 30, 40, 50, "A", "B"]

myArray.copyWithin(3); /// [10, 20, 30, 10, 20, 30, 40] put it in index 3 and copy from start to en

myArray.copyWithin(4, 6); /// [10, 20, 30, 40, 'B', 'A', 'B'] put it in index 4 and start from index 

myArray.copyWithin(4, -1); /// [10, 20, 30, 40, 'B', 'A', 'B'] put it in index 4 and start from index -1 aka `B

myArray.copyWithin(1, -2); /// [10, 'A', 'B', 40, 50, 'A', 'B'] put in index 1 and start from index -2 AKA `A` till en

myArray.copyWithin(1, -2, -1); /// [10, 20, 30, 10, 20, 30, 40] put in index 1 and start from index -2 AKA `A` only

console.log(myArray)


    Array Methods
    Loops through array till it finds the required and return True and stop the loop
    - Array.some(CallbackFunc(Element, index, array), this argument)
    --- CallBackFunc => function to run on every element on the given array
    ----- Element => the current element to process
    ----- index => index of the current element
    ----- Array => the current array working with
    -- This argument => value to use as this when executing CallbackFunc

    using
    - check if element exists in array
    - Check if number in range


let nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9 ,10]

let check = nums.some(function (e) { /// e is for each element
    return e > 5;
})

let checkShort = nums.some((e) => e > 5)
console.log(checkShort); /// true will stop at 6 and return true and stop the loop and not go to 7 and more

let myNumber = 5;

let checkThis = nums.some(function (e) { /// e is for each element
    return e > this;
}, myNumber)/// myNumber will be the (this) argument
console.log(checkThis)/// true

function checkValues(arr, val){
    return arr.some(function (e){ /// e is for each element
        return e === val;
    })
}
console.log(checkValues(nums, 20)) /// false there's no 20 in the array
console.log(checkValues(nums, 5)) /// true there's 5 in the array

let checkObj = {
    min: 10,
    max: 20
}

let checkNumberInRange = nums.some(function (e){ /// e is for each element
    return e >= this.min && e <= this.max
}, checkObj)
console.log(checkNumberInRange) /// true because there's a 10 in the array


    Array Methods
    - Array.every(CallBackFunc(Element, index, Array), This argument)
        This is just like Array.some but every element has to be true to return true
    --- callBackFunc => function to run on every element on the given array
    ----- Element => the current element to process
    ----- Index => the index of the current element
    ----- Array => the current array working with
    --- This argument => Value to use as this when executing CallBackFunc

const Locations = {
    20: "place1",
    30: "place2",
    10: "place3",
    40: "place4"
};

let mainLocation = 15;

let locationArray = Object.keys(Locations) /// get the object keys

console.log(locationArray)/// ["10", "20", "30", "40"]

let locationArrayNumber = locationArray.map((n) => +n)

console.log(locationArrayNumber)/// [10, 20, 30, 40]

let check = locationArrayNumber.every(function (e){
    return e > this;
}, mainLocation)

console.log(check) /// false because 10 is < than 15 and all elements has to be true to return true to get true


    Spread operator => ...Iterable
    Allow Iterable to expand in place

    -- spread with string
console.log("Osama") /// Osama
console.log(..."Osama") /// O s a m a
console.log([..."Osama"]) /// ["O", "s", "a", "m", "a"]

    -- Concatenate arrays
let myArray1 = [1, 2, 3]
let myArray2 = [4, 5, 6]

let allArrays = [...myArray1, ...myArray2]
console.log(allArrays) ///[1, 2, 3, 4, 5, 6]

    -- copy array
let copiedArray = [...myArray1]
console.log(copiedArray) ///[1, 2, 3]

    -- Push inside array
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Samey", "Mohammed"]

allFriends.push(...thisYearFriends) /// if we don't use the spread operator it's gonna add it as new array

console.log(allFriends)

    -- Use with math object
let myNums = [10, 20, -100, 1000, 500]
console.log(Math.max(myNums)) /// NaN
console.log(Math.max(...myNums)) /// 1000

    -- Spread with object => Merge objects
let objOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 3,
    d: 4,
}
console.log({...objOne, ...objTwo, e:5}) /// {a: 1, b: 2, c: 3, d: 4, e: 5}
*/

/*
//// Map and Set challenge
let n1 = [10, 30, 10, 20]
let n2 = [30, 20 ,10]

console.log([...n1, ...n2].length * Math.max(...n1)) /// 210
*/







/*
Regular Expression
"Is the way to verify something in selected order"
- Email
- Phone
- Url
- Address

    Syntax
    /pattern/modifier(s);
    new RegExp("pattern", "modifier(s"))

    Modifiers => Flags
    i => case-insensitive
    g => global
    m => Multiline

    Search Methods
    - math(Pattern)

    match 
    -- Matches A string Against a regular Expression pattern
    -- returns an array with the matches
    -- return null if no match is found


    let myString = `Hello Elzero Web School I Love elzero`
    
    let regex = /elzero/;
    
    console.log(myString.match(regex)) /// ['elzero', index: 31, input: 'Hello Elzero Web School I Love elzero']
    console.log(myString.match(/elzero/)) /// ['elzero', index: 31, input: 'Hello Elzero Web School I Love elzero`]
    console.log(myString.match(/elzero/i)) /// ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero']
    console.log(myString.match(/elzero/ig)) /// ['Elzero', 'elzero']
    console.log(myString.match(/elzerosawd/ig)) ///null



    Ranges

    -part 1
    (X|Y) => X Or Y
    [0-9] => 0 To 9
    [^0-9] => Any Character Not 0 To 9

    -part 2
    [a-z] => a To z
    [^a-z] => Any Character Not a To z
    [A-Z] => a To z
    [^A-Z] => Any Character Not a To z
    [abc]
    [^abc]

    let tld = `Com Net Org Info Code Io`
    let tldR = /(org|info|io)/i
    console.log(tld.match(tldR)) /// ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io']
    tldR = /(org|info|io)/ig
    console.log(tld.match(tldR)) /// ['Org', 'Info', 'Io']

    let nums = `1234567890`
    let numsRe = /[0-9]/g
    console.log(nums.match(numsRe)) /// ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    numsRe = /[0-2]/g
    console.log(nums.match(numsRe)) /// ['1', '2', `0`]
    
    let Notnums = `1234567890`
    NotnumsRe = /[^0-2]/g
    console.log(Notnums.match(NotnumsRe)) /// ['3', '4', '5', '6', '7', '8', '9']
    
    let specialNums = `1!2@3%4%5^67890`
    specialNumsRe = /[^0-9]/g
    console.log(specialNums.match(specialNumsRe)) /// ['!', '@', '%', '%', '^']
    
    let practice = `Os1 OS10s os2 Os8 Os8os`
    let practiceRe = /OS[5-9]os/ig
    console.log(practice.match(practiceRe))
    
    let myString = `AabBcdefG123!234%^`
    let atozSmall = /[a-z]/g
    console.log(myString.match(atozSmall)) /// ['a', 'b', 'c', 'd', 'e', 'f']
    let NotatozSmall = /[^a-z]/g
    console.log(myString.match(NotatozSmall)) /// ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    let AToZCap = /[A-Z]/g
    console.log(myString.match(AToZCap))/// ['A', 'B', 'G']
    let NotAToZCap = /[^A-Z]/g
    console.log(myString.match(NotAToZCap))/// ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^']
    let aAndcAnde = /[ace]/g;
    console.log(myString.match(aAndcAnde)) ///['a', 'c', 'e']
    let NotaAndcAnde = /[^ace]/g;
    console.log(myString.match(NotaAndcAnde)) ///['A', 'b', 'B', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^']
    let allLetters = /[a-zA-Z]/g
    console.log(myString.match(allLetters)) ///  ['A', 'a', 'b', 'B', 'c', 'd', 'e', 'f', 'G']
    let NumsAndSpecial = /[^a-zA-Z]/g
    console.log(myString.match(NumsAndSpecial)) ///  ['1', '2', '3', '!', '2', '3', '4', '%', '^']
    let onlySpiecal = /[^a-zA-Z0-9]/g
    console.log(myString.match(onlySpiecal)) ///  ['!', '%', '^']



    Character classes
    . => matches any character, except newline or other line terminators
    \w => matches word characters. [a-z, A-Z, 0-9 and underscore]
    \W => matches non word characters
    \d =>matches digits from 0 to 9
    \D => matches non-digit characters
    \s => matches whitespace character
    \S => matches non whitespace character


    let email = `O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com`
    let dot = /./g
    console.log(email.match(dot)) /// everything expect new line
    let word = /\w/g
    console.log(email.match(word)) /// ['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']
    let noWord = /\W/g
    console.log(email.match(noWord))///['@', '@', '@', '.', '.', '.', ' ', '@', '.', ' ', '@', '.', ' ', '@', '.', ' ', '-', '.', ' ', '@', '.', ' ', '@', '.']
    let valid = /\w@\w.(com|net)/g
    console.log(email.match(valid)) /// ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']


    character classes
    \b => matches at the beginning or end of a word
    \B => matches Not at the beginning/end of a word

    let names ="Sayed 1span 2spam 3spam spam4 spam5 osama ahmed"
    let re = /(\bspam|spam\b)/ig
    console.log(names.match(re))

    Test Methods
    pattern.text(input)
    console.log(re.test(names))/// true



    Quantifiers
    n+    => One Or More
    n*    => zero or more
    n?    => zero or one


    let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; /// All Emails
    /// let mailsRe = /\w+@\w+.(com|net)/ig;
    let mailsRe = /\w+@\w+.\w+/ig;
    console.log(mails.match(mailsRe)); ///['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']
    
    let nums = "0110 10 150 05120 0560 350 00"; /// 0 Numbers Or No 0
    let numsRe = /0\d*0/ig;
    console.log(nums.match(numsRe)); /// ['0110', '05120', '0560', '00']
    
    let urls = "https:///google.com http:///www.website.net web.com"; /// http + https
    let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
    console.log(urls.match(urlsRe)); /// ['https:///google.com', 'http:///www.website.net', 'web.com']


    Regular Expression

    Quantifiers
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x

    
    let serials = "S100S S3000S S50000S S950000S";
    
    console.log(serials.match(/s\d{3}s/ig)); /// S[Three Number]S
    console.log(serials.match(/s\d{4,5}s/ig)); /// S[Four Or Five Number]S
    console.log(serials.match(/s\d{4,}s/ig)); /// S[At Least Four]S


    Quantifiers
    $ => End with something
    ^ => start with something
    ?= => followed by something
    ?! => not followed by something

    let myString = "We Love Programming"
    let names = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ"
    
    console.log(/ing$/ig.test(myString)) /// true
    console.log(/^we/ig.test(myString)) /// true
    console.log(/lz$/g.test(names)) /// false case sensitive
    console.log(/lz$/ig.test(names)) /// true 
    console.log(/^2/ig.test(names)) /// false
    console.log(/^\w/ig.test(names)) /// true
    console.log(/^\w/ig.test(names)) /// true
    console.log(/^\s/ig.test(names)) /// false
    
    console.log(names.match(/\d\w{5}(?=Z)/ig)) ///['10sama', '2Ahmed', '5Gamal']
    console.log(names.match(/\d\w{8}(?!Z)/ig))/// ['3Mohammed']


    
    - replace
    - replaceAll


    let txt = "We Love Programming And @ because @ Is Amazing"
    
    console.log(txt.replace("@", "Javascript"))///We Love Programming And Javascript because @ Is Amazing
    console.log(txt.replaceAll("@", "Javascript"))///We Love Programming And Javascript because Javascript Is Amazing
    
    let re = /@/ig
    console.log(txt.replaceAll(re, "Javascript"))///We Love Programming And Javascript because Javascript Is Amazing
    console.log(txt.replaceAll(/@/ig, "Javascript"))///We Love Programming And Javascript because Javascript Is Amazing


    - Input Form Validation practice

    let text = document.querySelector("input")
    let submit = document.querySelectorAll("input")[1]
    submit.onsubmit = function(){
        let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig /// (1234) 567-8910
        let validRes = phoneRe.test(text.value)
        if (validRes === false){
            return false
        }
        
    }

*/






/*
OOP <---

Constructor Function
creating object with function

function User(id, name, salary){
    this.i = id
    this.n = name
    this.s = salary
}

///OR
class User {
    constructor(id, name, salary) {
        this.i = id;
        this.n = name || "unkown";
        this.s = salary < 6000 ? salary + 500 : salary;
        User.count++ /// count the amount of objects created
        this.msg = function(){
            return `Hello ${this.u} Your Salary is ${this.s}`
        }
    }
    /// Methods
    writeMsg(){
        return `Hello ${this.u} Your Salary is ${this.s}`
    }
    /// Update properties
    updateName(newName){
        this.n = newName
    }
    /// Static Properties And methods only gonna access the static properties when called the main function
    static count = 0;
    /// Static methods 
    static countMembers(){
        return `${this.count} Members Created`
    }
}
let userOne = new User(100, "osama", 6000)
console.log(userOne)
console.log(userOne instanceof User) /// is userOne a child from function User /// true
console.log(userOne.constructor === User) /// is userOne a child from function User /// true

console.log(userOne.msg()) /// Hello undefined Your Salary is 6000
console.log(userOne.msg) /// ƒ (){return `Hello ${this.u} Your Salary is ${this.s}`}
console.log(userOne.writeMsg()) /// Hello undefined Your Salary is 6000
console.log(userOne.writeMsg) /// ƒ writeMsg(){return `Hello ${this.u} Your Salary is ${this.s}`}

console.log(userOne.n)/// Osama
userOne.updateName("Ahmed")
console.log(userOne.n) /// Ahmed

console.log(userOne.count)/// undefined
console.log(User.count) /// 0

console.log(User.countMembers())



--- Inheritance

///Parent class
class User{
    constructor(id, username){
        this.i = id
        this.u = username
    }
    sayHello(){
        return `Hello ${this.u}`
    }
}

/// inherited from User
class Admin extends User{
    constructor(id, username, permissions){
        super(id, username) /// super is the stuff you want to inherite 
        this.p = permissions
    }
}


/// inherited from Admin and User
class superMan extends Admin{
    constructor(id, username, permissions, abilities){
        super(id, username,permissions)
        this.a = abilities
}
}

let admin = new Admin(100, "Osama", 1)
console.log(admin.sayHello()) /// Hello Osama
let SuperMan = new superMan(102, "Ahmed", 2, "strong")
console.log(SuperMan.a) /// strong




--- Encapsulation
- Class Fields are public by default
- Guards the data against illegal access
- Helps to achieve the target without revealing its complex deftails
- will Reduce human errors
- Make the app more flexible and manageable
- Simplify the app


class User{
    /// private property
    #e;
    constructor(id, username, eSalary){
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary(){
        return (parseInt(this.#e))
    }
}

let userOne = new User(100, "osama", "5000 iqd");

console.log(userOne.u) /// osama
console.log(userOne.#e) /// can't access because it's private

console.log(userOne.getSalary()) /// the private property can be used in the class

////inherite private class

class inherite extends User{
    constructor(id, username, eSalary){
        super(id, username, eSalary)
    }
}
let child = new inherite(101, "osama", "5000 something");
console.log(child.getSalary())





- prototype
        prototype are the mechanism by which JavaScript objects inherite features one another


        class user {
            constructors(id, username){
                this.i = id;
                this.u = username;
            }
            sayHello(){
                return `Hello ${this.u}`
            }
        }
        let userOne = new user(100, "osama")
        console.log(user.prototype)
        
        user.prototype.sayWelcome = function(){ /// add prototype to the class
            return `Welcome ${this.u}`
        }
        
        Object.prototype.love = "Elzero Web School" /// add love prototype to all objects



--- Object Meta data and description 
    - writable /// change value
    - emumerable /// stop it from any loops without deleteing it
    - configurable [cannot delete or reconfigure]


    const myObject = {
        a: 1,
        b: 2,
    };
    Object.defineProperty(myObject, "c", {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 3
    })
    
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    myObject.c = 100
    console.log(myObject) /// {a: 1, b: 2, c: 100}
    
    Object.defineProperty(myObject, "c", {
        writable: false, //// not able to change value
        enumerable: true,
        configurable: true,
        value: 3
    })
    
    myObject.c = 100 /// writable is false so it won't change
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    ////////////////////////////////////////////////////////////////////////////////////
    for (let prop in myObject){
        console.log(prop, myObject[prop]) /// a 1, b 2, c 3
    }
    
    console.log("#".repeat(20))
    
    Object.defineProperty(myObject, "c", {
        writable: false, //// not able to change value
        enumerable: false, /// not going in any loops
        configurable: true,
        value: 3
    })
    
    for (let prop in myObject){
        console.log(prop, myObject[prop]) /// a 1, b 2
    }
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    ////////////////////////////////////////////////////////////////////////////////////
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    console.log(delete myObject.c) /// true because it deleted successfully
    console.log(myObject) /// {a: 1, b: 2}
    
    Object.defineProperty(myObject, "c", {
        writable: true, //// not able to change value
        enumerable: true, /// not going in any loops
        configurable: false, /// not letting it  deleted Or redefine it
        value: 3,
    })
    
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    console.log(delete myObject.c) /// false because it deleted successfully
    console.log(myObject) /// {a: 1, b: 2, c: 3}
    
    Object.defineProperty(myObject, "c", {
        writable: false, 
        enumerable: false, 
        configurable: false, 
        value: 3,
    }) /// Error redefine wrtiable and emumerable






--- Define multiple properties
--- check descriptors


const myObject = {
    a: 1,
    b: 2,
}

Object.defineProperties(myObject, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    }
})

console.log(myObject) /// {a: 1, b: 2, c: 3, d: 4, e: 5}

console.log(Object.getOwnPropertyDescriptor(myObject, "d")) /// {value: 4, writable: false, enumerable: false, configurable: true}
console.log(Object.getOwnPropertyDescriptors(myObject)) ///
a: {value: 1, writable: true, enumerable: true, configurable: true} /// all true because its in object
b: {value: 2, writable: true, enumerable: true, configurable: true} /// all true because its in object
c: {value: 3, writable: false, enumerable: false, configurable: true} /// only configurable: true because we define it
d: {value: 4, writable: false, enumerable: false, configurable: true} /// only configurable: true because we define it
e: {value: 5, writable: false, enumerable: false, configurable: true} /// only configurable: true because we define it
*/



console.log("wtf")



/*
Date And Time
    - Date Constructor

    Static Methods
    - Date.now()

    - To track time you need starting point
    - Epoch time or unix time in computer science is the number of milliseconds since January 1, 1970
    - why 1970 [829 Days to 136 Years]


    let dateNow = new Date()
    
    console.log(dateNow) /// Mon Nov 07 2022 22:47:44 GMT-0500 (Eastern Standard Time)
    
    console.log(Date.now()) /// 1667879289723 Milliseconds
    
    let seconds = Date.now() / 1000 /// Number of Seconds
    console.log(seconds) /// 1667879340.969
    
    let minutes = seconds / 60 /// Number of minutes
    console.log(minutes) /// 27797991.3079
    
    let hours = minutes / 60 /// Number of hours
    console.log(hours) /// 463299.8536325
    
    let days = hours / 24 /// Number of Seconds
    console.log(days) /// 19304.16050712963
    
    let years = days / 365 /// Number of Seconds
    console.log(years) /// 52.88811059972729





    Data and Time
    - getTime() => number of milliseconds
    - getDate() => days of the month
    - getFullYear()
    - getMonth() => zero based
    - getDay() => day of the week
    - getHours()
    - getMinutes()
    - getSeconds()

    
    let dateNow = new Date();
    let birthDay = new Date("oct 25, 82")
    let dateDiff = dateNow - birthDay
    
    console.log(dateDiff)/// 1263513627746 milliseconds
    console.log(dateDiff / 1000 / 60 / 60 / 24 / 365)/// 40 years
    
    console.log(dateNow) /// Mon Nov 07 2022 23:01:50 GMT-0500 (Eastern Standard Time)
    console.log(dateNow.getTime()) /// 1667880133118 milliseconds
    console.log(dateNow.getDate()) /// 7th of the month
    console.log(dateNow.getFullYear()) /// 2022
    console.log(dateNow.getMonth()) /// 10th (starts from index 0 so this month is the 11th)
    console.log(dateNow.getDay()) /// 1 (starts from index 0 so today is monday)
    console.log(dateNow.getHours()) /// 23 
    console.log(dateNow.getMinutes()) /// 1
    console.log(dateNow.getSeconds()) /// 50 




    Set Date and time
    - setTime(Milliseconds)
    - setDate() => day of the month [negative and positive]
    - setFullYear(year, Month => optinal [0-11], day => optinal [1-31])
    - setMonth(month [0-11], day => optinal [1-31] [negative and positive])
    - setHours (hours [0-23], minutes => optinal [0-59], seconds => optinal [0-59], MS => optinal [0-999])
    - setMinutes(Minutes [0-59], seconds => optinal [0-59], MS => optinal [0-999])
    - setSeconds(seconds => [0-59], MS => [0-999])
    
    example
    let dateNow = new Date
    console.log(dateNow) /// Wed Nov 09 2022 11:47:13 GMT-0500 (Eastern Standard Time)
    
    console.log("#".repeat(30))
    
    dateNow.setTime(0) /// set the time in milliseconds
    console.log(dateNow) /// Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time) start of Echo time
    
    console.log("#".repeat(30))
    
    dateNow.setTime(10000) /// 10seconds after Unix time
    console.log(dateNow) /// Wed Dec 31 1969 19:00:10 GMT-0500 (Eastern Standard Time) 10 sec start of Echo time
    
    console.log("#".repeat(30))
    
    dateNow.setDate(1) /// set the day of the month and anthing below 1 will go back the past month
    //// also when adding more than the month days it goes to the next month like 35 will be 4th of next month
    console.log(dateNow) /// Mon Dec 01 1969 19:00:10 GMT-0500 (Eastern Standard Time)
    
    console.log("#".repeat(30))
    
    dateNow.setFullYear(2020, 0, 1) /// set the year (2020, jan, 1th)
    console.log(dateNow) /// Tue Dec 01 2020 19:00:10 GMT-0500 (Eastern Standard Time)


    Date and Time

    new Date(timestamp)
    new Date(Date string)
    new Date(Numeric value)

    Format
    - "Oct 25 1982"
    - "10/25/1982"
    - "1982-10-25" => ISO international standard
    - "1982 10"
    - "1982"
    - "82"
    - 1982, 9, 25, 2, 10, 0 ///year, month[0-11], day, hour, minutes, seconds
    - 1982, 9, 25
    - "1982-10-25T06:10:00Z"

    Date.parse("Date") /// Read date from string and gets the milliseconds value
    

    console.log(Date.parse("Nov 15 2022")) /// 1668488400000
    
    let date1 = new Date(0)
    console.log(date1) /// Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
    
    let date2 = new Date(1668488400000)
    console.log(date2) /// Tue Nov 15 2022 00:00:00 GMT-0500 (Eastern Standard Time)
    
    let date3 = new Date("2022 11 15") /// "2022/11/15" "2022 11 15" "2022-11-15" "2022@11@15"
    console.log(date3) /// Tue Nov 15 2022 00:00:00 GMT-0500 (Eastern Standard Time)
    
    let date4 = new Date(2022, 10, 15)
    console.log(date4) /// Tue Nov 15 2022 00:00:00 GMT-0500 (Eastern Standard Time)




    Date and Time
    - Track operator Time

    Search
    - performance.now()
    - performance.mark()
    
    ////start time
    let start = new Date();
    
    ////operation
    for(i = 0; i < 1000; i++){
        document.write(`<div>${i}</div>`)
    } /// put 1000 divs with numbers inside to make it lag 
    
    ////Time End
    let end = new Date(); /// get the time after the divs are done 
    
    ////Operation Duration
    let duration = end - start /// start time - end time after the divs are created
    
    console.log(duration)

    OR

    for(i = 0; i < 1000; i++){
        document.write(`<div>${i}</div>`)
    }
    let p = performance.now()
    console.log(p)



    Generators
    - Generator Function Run Its Code When Required
    - Generator Function Return special object [Generator object]
    - Generator are Iterable
    
    function* generateNumbers(){
        yield 1;
        console.log("after yield 1")
        yield 2;
        yield 3;
        yield 4;
    }
    
    let gen = generateNumbers()
    
    console.log(typeof gen) /// object
    console.log(gen) /// generateNumbers {<suspended>}
    
    console.log(gen.next()) /// {value: 1, done: false}
                            /// "after yield 1" any code between yields won't run till it gets to the next yield
    console.log(gen.next()) /// {value: 2, done: false}
    console.log(gen.next()) /// {value: 3, done: false}
    console.log(gen.next()) /// {value: 4, done: false}
    console.log(gen.next()) /// {value: undefined, done: true}
    
    console.log(gen) /// generateNumbers {<closed>}
    
    for(let value of generateNumbers()){
        console.log(value)
    }
    ^^^
    1
    after yield 1
    2
    3
    4

    for(let value of gen){
        console.log(value)
    } /// will not show anything because the generator is done



    Generator
    - Delegate Generator


    function* generateNums(){
        yield 1;
        yield 2;
        yield 3;
    }
    
    function* generateLetters(){
        yield `A`;
        yield `B`;
        yield `C`;
    }
    
    function* generateAll(){
        yield* generateNums();
        yield* generateLetters();
        yield [4,5,6]; /// if we don't add the * next to the yield it's gonna print all the items at once
        yield* [7,8,9];///  it's gonna print array one by one
    }
    
    let gen = generateAll()
    
    console.log(gen.next()); /// {value: 1, done: false}
    console.log(gen.next()); /// {value: 2, done: false}
    console.log(gen.next()); /// {value: 3, done: false}
    console.log(gen.next()); /// {value: 'A', done: false}
    console.log(gen.next()); /// {value: 'B', done: false}
    console.log(gen.next()); /// {value: 'C', done: false}
    console.log(gen.next()); /// {value: Array(3), done: false}
    console.log(gen.next()); /// {value: 7, done: false}
    console.log(gen.return("hi")); /// {value: 'hi', done: true} stops the function and returns done as true
    console.log(gen.next()); /// {value: undefined, done: true}
    console.log(gen.next()); /// {value: undefined, done: true}



    Generator
    - Generate infinite numbers
    - Use to return inside generators
    

    function* generateNumber(){
        yield 1;
        yield 2;
        return "Z";
        yield 3;
        yield 4;
    }
    
    let gen = generateNumber()
    
    console.log(gen.next()) /// {value: 1, done: false}
    console.log(gen.next()) /// {value: 2, done: false}
    console.log(gen.next()) /// {value: 'Z', done: true}
    console.log(gen.next()) /// {value: undefined, done: true}
    
    function* generateUlimitedNumber(){
        let index = 0;
    
        while (true){
            yield index++;
        }
    }
    
    let genU = generateUlimitedNumber(); /// unlimited yields
    
    console.log(genU.next()) /// {value: 0, done: false}
    console.log(genU.next()) /// {value: 1, done: false}
    console.log(genU.next()) /// {value: 2, done: false}
    console.log(genU.next()) /// {value: 3, done: false}



    Modules
        - Import And export
    

    //// EXPORT
    export let a = 10;
    export let arr = [1,2,3,4,5];
    
    export function something(){
        return `something`
    }
    export default somethingelse(){
        return `another thing`
    }
    //// OR
    export{a as number, arr, something}
    

    ////IMPORT
    import default, {number, arr, something as func} from "./JS.js"
    
    console.log(number) /// 10
    console.log(arr) /// [1,2,3,4,5]
    console.log(func()) /// something
    console.log(default()) /// another thing

    import * as all from "./JS.js"
    console.log(all) /// Module
    console.log(all.number) /// 10
    console.log(all.arr) /// [1,2,3,4,5]
*/




/*
    What Is JSON ?
    - JavaScript Object Notation
    - Format For Sharing Data Between Server And Client
    - JSON Derived From JavaScript
    - Alternative To XML
    - File Extension Is .json

    Why JSON ?
    - Easy To Use And Read
    - Used By Most Programming Languages And Its Frameworks
    - You Can Convert JSON Object To JS Object And Vice Versa

    JSON vs XML
    ===================================================
    = Text Based Format      = Markup Language        =
    = Lightweight            = Heavier                =
    = Does Not Use Tags      = Using Tags             =
    = Shorter                = Not Short              =
    = Can Use Arrays         = Cannot Use Arrays      =
    = Not Support Comments   = Support Comments       =
    ===================================================


        JSON Syntax
    - Data Added Inside Curly Braces {  }
    - Data Added With Key : Value
    - Key Should Be String Wrapped In Double Quotes
    - Data Separated By Comma
    - Square Brackets [] For Arrays
    - Curly Braces {} For Objects

    Available Data Types
    - String
    - Number
    - Object
    - Array
    - Boolean Values
    - null
Example
{
    "string": "Elzero",
    "number": 100,
    "object": { "EG": "Giza", "KSA": "Riyadh" },
    "array": ["HTML", "CSS", "JS"],
    "boolean": true,
    "null": null
}




    JSON
    - JSON.parse => convert text data to JS object
    - JSON.stringify => convert JS object to JSON
    
    
    myJsonObjectFromServer = `{"UserName": "Osama", "Age": 39}`
    
    console.log(typeof myJsonObjectFromServer) /// string
    console.log(myJsonObjectFromServer)        /// {"UserName": "Osama", "Age": 39} string
    
    myJsObject = JSON.parse(myJsonObjectFromServer)
    
    console.log(typeof myJsObject) /// object
    console.log(myJsObject)        /// {UserName: 'Osama', Age: 39} object
    
    myJsObject["UserName"] = "Elzero"
    myJsObject["Age"] = 40
    
    myJsonObjectToServer = JSON.stringify(myJsObject)
    
    console.log(typeof myJsonObjectToServer) /// String
    console.log(myJsonObjectToServer)        /// {"UserName":"Elzero","Age":40} string




    To Understand Ajax, Fetch, Promises

    Asynchronous VS Synchronous programming
    - Meaning the order of code gonna run in Sequence or Parallel to other lines of code

    Synchronous
    - Operations Runs in Sequence
    - Each Operation Must Wait for the previous one to complete

    Aynchronous
    - Operations Runs in Parallel
    - This means that an operation can occur while another one is still being processed
    

    //// Synchronous
    
    console.log("1");
    console.log("2");
    window.alert("Operation");
    console.log("3");

    //// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");




    To Understand Ajax, Fetch, Promises

    Call Stack || Stack Trace
    -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
    -- Mechanism To Make The Interpreter Track Your Calls
    -- When Function Called It Added To The Stack
    -- When Function Executed It Removed From The Stack
    -- After Function Is Finished Executing The Interpreter Continue From The Last Point
    -- Work Using LIFO Principle => Last In First Out
    -- Code Execution Is Synchronous.
    -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

Web API
-- Methods Available From The Environment => Browser


setTimeout(() => {
    console.log("Web API");
}, 0);

function one() {
    console.log("One");
}
function two() {
    one();
    console.log("Two");
}
function three() {
    two();
    console.log("Three");
}

three();


=================================
console.log("One");
=================================
function one() {
    console.log("One");
}
=================================
function two() {
    one();
    console.log("Two");
}
=================================
function three() {
    two();
    console.log("Three");
}
=================================


console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");




To Understand Ajax, Fetch, Promises

        Event Loop + Callback Queue

    - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
    - Call Stack Track All Calls
    - Every Function Is Done Its Poped Out
    - When You Call Asynchronous Function It Sent To Browser API
    - Asynchronous Function Like Settimeout Start Its Own Thread
    - Browser API Act As A Second Thread
    - API Finish Waiting And Send Back The Function For Processing
    - Browser API Add The Callback To Callback Queue
    - Event Loop Wait For Call Stack To Be Empty
    - Event Loop Get Callback From Callback Queue And Add It To Call Stack
    - Callback Queue Follow FIFO "First In First Out" Rule


console.log("One");
setTimeout(() => {
    console.log("Three");
}, 0);
setTimeout(() => {
    console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
    console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;




        AJAX
    - Asynchronous JavaScript And XML
    - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
    - It Use "XMLHttpRequest" Object To Interact With The Server
    - You Can Fetch Data Or Send Data Without Page Refresh
    - Examples
    --- Youtube Studio
    --- Google Drive
    --- Upload Article Photo
    --- Form Check Name

    Test new XMLHttpRequest();
    Request And Response
    Status Code

    let req = new XMLHttpRequest();
    console.log(req);





        Ajax
    - Ready State => Status Of The Request
    [0] Request Not Initialized
    [1] Server Connection Established
    [2] Request Received
    [3] Processing Request
    [4] Request Is Finished And Response Is Ready
    - Status
    [200] Response Is Successful
    [404] Not Found

    example


    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https:///api.github.com/users/MuneerDev/repos", true)
    myRequest.send()
    
    console.log(myRequest)
    
    myRequest.onreadystatechange = function(){
        console.log(myRequest.readyState)
        console.log(myRequest.status)
        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText)
            jsData = JSON.parse(this.responseText)
            console.log(jsData)
    
            for(i = 0; i < jsData.length; i++){
                let div = document.createElement("div")
                let repoName = document.createTextNode(jsData[i].full_name)
                div.appendChild(repoName)
                document.body.appendChild(div)
            }
            
        }
    }
*/


/*
        Promise Intro And Syntax
    - Promise In JavaScript Is Like Promise In Real Life
    - Promise Is Something That Will Happen In The Future
    - Promise Avoid Callback Hell
    - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

        - Promise Status
    --- Pending: Initial State
    --- Fulfilled: Completed Successfully
    --- Rejected: Failed

        Story
    - Once A Promise Has Been Called, It Will Start In A Pending State
    - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
    - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

    - Then
    --- Takes 2 Optional Arguments [Callback For Success Or Failure]

    
    myPromise = new Promise((resolveFunc, rejectFunc) => {
        let connect = false;
        if(connect){
            resolveFunc("connection Established")
        }else{
            rejectFunc(Error("connection failed"))
        }
    }).then(
        (resolveValue) => console.log(`good ${resolveValue}`),
        (rejectValue) => console.log(`Bad ${rejectValue}`)
        )
    
        OR
    
        myPromise = new Promise((resolveFunc, rejectFunc) => {
            let connect = false;
            if(connect){
                resolveFunc("connection Established")
            }else{
                rejectFunc(Error("connection failed"))
            }
        })
    
    
    myPromise.then(
        (resolveValue) => console.log(`good ${resolveValue}`),
        (rejectValue) => console.log(`Bad ${rejectValue}`)
        )
    
    console.log(myPromise)
    







            Promise Training

    We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
    .then(We Will Choose Two People)
    .then(We Will Test Them Then Get One Of Them)
    .catch(No One Came OR less than 4)

    Then    => Promise Is Successfull Use The Resolved Data
    Catch   => Promise Is Failed, Catch The Error
    Finally => Promise Successfull Or Failed Finally Do Something

        example


    myPromise = new Promise((resolveFunc, rejectFunc) => {
        let employ = ["ahmed", 'mohammed', `osama`, `muneer`]
        if(employ.length === 4){
            resolveFunc(employ)
        }else{
            rejectFunc(Error(`Number of employ is not 4`))
        }
    })
    
    myPromise.then((resolveValue) => {
        resolveValue.length = 2
        return resolveValue})
    
    myPromise.then((resolveValue) => {
        resolveValue.length = 1
        return resolveValue
    })
    
    myPromise.then((resolveValue) => console.log(`the choosen one is ${resolveValue}`))
    
    myPromise.catch((rejectReason) => console.log(rejectReason))
    
    myPromise.finally(console.log(`opertation is done`))
    
     ////OR
    
        myPromise.then((resolveValue) => {
        resolveValue.length = 2
        return resolveValue}).then((resolveValue) => {
        resolveValue.length = 1
        return resolveValue
    }).then((resolveValue) => {
        console.log(`the choosen one is ${resolveValue}`)}).catch((rejectReason) => {
            console.log(rejectReason)}).finally(console.log(`Opertation is done`))








    Prmoise and XHR


    const getData = (apiLink) => {
        return new Promise((resolve, reject) => {
            let myRequest = new XMLHttpRequest();
        myRequest.open("GET", apiLink)
        myRequest.send()
    
        myRequest.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            resolve(JSON.parse(this.responseText))
        }else{
            reject(Error(`No connection`))
        }
    }
        })
    }
    
    getData("https:///api.github.com/users/MuneerDev/repos").then((result) => {
        result.length = 10
        return result
    }).then((result) => {
        console.log(result[0].full_name)
    }).catch((rej) => console.log(rej))
    
    ////"https:///api.github.com/users/MuneerDev/repos
    OR use fetch api same as abov
    fetch("https:///api.github.com/users/MuneerDev/repos").then((result) => {
        let myData = result.json();
        return myData
    }).then((full) => {
        full.length = 10
        return full
    }).then((ten) => {
        console.log(ten[0].full_name)
    })





    Promise
    - All /// return true if all promises are resolved
    - All Settled /// return an array of resolved and rejected promises
    - Race /// return the first promises it faces
    

    myFirstPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res(`Iam the first promises`)
        }, 5000)
    })
    
    mySecondPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res(`Iam the Second promises`)
        }, 2000)
    })
    
    myThirdPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res(`Iam the Third promises`)
        }, 1000)
    })
    
    Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        (res) => console.log(res),
        (rej) => console.log(`Rejected ${rej}`)
    )
    
    Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        (res) => console.log(res),
        (rej) => console.log(`Rejected ${rej}`)
    )
    
    Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        (res) => console.log(res),
        (rej) => console.log(`Rejected ${rej}`)
    )





    Async
    - Async Before Function mean this function return a promise
    - Async and Adwait Help in creating Asynchronous Promise behavior with cleaner style
    

    function getData(){
        return new Promise((res, rej) => {
            let user = [`osama`]
            if(user.length > 0){
                res(`User found`)
            }else{
                rej(Error(`No user found`))
            }
        })
    }
    
    getData().then(
        (res) => console.log(res),
        (rej) => console.log(rej)
    )
    
    ////* SAME AS ABOVE
    
    function getData(){
    
            let user = [`osama`]
            if(user.length > 0){
                return Promise.resolve(`User found`)
            }else{
                return Promise.reject(Error(`No user found`))
            }
        
    }
    
    getData().then(
        (res) => console.log(res),
        (rej) => console.log(rej)
    )
    
    ////* SAME AS ABOVE
    
    async function getData(){
    
        let user = [`osama`]
        if(user.length > 0){
            return (`User found`)
        }else{
            throw new Error(`No user found`)
        }
    }
    
    console.log(getData())





    Await
    - Await works only inside Async Function
    - Await Make javascript wait for the promise Result
    - Await is more Elegant Syntax of getting promise result
    * Important Note the Await return the values right away
    

    myPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res(`Iam good promise`)
        }, 2000)
    })
    
    async function readData(){
        console.log(`before promise`)
        console.log(await myPromise)
        console.log(`after promise`)
    }
    
    readData()
    





    myPromise = new Promise((res, rej) => {
        setTimeout(() => {
            rej(`Iam bad promise`)
        }, 2000)
    })
    
    async function readData(){
        console.log(`before promise`)
        
        try{ /// try the promise
            console.log(await myPromise) /// return the promise resolve command
        }catch(reason){ /// if the promise is rejected then do this
            console.log(`Reason: ${reason}`) /// 
        }finally{ /// when the promise change from pending to done do this
            console.log(`done`)
        }
    
        console.log(`after promise`)
    }
    
    readData()
    
    
    async function fetchData() {
        console.log("Before Fetch");
        try {
            let myData = await fetch("https:///api.github.com/users/elzerowebschool/repos");
            console.log(await myData.json()); ///* VERY IMPORTANT without await it return promise with await it returns object
        } catch (reason) {
            console.log(`Reason: ${reason}`);
        } finally {
            console.log("After Fetch");
        }
    }
    
    fetchData();
*/
