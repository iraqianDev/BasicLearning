
//challenge 1 to 9
//  making a ezlero h1 with styling
document.write("<h1>Elzero</h1>","<style>h1{color:blue;font-Size:80px;font-weight: bold;text-align: center;font-family: Arial</style>");


//  making log messege with style
console.log("%cElzero %cWeb %cSchool", "color: red;font-size: 80px;font-weight: bold;text", "color: green;font-size: 80px;font-family: Arial", "color: blue;font-size: 80px;font-weight: bold")


//  making log group
console.group('group 1');
    console.log('child');
    console.log('child');
        console.group('group 2');
            console.log('child');
            console.log('child');
                console.group('group 3');
                    console.log('child');
                    console.log('child');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('group 4');
console.log('child');
console.log('child');
console.groupEnd();

//  table of content
console.table(["elzero", "Ahmed", "samhe"]); 

// challenge 10 to 17
var numberOne = 10
var numberTwo = 20

console.log(`${numberOne}${numberTwo}`);
console.log(typeof`${numberOne}${numberTwo}`);
console.log(numberOne + "" + numberTwo)
console.log(typeof "numberOne numberTwo")

console.log(`${numberOne}
${numberTwo}`)
console.log(numberOne + "\n" + numberTwo)

var elzero = []
elzero.innerHTML = "object"

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

var hard = "\`i'm in\n\\\\\n \+\+ with \+\+\n \\\"\"\"\\\"\"\"\
\n\"\"JavaScript\"\"\'\'"
console.log(hard);

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_

// Replace ? With Arithmetic Operators
console.log(10 + 20 + 15 + 3 + 190 + 10 - 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(+num + +num); // 6

// Soultion Three
console.log(+num - -num); // 6

// Soultion Four
console.log(num - -num); // 6

// Solution Five
console.log(num + +num); // 6

// Solution Six
console.log(+num + num); // 6 


let numb = "10";

// Solution One
console.log(+numb + +num); // 20

// Solution Two
console.log(+numb - -num); // 20

// Solution Three
console.log(+numb - -num--); // 20

// Solution Four
console.log(++numb - -num--); // 20

let points = 10;

// Write Your Code Here
points += 3

console.log(points); // 13

// Write Your Code Here
points -= 5

console.log(points); // 8;
//
console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(+Number.isInteger(10) + +Number.isInteger(10)); //2

console.log(Math.trunc(Math.random() * 5)); //random 0-4
//
let userName = "Elzero";
console.log(userName.toLowerCase().slice(0, 1)); // e
console.log(userName.toLowerCase().substring(0,1)); // e
console.log(userName.toLowerCase()[0]); // e
console.log(userName.toLowerCase().charAt(0)); // e
console.log(userName.toLowerCase().split("", 1)); // e
console.log(userName.toLowerCase().substr(0,1).repeat(3)); // eee
//
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
//
var a = true

console.log(Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER + ++a + a*a*a*a - a); //16
//
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 != +"-40"); // true
console.log( 10 < -"-40"); // true
console.log(+"10" == 10); // true
console.log( 20 > false); // true
//
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 <= num2); // true
console.log(num1 > -num2); // true
console.log(num1 >= -num2); // true
//
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a <= b <= a <= c); // true
console.log(!(a > b) && !(a >= b) && !(a < c) && !(a <= c)); // true
//

// Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

if (num < 10){
    console.log(`00${num}`)
} else if (num > 10 && num < 100){
    console.log(`0${num}`);
} else if (num >= 100){
    console.log(`${num}`);
}

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
if (num1 == str){
    console.log("{num1} Is The Same Value as {str}");
}
if (num1 !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if(num1 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if(str != str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if (num3 > num1 && typeof num3 !== typeof num2){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
} else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}  else if (num3 != num1 && typeof num3 !== typeof num2 && typeof num3 !== typeof num1){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}

Edit What You Want Here

let num1 = 11;
let num2 = 2;
let num3 = 11;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
//
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(+false, num)); // ["Ahmed", "Elham", "Osama"];
myFriends.pop()
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop()
console.log(friends); // ["Eman", "Osama"]

//

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo);

