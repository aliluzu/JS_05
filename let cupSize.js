let cupSize
let smallCup = "small cup"
let mediumCup = "medium cup"
let bigCup = "large cup"

let water
let hotWater = "hot water"
let coldWater = "cold water"

let price = 3

let coffeeType
let latter = "Latte"
let icedCoffee = "Iced Coffee"

coffeeType = icedCoffee
cupSize = smallCup

if (coffeeType == icedCoffee) {
  water = coldWater
}
else {
  water = hotWater
}


if (cupSize == mediumCup) {
  price *= 0.5
}
else if (cupSize == bigCup) {
  price *= 1.5
}

let order = `Make a ${cupSize} of ${coffeeType}:`
let step1 = `1. Take a ${cupSize}`
let step2 = "2. Put 1 spoon of coffee in it"
let step3 = `3. Pour ${water} in a cup with coffe`
let step4 = "4. Pour milk in a cup of coffee"
let step5 = "5. Stir coffee in a cup with a spoon"
let orderPrice = `The order price is ${price}`
let result = `Enjoy your coffee!`
console.log(order,'\n', step1,'\n', step2, '\n', step3,'\n', step4,'\n', step5,'\n', orderPrice,'\n', result)