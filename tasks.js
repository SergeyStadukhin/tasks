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