// Write One Single Line Of Code

console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes("JS")){
    console.log("Found");
}else{
    console.log("Error")
}
switch (haystack.includes("JS")){
    case true:
        console.log("Found");
    break;
    default:
    console.log("Error")
}
haystack.includes("JS") ? console.log("found") : console.log("Unknown")

//

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
arr1.shift()
let allArrs = arr2.slice(arr2.length - arr1.length).concat(arr1.slice(arr1.length - +true)); //
// Your Code Here

console.log(allArrs.sort().join("").toLowerCase()); // fxy

//

let start = 10;
let end = 100;
let exclude = 40;
let test = start;

for (; start <= end;  start += test) {
    if (start === 40){
        continue;
    }
    console.log(start)
}

//

let start = 10;
let end = 0;
let stop = 3;


for (; start >= end ; start--) {
    if (start >= 10){
        console.log(`${start}`)
    }else {
        console.log(`${0}${start}`)
    }
    if (stop >= start){
        break
    }
}

//

let start = 1;
let end = 6;
let breaker = 2;

for (; start <= end; start++){
    console.log(start)
    console.log(`--${breaker}`)
    console.log(`--${breaker + breaker}`)
}

//

let index = 10;
let jump = 2;
let end = 0;

for (; index > end; index -= jump) {
    if (index === jump){
        continue;
    }
    console.log(index)
  // Write Your Code Here
}

//

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (i = +false; i < friends.length; i++) {
    if (friends[i][+false] === letter.toUpperCase()) {
        continue;
    }
    console.log(friends[i])
}

//

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (i = start; i < mix.length; i++) {
if ( typeof mix[i] === typeof "string"){
    continue;
}
if(1 >= mix[i]){
    continue;
}
console.log(mix[i])
}

//

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


while (friends.length > counter){
    if (typeof friends[counter] === typeof ""){
        if (friends[counter][index] !== "A"){
            console.log(`${} ${friends[counter]}`)
        }
    }
    counter++;
}

//

