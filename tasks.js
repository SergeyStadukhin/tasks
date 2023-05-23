// 1-codeWars
// distanceToPump - сколько до заправки
// mpg - сколько миль за 1 галлон
// fielLeft - сколько осталось топлива
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let leftDistance = fuelLeft * mpg;
    console.log(leftDistance)
    return distanceToPump <= leftDistance ? true : false
}; 

zeroFuel(100, 50, 1)

// 2-codeWars
function digitize(n) {
    let res = []
    res = String(n).split('').map((i)=>Number(i))
    return res.reverse()
  }
  
  console.log(digitize(12345)) 

// 3 - codeWars
function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
        return (Math.sqrt(sq)+1)**2
    }
    return -1;
  }

// 4- codeWars
function printerError(s) {
    const current = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    const countSymbols = s.length
    let countErrors = 0
    
    for(let i = 0; i<s.length; i++) {
      if(current.indexOf(s[i]) === -1) {
          countErrors=countErrors+1
      }
    }
    return `${countErrors}/${countSymbols}`
}

// 5 - codeWars
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i*2;
  }

// 6 - codeWars
function SeriesSum(n)
{
  let sum = 1
  let firstNumber = 1
  let nextNumber = '1/4'
  for(let i = 1; i<n; i++) {
      sum+=eval(nextNumber)
      sum = +sum.toFixed(2)
      nextNumber = '1/'+String(Number(nextNumber.split('/')[1])+3)
  }
  return sum
}
// console.log(SeriesSum(4));

// freeCodeCamp
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift()

//
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

const myList = [];

myList.push(["Chocolate Bar", 15])
myList.push(["Chocolate Bar", 15])
myList.push(["Chocolate Bar", 15])
myList.push(["Chocolate Bar", 15])
myList.push(["Chocolate Bar", 15])


function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

function functionWithArgs(param1, param2) {
  console.log(param1, param2);
}

functionWithArgs("123","123")

function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);


// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



function myLocalScope() {
  // Only change code below this line
let myVar = 0
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum+=5
}

// Only change code above this line

addThree();
addFive();


// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)


function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"


  // Only change code above this line

}


// Setup
function testEqual(val) {
  if (val===12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


function testLogicalAnd(val) {
  // Only change code below this line

  if (val>=25 && val <=50) {
    return 'Yes'
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);


function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val<10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else result = "5 or Smaller"; 

  // Only change code above this line
  return result;
}

testElse(4);


function testSize(num) {
  // Only change code below this line
  if(num<5){
    return "Tiny"
  } else if(num<10){
    return "Small"
  } else if(num<15){
    return "Medium"
  } else if(num<20){
    return "Large"
  } else if(num>=20){
    return "Huge"
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1) {
    return "Hole-in-one!"
  } else if(strokes <=par-2){
    return "Eagle"
  } else if(strokes ==par-1){
    return "Birdie"
  } else if(strokes ==par){
    return "Par"
  }else if(strokes ==par + 1){
    return "Bogey"
  }else if(strokes ==par + 2){
    return "Double Bogey"
  }else if(strokes >= par + 3){
    return "Go Home!"
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);


function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1: 
      answer = 'alpha';
      break
    case 2: 
      answer = 'beta';
      break
    case 3: 
      answer = 'gamma';
      break
    case 4: 
      answer = 'delta';
      break
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);


function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
      answer = 'apple'
      break
    case 'b':
      answer = 'bird'
      break
    case 'c':
      answer = 'cat'
      break
    default:
      answer = 'stuff'
      break
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);


function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break
    case 7:
    case 8:
    case 9:
      answer = "High"
      break
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);


function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break
    case 42:
      answer = "The Answer"
      break
    case 1:
      answer = "There is no #1"
      break;
    case 99:
      answer = "Missed me by this much!"
      break
    case 7:
      answer = "Ate Nine"
      break
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);


// Setup
function abTest(a, b) {
  // Only change code below this line

  if(a<0 || b< 0) return undefined

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1
      break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -=1
      break
    }
    return `${count} ${count>0 ? 'Bet' : "Hold"}`

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


const myDog = {
  // Only change code below this line
  name: '',
  legs: 0,
  tails: 0,
  friends: []

  // Only change code above this line
};


// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line


// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};


// Only change code below this line
delete myDog.tails



