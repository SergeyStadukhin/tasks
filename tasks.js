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