function sayHello(theName, theGender) {
  if(theGender === undefined){
      theGender = ""
  } if(theGender === "Male"){
      theGender = "Mr"
  } if(theGender === "Female"){
      theGender = "Ms"
  }
  console.log(`Hello ${theGender} ${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//

function calculate(firstNum, secondNum, operation) {
  if(secondNum === undefined){
      console.log("Please specify a second number")
  } else if(operation === undefined){
      console.log(firstNum + secondNum)
  } else if(operation === 'add'){
      console.log(firstNum + secondNum)
  } else if(operation === 'subtract'){
      console.log(firstNum - secondNum)
  } else if(operation === 'multiply'){
      console.log(firstNum * secondNum)
  } else{
      console.log("Error")
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100){
      console.log("age is out of range")
  } else if (theAge > 10 && theAge < 100)
      console.log(theAge * 12)
}


// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//


function createSelectBox(startYear, endYear) {
  document.write(`<select>`)
  for(i = startYear; i <= endYear; i++) {
  document.write(`<option value="${i}">${i}</option>`)
  }
  document.write(`</select>`)
}
createSelectBox(2000, 2021);

//


function multiply(...numbers){
    let total = 1
    for (i = 0; i < numbers.length; i++){ 
        if(typeof numbers[i] === 'number'){
            total *= Math.floor(numbers[i]) 
        }

    }
    console.log(total)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

//

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return `Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        return `, Your Age Is ${zAge.split(" ")[0]}`
    }
    function countryTwoLetters(zCountry) {
        return `, You Live In ${zCountry.split("")[0].toUpperCase()}${zCountry.split("")[1].toUpperCase()}`
    }
    function fullDetails() {
    return `${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


//

function itsMe() {
    return `Iam A Normal Function`;
}
^ same as before
let itsMe = () => `Iam A Normal Function`
  console.log(itsMe()); // Iam A Normal Function

//

function checker(zName) {
    return function (status) {
    return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
    };
}
// ^ same as before
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//

function checker(zName) {
    return function (status) {
    return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
    };
}
// ^ same as before
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//

function specialMix(...data) {
    total = 0
    for (i = 0; i < data.length; i++) {
        if(typeof parseInt(data[i]) !== typeof 10){
            data[i].unshift("0")
        }
        total += parseInt(data[i])
        
    }
    return total;
}
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
// not complete


//

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let words = mix.map(function (ele){ return isNaN(parseInt(ele)) ? ele : ""}).reduce(function(acc, current){ return `${acc}${current}`})
console.log(words)
// Elzero

//

let myString = "EElllzzzzzzzeroo";

let filtered = myString.split("").filter(function(ele, index) {return myString.indexOf(ele) === index;}).join("")

console.log(filtered)
// Elzero

//

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function (ele, acc){ return `${ele}${acc}`})

let filtered = newArray.split("").filter(function (ele){ return ele !== ","}).join("")

console.log(filtered)

// Elzero

//

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings.filter(function (ele){ return typeof ele === typeof 10}).map(function (ele){ return -ele})

console.log(nums)

// [-1, -10, 10, 20, -5, -3]

//

let nums = [2, 12, 11, 5, 10, 1, 99];

let final = nums.reduce(function (ele, acc){ return  acc % 2 !== 0 ? acc+ele : acc*ele}, 1)

console.log(final)

// 500

//

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function(){
        return `My Name is ${member.name}, My Age Is ${member.age}, I live in ${member.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//

// Method One
// Create Your Object Here
let objMethodOne = {property: "Method One",}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = new Object({property: "Method Three",})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({property: "Method Four",})
console.log(objMethodFour.property); // "Method Four"

//

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    f: 6,
    e: 5,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a}, threeNums, twoNums);
console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/

//

// The Object To Work With

let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
        },
        price: 40,
    },
    };
    
  // Code One => How To Get Object Length ?
    let objectLength = Object.keys(myFavGames).length;
    for (let i = 0; i < objectLength; i++) {
        console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
        console.log(`The Publisher Is ${Object.values(myFavGames[Object.keys(myFavGames)[i]].publisher).join("")}`);
        console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
   // Check If Nested Object Has Property (bestThree)
    if (`bestThree` in myFavGames[Object.keys(myFavGames)[i]]) {
    console.log(`- Game Has Releases`);
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[1]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[1]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[1]].bestThree.three}`);
    }
console.log("#".repeat(20));
}
    
//   // Ouput
    
//     "The Game Name Is Trinity Universe"
//     "The Publisher Is NIS America"
//     "The Price Is 40"
//     "####################"
//     "The Game Name Is Titan Quest"
//     "The Publisher Is THQ"
//     "The Price Is 50"
//     "- Game Has Releases"
//     "First => Immortal Throne"
//     "Second => Ragnarök"
//     "Third => Atlantis"
//     "####################"
//     "The Game Name Is YS"
//     "The Publisher Is Falcom"
//     "The Price Is 40"
//     "- Game Has Releases"
//     "First => Oath in Felghana"
//     "Second => Ark Of Napishtim"
//     "Third => origin"
//     "####################"

//

let select = document.querySelector(".element")
let select = document.querySelector("#elzero")
let select = document.querySelector(`[name="js"]`)
let select = document.querySelector(`div`)
let select = document.querySelectorAll(".element")
let select = document.querySelectorAll("#elzero")
let select = document.querySelectorAll(`[name="js"]`)
let select = document.querySelectorAll(`div`)
let select = document.getElementById("elzero")
let select = document.getElementsByTagName("div")
let select = document.getElementsByClassName("element")

console.log(select)


//

for (i = 0; i < document.images.length; i++){
    document.images[i].src = `https://elzero.org/wp-content/themes/elzero/imgs/logo.png`
    document.images[i].alt = "Elzero logo"
}


//

//change class and name and value without using strings/number/true/false
let number = document.querySelectorAll("div")[0].className.split("").length
let one = document.querySelector(".one").className
let two = document.querySelector(".two").className

document.querySelectorAll("div")[0].className = one
document.querySelectorAll("div")[0].title = one
document.querySelectorAll("div")[0].innerHTML = one

