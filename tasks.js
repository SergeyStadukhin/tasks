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