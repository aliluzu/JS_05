//=========== Option 1: function declaration =====

// function name(param1, param2...){
//     statements
// return expression;
// };

//=========== Option 2: function expression =====

// let name = function(parama1, ...){
//     statements
// return expression;
// };

//=========== Option 3: arrow functions =====

// let name = (arg1, arg2, ...) => expression;

//***************************************************/

//===========  function declaration =====

// 1. Слово function
// 2. Имя функции
// 3.Список параметров в круглых скобках через запятую
// 4.Кон функции(тело функции)б внутри фигурных скобок.
// function print (arg){
//     // console.log(arg);
//     console.log('****************** ' + arg + ' ******************')
// }

// print("abcde");
// print([1,2,3])
// print(7)

// Код читается сверху внизю Но в данном примеры можно прописаь вывод как снизу так и сверху
// sum();

// function sum(){  
//     const a = 2;
//     const b = 4;
//     console.log(a + b);
// }

// sum ();

// void function ===> ничего не возвращает / нет 'return',
// Как только выполнение доходит до этого местаб функция
// останавливаетсяб и значение возвращается в вызвавший код

// console.log(a + b);

// ************************************************************

// let name  = 'Alina';

// function showMessage() {
//     return name = 'Hi ' + name;
//     // return 'Hi ' + name;
// }
// console.log(showMessage());
// console.log(name);

// ************************************************************

// let name  = 'Alina';

// function showMessage() {
//     let name = 'Bill';
//     return name = 'Hi ' + name;
   
// }
// console.log(showMessage());
// console.log(name);

// ************************************************************

// function sum2(a, b){  
//    return a + b;
// }

// console.log(sum2(4, 5));

// ************************************************************     

// let hello = function(name){
//     console.log('Hi, ' + name);
// };

// hello("Alina");

// ************************************************************     

// let sum = function (a, b){
//     return a + b;
// };
// console.log(sum(3, 7));



//=========== Arrow functions =====

// let sum = (a, b) => a + b;
// console.log(sum(3, 9));

// *************************************************

// let toPay = (price, weight) => price + weight;
// console.log(toPay(3.22, 7));

// *************************************************
// let double = n => n * 2;
// console.log(double(7))

// *************************************************
// if we don't know the amount of arguments
//  ...args ==> собери оставшиеся параметры и положи их в массив args

// function showArg(...args){
//     console.log(args);

//     let sum = 0;
//     for(let i = 0; i < args.length; i++){
//         sum += args[i]
//     }
//     console.log(sum);
// }
// showArg(10,20,30,40)

// *************************************************
//               Methods
//  Methods: Math.round(), Math.floor(); Math.ceil(); Math.trunck();

// // 
// (function myFunction(){
//     var a  = Math.round(0.406);
//     var b  = Math.round(0.909);
//     var c  = Math.round(5.00789);
//     var d  = Math.round(5.412345);
//     var e  = Math.round(-5.10234);
//     var f  = Math.round('');
//     console.log(a, b, c, d, e, f);
// })();

// // rounding a number down to its nearest integer

// (function myFunction(){
//     var a  = Math.floor(0.406);
//     var b  = Math.floor(0.909);
//     var c  = Math.floor(5.00789);
//     var d  = Math.floor(5.412345);
//     var e  = Math.floor(-5.10234);
//     var f  = Math.floor('');
//     console.log(a, b, c, d, e, f);
// })();



// // Rounding a number up  
// (function myFunction(){
//     var a  = Math.ceil(0.406);
//     var b  = Math.ceil(0.909);
//     var c  = Math.ceil(5.00789);
//     var d  = Math.ceil(5.412345);
//     var e  = Math.ceil(-5.10234);
//     var f  = Math.ceil('');
//     console.log(a, b, c, d, e, f);
// })();



// This method will NOT round the number up/down to the neares integer, 
// but simply remove the decimals.

// (function myFunction(){
//     var a  = Math.trunc(0.406);
//     var b  = Math.trunc(0.909);
//     var c  = Math.trunc(5.00789);
//     var d  = Math.trunc(5.412345);
//     var e  = Math.trunc(-5.10234);
//     var f  = Math.trunc('');
//     console.log(a, b, c, d, e, f);
// })();
// *************************************************
//       Numbers
//  num.toFixed(n)
// The methof toFixed(n) rounds the number to n digits after the
// point and returns a string representation of the result.

// console.log((5.0009).toFixed(2));
// console.log((5.0009).toFixed());
// console.log((6.78).toFixed(4));
// console.log((5.9).toFixed());


// // *************************************************

// // Number.isInteger(num) - Are these integer? 
// console.log(Number.isInteger(123));
// console.log(Number.isInteger(-123));
// console.log(Number.isInteger(1.23));
// console.log(Number.isInteger("123"));

// console.log(12 % 1 === 0);
// console.log(12.1 % 1 === 0);

// *************************************************
// function fibonacci(n){
//     const fibArr = [0, 1];
//     for(let i = 2; i < n; i++){
//        fibArr.push(fibArr[i - 2] + fibArr[i - 1])

//     }
//     return fibArr;
// }
// console.log(fibonacci(10))

// *************************************************
// Write the function that gets a name and display in reverse

// function reversName(s){
//     let result = '';
//     for(let i = s.length - 1; i >=0; i--){
//         result += s[i];
//     }

//     return result;
// }
// console.log(reversName('Alina'))



// // v2:
// function reversName(s){
//     console.log(s.split(''));

//     return s.split('').reverse().join('')
// }
// console.log(reversName('Alina Kalinka'))

// 
// function reversName(s){
//     arr = s.split('');
//     console.log('split: ' + arr)
//     console.log('reverse: ' + arr.reverse());


//     return s.split('').reverse().join('')
// }
// console.log(reversName('Example of Name'))


//  Write the function draw that gets the quantity of rows n and return row include
// *****
// ****
// **
// *

function draw(n){
    let str = "";
    for (let i = n; i >= 1; i--){
        str += "*".repeat(i) + '\n';
    }
    return str;
}
console.log(draw(7));