document.querySelectorAll("div")[1].className = two
document.querySelectorAll("div")[1].title = two
document.querySelectorAll("div")[1].innerHTML = `${two} ${--number}`

//

for (i = 0; i < document.images.length; i++){
    if(document.images[i].alt !== ""){
        document.images[i].alt = "old"
    }else{
        document.images[i].alt = "Elzero New"
    }
}

//

/*
    <style>
        input,select{
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            width: 300px;
            height: 30px;
            margin-bottom: 10px;
        }
        section,div:not(.results){
            background-color: orange;
            text-align: center;
            height: 30px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;;
        }
        .results{
            margin-top: 50px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
    </style>
    <form action="">
        <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
        <input type="text" name="texts" class="input" placeholder="Elements Text" />
        <select name="type" class="input">
            <option value="Div">Div</option>
            <option value="Section">Section</option>
        </select>
        <input type="submit" name="create" value="Create" style="background-color: rgb(70, 70, 240); color: white; outline: none; border: none;"/>
        <div class="results">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
        </div>
        </form>
*/
//create div or section with text and number
let numberInput = document.querySelectorAll(".input")[0]
let number = 0
numberInput.oninput = function(){ number = parseInt(numberInput.value)}

let elementText = document.querySelectorAll(".input")[1]
let text = ""
elementText.onkeyup = function(){ text = elementText.value}

let optionArea = document.querySelectorAll(".input")[2]
let value = "div"
optionArea.onclick = function (){ value = optionArea.value}

let result = document.querySelectorAll(".results")[0]

let submit = document.querySelectorAll("[type=submit]")[0]
submit.onclick = function (e){
    e.preventDefault();
    document.querySelectorAll(".results")[0].innerHTML = ``
    for( i = 0; i < number; i++){
        let create = document.createElement(`${value}`)
        create.innerHTML = `${text}`
        result.appendChild(create)
    }
}

//

window.onload = function(){ document.getElementsByClassName("open")[1].click() }

//

let after = document.createElement("div");

after.className = "start";
after.title = "start element";
after.setAttribute("data-value", "start")
after.innerHTML = "start";

document.querySelectorAll("div")[0].after(after)

document.querySelectorAll("p")[0].remove();
let before = document.createElement("div");

before.className = "end";
before.title = "end element";
before.setAttribute("data-value", "end")
before.innerHTML = "End";
document.querySelectorAll("div")[0].before(before)


//

document.getElementsByTagName("div")[0].childNodes[3]

//

for (i = 0; i < document.body.children.length; i++){
    document.body.children[i].onclick = function (){ console.log("hi from console")}
}

//

/*
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      .assign {
        text-align: center;
        padding-top: 20px;
      }
      .assign input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ddd;
      }
      .assign input:focus {
        outline: none;
        border-color: #ccc;
      }
      .assign [title="Current"] {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list h5 {
        margin: 0 0 10px;
        text-align: left;
      }
      .assign .classes-list div span {
        background-color: #ff5722;
        padding: 6px 10px 8px;
        margin-right: 5px;
        border-radius: 6px;
        color: white;
        display: inline-flex;
      }
    </style>
  </head>
  <body>
    <div class="assign">
      <input type="text" class="classes-to-add" placeholder="Add Classes" />
      <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
      <div class="element current" title="Current">Current Element</div>
      <div class="classes-list">
        <h5>Current Element Class Lists</h5>
        <div><div class="empty">empty</div></div>
      </div>
    </div>
    <script src="JS.js"></script>
  </body>
*/

let div = document.querySelectorAll("div")[3]

let addInput = document.querySelectorAll("input")[0]
let addInputValue = ""
addInput.addEventListener("keyup", function(){ addInputValue = addInput.value.split(" ")
for (let i = 0; i < addInputValue.length; i++) {
    addInputValue[i] = addInputValue[i].toLowerCase();
    addInputValue.sort();
}
})

let removeInput = document.querySelectorAll("input")[1]
let removeInputValue = ""
removeInput.addEventListener("keyup", function(){ removeInputValue = removeInput.value.split(" ")
for (let i = 0; i < removeInputValue.length; i++) {
    removeInputValue[i] = removeInputValue[i].toLowerCase();
    removeInputValue.sort();
}})

