// let helloMsg = '';
// let guest =true;
// let time = 10;

// if(guest == false){
//     helloMsg = 'Welcome';
// }else if(time >= 10){
//     helloMsg = 'Open a club!';
// }else{
//     helloMsg = 'We are close';
// }
// console.log(helloMsg);

// ===========================================================================
/*
let weight = 70;
let height = 1.60;
let bmi =  weight / (height ** 2);
console.log(bmi)


// BMI Categories:
// Underwight = < 18.5
// Normal weight = 18.5-24.9 // bmi >=18.5 && <= 24.9
// Overweight = 25-29.9
// Obesity = BMI of 30 or greater


if (bmi < 18.5){
    console.log('Underweight')
}else if (bmi < 25){
    console.log ('Normal weight')
}else if (bmi < 30){
    console.log('Overweight')
}else{
    console.log('Obesity')
}
*/

// ======================Ternary operation===========================
// condition ? expression1 : expression2

// let age = 17;
// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed)


// age < 18 ? console.log('underage') : console.log('adult')



// ======================Calculator===========================

let num1 = 5;
let num2 = 0;

let result;
let operator = "/";

if(operator == "+"){
    result = num1 + num2;
    console.log("Your sum: " + result);
}else if(operator == "-"){
    result = num1 - num2;
    console.log("Your difference: " + result);
}else if(operator == "/") {
    if(num2 == 0){
        console.log("Please enter another number, 0 is no allowed")
    }else{
        result = num1 / num2;
        console.log("Your division: " + result);
    }
 
}else if(operator == "*"){
    result = num1 * num2;
    console.log("Your multiplication: " + result);
}else{
    console.log("Please enter another operator!")
}

// =========Switch example=========

// switch (operator) {  
//   case "+": result = num1 + num2;
//     console.log("Your sum: " + result);
//     break;
//   case "-": result = num1 - num2;
//     console.log("Your difference: " + result); 
//     break;
//     case "/": result = num1 / num2;
//     console.log("Your devision:" + result)
//   default:
//    console.log("Please enter another operator!");
// }