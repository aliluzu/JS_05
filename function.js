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