addInput.addEventListener("blur", function(){
    if (addInputValue !== ""){
        for (let i = 0; i < addInputValue.length; i++) {
            let span = document.createElement("span")
            span.className = `${addInputValue[i]}`
            div.appendChild(span)
            span.innerHTML = `${addInputValue[i]}`
        }
    }

})

removeInput.addEventListener("blur", function(){
    for (j = 0; j < div.children.length - 1; j++) {
        if (document.getElementsByTagName("span")[j].classList.contains(`${removeInputValue}`) && removeInputValue !== ""){
                for (let i = 0; i < removeInputValue.length; i++) {
                    document.getElementsByClassName(`${removeInputValue}`)[i].remove();
                }
        }
}
})

document.body.onmousemove = function() {
    if (div.children.length > 1){
        this.getElementsByClassName("empty")[0].textContent = ""
    } else if (div.children.length <= 1){
        this.getElementsByClassName("empty")[0].textContent = "empty"
    }
}

addInput.onblur = function(){ if(addInput.value !== ""){ addInput.value = "" }}
removeInput.onblur = function(){ if(removeInput.value !== ""){ removeInput.value = "" }}

//

let messene =  prompt(`Print Number From – To`, `Example: 5-20`, )
let array = messene.split("-")

window.onload = function(){
    if(+array[0] < +array[1]){
        for (i = +array[0]; i <= +array[1]; i++) {
            console.log(i)
    }
} else{
    for (i = +array[1]; i <= +array[0]; i++) {
        console.log(i)
}
}
}

//


/*
    <div style="width: 300px; height: 100px; background-color: #eee; display: grid; place-content: center; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none">
        <p>Welcome</p>
        <span>Welcome to elzero web school</span>
        <button style="width: 20px;height: 20px;; border-radius: 50%; background-color: red; border: none;position: absolute; top: -5px; right: -5px; cursor: pointer; color: white;">X</button>
    </div>
*/
let popUp = setInterval(function(){
    document.querySelector("div").style.display = "block"
}, 5000)
document.querySelector("button").onclick = function(){
    clearInterval(popUp)
    document.querySelector("div").style.display = "none"
}

//

setInterval(function(){
    if (document.querySelector("div").innerHTML !== "0"){
        document.querySelector("div").innerHTML -= 1
    }else if (document.querySelector("div").innerHTML === "0"){
        clearInterval()
    }
}, 1000)

//


setInterval(function(){
    if (document.querySelector("div").innerHTML !== "0"){
        document.querySelector("div").innerHTML -= 1
    }else if (document.querySelector("div").innerHTML === "0"){
        location.href = "https://google.com"
        clearInterval()
    }
}, 1000)

//

setInterval(function(){
    if (document.querySelector("div").innerHTML !== "0"){
        document.querySelector("div").innerHTML -= 1
    }
    if(document.querySelector("div").innerHTML === "5"){
        window.open("https://google.com", "_blank", "width=400,height=400")
    }
    if (document.querySelector("div").innerHTML === "0"){
        clearInterval()
    }
}, 1000)

//

document.querySelector("form").onclick = (e) =>{
    if (e.target.classList.contains("font-Family")){
        window.localStorage.setItem("fontFamily", fontFamily.value)
        document.body.style.cssText = `font-family: ${localStorage.getItem("fontFamily")}; color: ${localStorage.getItem("color")}; font-size: ${localStorage.getItem("size")}px`
    }
    if (e.target.classList.contains("color")){
        window.localStorage.setItem("color", color.value)
        document.body.style.cssText = `font-family: ${localStorage.getItem("fontFamily")}; color: ${localStorage.getItem("color")}; font-size: ${localStorage.getItem("size")}px`
    }
    if (e.target.classList.contains("size")){
        window.localStorage.setItem("size", size.value)
        size.value = window.localStorage.getItem("size")
        document.body.style.cssText = `font-family: ${localStorage.getItem("fontFamily")}; color: ${localStorage.getItem("color")}; font-size: ${localStorage.getItem("size")}px`
    }
}


