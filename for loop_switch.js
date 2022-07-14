// Lesson 3, May 19

// =============== SWITCH ===========
//https://learn.javascript.ru/switch

//Конструкция switch заменяет собой сразу несколько if

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:     // optional
//     // code block
// }

// в каждом case переменная x проверяется на _строгое_ равенство (===)

// Название дня недели
// 1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 
// 5 - 'Friday', 6 - 'Saturday', 7 - 'Sunday'. 
// Any other number - 'Wrong day'.

// let numberOfDay = 7;
// switch (numberOfDay) {  //2
//   case 0: {
//     console.log('Sunday');
    
//    }
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday'); // print
//     break;
//   case 3:
//      console.log('Wednesday');
//     break;
//   case 4:
//      console.log('Thursday');
//     break;
//   case 5:
//      console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
//   case 7:
//     console.log('Sunday');
//     break;
//   default:
//    console.log('Wrong day');
// }

// switch (numberOfDay) {  //2
 
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//      console.log('Business day');
//     break;
//   case 0:
//   case 6:
//   case 7:
//     console.log('Weekend');
//     break;
//   default:
//    console.log('Wrong day');
// }

// Если break нет, то выполнение пойдёт ниже по следующим case, до 
// ближайшего break (или до конца switch).


//==========================================================================
// loops (for, while, do...while)
//========================================================================== 

// =====================  for loop

// for (initialization; condition; step(increment/decrement)) {
//   ... loop body ...
// }

// for (let i = 0; i < 3; i++) { 
//   console.log(i);
// }  

// for (let i = 0; i > 3; i++) {  // не работает
//   console.log(i);
// }  

// начало	let i = 0	Выполняется один раз при входе в цикл
// условие	i < 3	Проверяется перед каждой итерацией цикла. 
//               Если оно вычислится в false, цикл остановится.
// тело	console.log(i)	Выполняется снова и снова, пока 
//               условие вычисляется в true.
// шаг	i++	Выполняется после тела цикла на каждой итерации 
//                перед проверкой условия.

// ------------ repeat string

// let str = "Hello"; // repeat 7
// let newStr = "";
// for (let i = 1; i <= 7; i++) { // 0 1 2 3 4 5 6
//   newStr = newStr + str;
// }
// console.log(newStr);

// // str.repeat(n)

// console.log(str.repeat(7));

// ------------ find sum

// let sum = 0;
//  for (let i = 1; i <= 10; i++) {  
//   sum = sum + i;
// }  
// console.log(sum);

// ------------ exponentiate

// let num = 5;  //  ^3
// let result = 1;
// for (let i = 1; i <= 3; i++) {    // i = 1.  result = 1 * 5 = 5
//   result = result * num;          // i = 2.  result = 5 * 5 = 25
//     }                             // i = 3   result = 25 * 5 = 125
// console.log(result);


// ------------ change string

//  Tasks: 1. print to the console all ltters of the word in turn
//         2. print the word with spaces between letters
// let str = "JavaScript"; // letter of first index: str[0]   
   // letter of last index: str[str.length - 1]

// let str = "JavaScript";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let newS = "";
// for (let i = 0; i < str.length; i++) {
//   if (i == str.length - 1) {
//     newS = newS + str[i]
//   } else newS = newS + str[i] + " ";
// }
// console.log(newS);

// let newS = "";
// for (let i = 0; i < str.length; i++) {
//   newS = newS + " " + str[i] ;
// }
// newS.trim();
// console.log(newS);

// https://www.w3schools.com/jsref/jsref_trim_string.asp
//  ------------ Reverse 

// let x = "Palindrome";
// x = x.toLowerCase();
//   let str = '';
//   for(let i = x.length - 1; i >= 0; i--) {  // i = i - 1
//     str = str + x[i];    //  str += x[i];
//   }
// console.log(str);



//===================== break;  continue 

// Директива break ==> полностью прекращает выполнение цикла

// continue ==> прерывает текущую итерацию циклов и 
// продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++) {
//   if ( i === 7 ) break;
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if ( i === 7 ) continue;
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if ( i % 2 == 0) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 10; i = i + 2) { 
//   console.log(i);
// }

// Нельзя использовать break/continue справа от оператора „?“
// let a = 7;
// (a > 5) ? console.log(a) : continue;



//    -------- inner loops

// 1        // i == 1
// 12       // i == 2
// 123      // i == 3
// 1234     // i == 4
// 12345    // i == 5

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i ; j++) {
//     str = str + j;
//   }
//     console.log(str);
// }

// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i ; j++) {
//     str = str + j;
//   }repear
//     console.log(str);
// }


// перенос строки:  \n
// console.log('***' + '\n' + '***');



// ===================== while

// while (condition) {
// // code block
// }

// let i = 0;
// while (i > 3) { 
//   console.log( i );
//   i++;
// }

// j = 7
// while (j != 0) {
//   console.log(j);
// 
// }


// ================= do ... while

// do {
//   // code block
// } while (condition);


// let k = 0;
//  do { 
//   console.log( k );
//   k++;
// } while (k > 3)


//  ====================



// ========================================
//              Codewars
// ========================================

// https://www.codewars.com/kata/55afed09237df73343000042  // lucky number
// https://www.codewars.com/kata/5865918c6b569962950002a1  // counter!!


//  --------------- Switch
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
// https://www.codewars.com/kata/572059afc2f4612825000d8a
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript 

//  --------------- Loops
// Easy
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript  // while
// https://www.codewars.com/kata/562926c855ca9fdc4800005b  // power
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript  
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba   //sum of digits
// https://www.codewars.com/kata/57f8ee485cae443c4d000127
// https://www.codewars.com/kata/5704aea738428f4d30000914 
// https://www.codewars.com/kata/57f759bb664021a30300007d   // !!!  a <-> b, c

// Middle
// https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript // loop
// //Use:     charCodeAt(); https://www.w3schools.com/jsref/jsref_charcodeat.asp

// www.codewars.com/kata/5b180e9fedaa564a7000009a  // Upper - Lower Cases
// www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/ 
// https://www.codewars.com/kata/577bd026df78c19bca0002c0    
// https://www.codewars.com/kata/546e2562b03326a88e000020 
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5 
// https://www.codewars.com/kata/55908aad6620c066bc00002a

//  -------------- Others Codewar tasks:
// Easy
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript   //  If…else
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript  // repeat()
// www.codewars.com/kata/52e9aa89b5acdd26d3000127      repeat()
// www.codewars.com/kata/557af9418895e44de7000053    repeat()
// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript   //  charCodeAt();
// https://www.codewars.com/kata/53369039d7ab3ac506000467  // boolean
// https://www.codewars.com/kata/580a094553bd9ec5d800007d  //  if… else
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7   // upperCase
// https://www.codewars.com/kata/570e8ec4127ad143660001fd 
// https://www.codewars.com/kata/557af9418895e44de7000053 
// https://www.codewars.com/kata/50654ddff44f800200000007   // if… else

// Middle
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript  //  conditions







