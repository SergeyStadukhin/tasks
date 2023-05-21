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