document.body.style.cssText = `font-family: ${localStorage.getItem("fontFamily")}; color: ${localStorage.getItem("color")}; font-size: ${localStorage.getItem("size")}px`

/*
    <form action="">
        <label for="Font-family">Font-family</label>
        <select class="font-Family" name="Font-family" id="Font-family">
            <option value="Open-Sans">Open-Sans</option>
            <option value="Roboto">Roboto</option>
            <option value="Cairo">Cairo</option>
        </select>
        <br>
        <label for="color">color</label>
        <select class="color" name="color" id="color">
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="black">black</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
        </select>
        <br>
        <label for="size">size</label>
        <select class="size" name="size" id="size">
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
        </select>
    </form>
*/

//


let first = document.querySelectorAll("input")[0]
let second = document.querySelectorAll("input")[1]
let third = document.querySelectorAll("input")[2]
let forth = document.querySelector("select")

first.onblur = function(){ 
    sessionStorage.setItem("text", first.value)
}

if(sessionStorage.getItem("text") !== ""){
    first.value = sessionStorage.getItem("text")
}
second.onblur = function(){ 
    sessionStorage.setItem("date", second.value)
}

if(sessionStorage.getItem("date") !== ""){
    second.value = sessionStorage.getItem("date")
}
third.onblur = function(){ 
    sessionStorage.setItem("email", third.value)
}

if(sessionStorage.getItem("email") !== ""){
    third.value = sessionStorage.getItem("email")
}

forth.onclick = function(){ 
    sessionStorage.setItem("value", forth.value)
}

if(sessionStorage.getItem("value") !== ""){
    forth.value = sessionStorage.getItem("value")
}

/*
<form action="">
    <input type="text">
    <input type="number">
    <input type="email">
    <select class="select" name="" id="">
        <option value="value1">value1</option>
        <option value="value2">value2</option>
        <option value="value3">value3</option>
        <option value="value4">value4</option>
        <option value="value5">value5</option>
    </select>
</form>
*/

//

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , , e] = myNumbers
console.log(a * e); // 5

