// 1-Kata
// distanceToPump - сколько до заправки
// mpg - сколько миль за 1 галлон
// fielLeft - сколько осталось топлива
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let leftDistance = fuelLeft * mpg;
    console.log(leftDistance)
    return distanceToPump <= leftDistance ? true : false
}; 

zeroFuel(100, 50, 1)

// 2-Kata
function digitize(n) {
    let res = []
    res = String(n).split('').map((i)=>Number(i))
    return res.reverse()
  }
  
  console.log(digitize(12345)) 

// 3 - Kata
function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
        return (Math.sqrt(sq)+1)**2
    }
    return -1;
  }

// 4- Kata
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

// 5 - kata
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i*2;
  }