//

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f,g]]] = mySkills
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let arrFull = arr1.concat(arr2.concat(arr3));
// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let [c, , , , , , , a, b] = arrFull
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
    };

  // Write Your Destructuring Assignment Here
    let {age: a, working: w, country: c, hobbies: [h1, ,h3]} = member
    console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working

    console.log(`I Live in ${c}`);
  // I Live in Egypt

    console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  //

  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
        },
        Origin: "30 USD",
    },
    };
    let o = Object.keys(game.releases)[0];
    let a = Object.keys(game.releases)[1];
  // Write Your Destructuring Assignment/s Here
    let {title: t, developer: d, releases: {"Oath In Felghana": [u, j]}, releases: { "Ark Of Napishtim": {US: u_price, JAP: j_price}, Origin: or}} = game
        console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
    
    console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games
    
    console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
    
    console.log(`Although I Love ${a}`);
  // Although I Love Ark Of Napishtim 
    console.log(`${a} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD 
    console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD 
        console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD

//

let set = new Set([10, 20, 2])
let [, , third] = set
console.log(third)

//

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let sort = new Set(myFriends.sort())
console.log(sort)
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
    };
    let map = new Map([[, "osama"],["role", "admin"], ["country", "egypt"]])
    console.log(map)
    console.log(map.size)
    console.log(map.has("role"))
  // Needed Output
    // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    // 3
    // true

//

let theNumber = 100020003000;

let set = new Set(Array.from(theNumber.toString()).map(Number))
set.delete(0)
console.log(...set)

// Needed Output
// 123

//


let theName = "Elzero";
let set = new Set([...theName])
console.log([...theName])

// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']

//

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let copy = chars.copyWithin(3)
console.log(copy)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let copy = chars.copyWithin(3, 4)
console.log(copy.copyWithin(4))
// Needed Output
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

//

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let copy = chars.copyWithin(2, 0)
console.log(copy)
// Needed Output
//["Z", "Y", "Z", "Y", "A", "D", "E"]

//

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars.sort().copyWithin(0, 3, 6))

//

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let add = [...numsOne, ...numsTwo]
let set = new Set().add(add)
let map = numsOne.concat(numsTwo)
let ddd = (numsOne) + "," + (numsTwo)
console.log(add)
console.log(...set)
console.log(map)
console.log([ddd])
// Needed Output
//[1, 2, 3, 4, 5, 6]

//

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re = /\d+:\w+:\d+:\d+:\d+/ig
console.log(ip.match(re))

//

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re = /Os\w+O/ig
console.log(specialNames.match(re))
// Output
// ['Os10O', 'OsO', 'Os100O']

//

let phone = "+(995)-123 (4567)";
let re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig
console.log(phone.match(re))

//

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// http
// s? one or zero s
// two / for link
// ?:
// slash - one or more w
// .
// ? for making www one or zero
// - any word or number or dots
// + for more than one of the selection
// .
// any amount of word or number
// ?:. and any word or number one or more
// ? either one or zero
// / can be one or zero
// .*

//

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/| - | )\d{2}(\/| - | )\d{2,}/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

//

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?)?(:?\/?\/?)(www\.)?elzero.(\w{2,})(:8080)?(\/.+)?/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

//

class Car{
    static count = 0;
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
        Car.count++
    }
    info() {
        return `Car ${this.n} and Model is ${this.m} and price is ${this.p}`
    }
    running(){
        return `car is now running`
    }
}
let carOne = new Car(`BMW`, 2020, 5000)
let carTwo = new Car(`HP`, 2020, 5000)
let carThree = new Car(`ferrari`, 2020, 5000)

console.log(carOne.info())
console.log(carOne.running())

    // Needed Output

//"Car One Name Is MG And Model Is 2022 And Price Is 420000"
//"Car Is Running Now"

//

class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
}
}

class Tablet extends Phone{
    constructor(name, serial, price, size){
        super(name, serial, price);
        this.size = size || "unkown"
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} and size is ${this.size}`
    }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//

// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
        }
        get showData(){
            return `Hello ${this.u} Your Credit Card Number Is ${(this.#c).toString().match(/\d{4}/ig).join("-")}`
        }
    }

    // Do Not Edit Anything Below

    let userOne = new User("Osama", "1234-5678-1234-5678");
    let userTwo = new User("Ahmed", "1234567812345678");
    let userThree = new User("Ghareeb", 1234567812345678);

    console.log(userOne.showData);
    // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

    console.log(userTwo.showData);
    // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

    console.log(userThree.showData);
    // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

    console.log(userOne.c); // Prevent Accessing To Card Property Here
    // Undefined

//

// Do Not Edit Below
let myStr = "Elzero";
String.prototype.addLove = function(){
    return `I love Elzero Web School`
}
console.log(myStr.addLove()); // I Love Elzero Web School

//


const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
    };

    // Write Your Code Here
    Object.defineProperties(myObj,{
        score:{
            writable: false,
            value: 1000
        },
        id: {
            enumerable: false
        }
    })
    delete myObj.country
    myObj.score = 500;

    for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
    }

    console.log(myObj);

// Needed Output

//"username => Elzero"
//"score => 1000"
//{username: 'Elzero', score: 1000, id: 100}

//


console.log(`${631138520000 / 1000} seconds`)
console.log(`${631138520000 / 1000 / 60} Minutes`)
console.log(`${631138520000 / 1000 / 60 / 60} Hours`)
console.log(`${631138520000 / 1000 / 60 / 60 / 24} Days`)
console.log(`${631138520000 / 1000 / 60 / 60 / 24 / 30 } months`)
console.log(`${631138520000 / 1000 / 60 / 60 / 24 / 30 / 12 } months`)

//

console.log(Date("1982-10-25T06:10:00"))
// Needed Output
//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//


let date = new Date("Sat Apr 30 2022")
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(date)
console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`)
// Needed Output

//"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
//"Previous Month Is April And Last Day Is 30"

//

let date1 = new Date("Mon Oct 25 1982")
let date2 = new Date(1982, 9, 25)
let date3 = new Date(404366400000)

console.log(date1)
console.log(date2)
console.log(date3)

//

for(i = 0; i < 10000; i++){
    console.log(i)
}

let a = performance.now()
console.log(`Loop Took ${a} Milliseconds.`)

//

// Write Your Generator Function Here
function* gen(){
    yield 14
    yield 154
    yield 494
    yield 1034
    yield 1774
    yield 2714
    yield 3854
    yield 5194
    yield 6734
}
let generator = gen();



console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

//

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
    }
    function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
    }

    // Write Your Generator Function Here
    function* genAll(){
        yield* new Set([...genNumbers()])
        yield* new Set([...genLetters()])
    }
    let generator = genAll();

  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}

//


// main.js File
import {default as calc, modOne} from "./mod-two.js"
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

let modOne = {
    numOne: a,
    numTwo: b,
    numThree: c,
}

export default function(a, b, c){
    return a + b + c;
}
export {
    modOne
}
// also add type="module" to JS files

//

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json")
myRequest.send()

myRequest.onreadystatechange = function(){
    console.log(this.status)
    console.log(this.readyState)
    if(this.status === 200 && this.readyState === 4){
        console.log(this.responseText)
        console.log("Data Loaded")
    }
}


//

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json")
myRequest.send()

myRequest.onreadystatechange = function(){
    console.log(this.status)
    console.log(this.readyState)
    if(this.status === 200 && this.readyState === 4){
        jsObj = JSON.parse(this.responseText)
        console.log(jsObj)
        for(i = 0; i < jsObj.length; i++){
            jsObj[i].artical_section = "All"
        }
        console.log(jsObj)
    }
}


//

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json")
myRequest.send()

myRequest.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){

        jsObj = JSON.parse(this.responseText)

        let div = document.createElement(`div`)
        div.id = "data"

        for(i = 0; i < jsObj.length; i++){

            let div2 = document.createElement("div")

                div2.innerHTML = `
                <h2>Title ${jsObj[i].id}</h2>
                <p>Article Number ${jsObj[i].id} Body</p>
                <p>Author: ${jsObj[i].artical_creator}</p>
                <p>Category: ${jsObj[i].artical_section}</p>`

                div.appendChild(div2)
        }
        document.body.appendChild(div)
    }
}

//


let json = `[
    {
        "userId": 10,
        "title": "Article Title Number 1",
        "description": "Article Description Number 1"
    },
    {
        "userId": 5,
        "title": "Article Title Number 2",
        "description": "Article Description Number 2"
    },
    {
        "userId": 5,
        "title": "Article Title Number 3",
        "description": "Article Description Number 3"
    },
    {
        "userId": 5,
        "title": "Article Title Number 4",
        "description": "Article Description Number 4"
    },
    {
        "userId": 5,
        "title": "Article Title Number 5",
        "description": "Article Description Number 5"
    },
    {
        "userId": 5,
        "title": "Article Title Number 6",
        "description": "Article Description Number 6"
    },
    {
        "userId": 25,
        "title": "Article Title Number 7",
        "description": "Article Description Number 7"
    },
    {
        "userId": 25,
        "title": "Article Title Number 8",
        "description": "Article Description Number 8"
    },
    {
        "userId": 15,
        "title": "Article Title Number 9",
        "description": "Article Description Number 9"
    },
    {
        "userId": 15,
        "title": "Article Title Number 10",
        "description": "Article Description Number 10"
    }
    ]`


let myPromise = new Promise((res, rej) => {
    let data = JSON.parse(json)
    if(data.length > 5){
        res(data)
    }else{
        rej(Error(`Not over 5`))
    }
})

myPromise.then((res) => {
    for(i = 0; i < 5; i++){
        div = document.createElement(`div`)
        div.innerHTML = `
        <h3>${res[i].title}</h3>
        <p>${res[i].description}</p>`
        document.body.appendChild(div)
    }
}).catch((res) => {
    console.log(`reason: ${res}`)
}).finally(
    console.log(`done`)
)

