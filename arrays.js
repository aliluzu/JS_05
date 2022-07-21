// Lesson 4, May 26

// =============== Arrays ===========
// https://learn.javascript.ru/array

// массив - упорядоченная коллекция данных
// JavaScript arrays are resizable and can contain a mix 
// of different data types. 

// ------ объявление массива
// const arr = [];
// const arr = new Array();
// let array = [];

// const arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr1);

// const arr2 = new Array("maple", "pine", "oak", "aspen");
// console.log(arr2);

// const arr = [];   // пустой массив
// console.log(arr);

// let five = 5;   //variables
// let six = 6;
// let seven = "seven"

// const diffTypes = [null, "One", 2, true, undefined, five, six];
// console.log(diffTypes);

// const twoLevelArr = [[1, 2, 3], ["four", five, 'six'], seven];
// console.log(twoLevelArr);

// const threeLevelArr = [[1, 2, 3], ["four", [5, 555], 'six'], seven];
// console.log(threeLevelArr);

// console.log(threeLevelArr[2][1]);   //  "e"
// console.log(threeLevelArr[1][2][1]);   // "i"
// console.log(threeLevelArr[1][1][1]);   // 555

// console.log(threeLevelArr.length);   //


// console.log(typeof diffTypes);

// ------- обращение к массивам

// arr[index];    // индексы начинаются с 0
// arr.length;
// arr[arr.length - 1];  // принимает ноль и положительные индексы
// arr.at(index)       // принимает отрицательные индексы!

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// indexes:       0    1    2    3    4    5    6
//  or:                 . . .        -3   -2   -1   

// console.log(letters.length);
// console.log(letters[5]);
// console.log(letters[letters.length - 1]);
// console.log(letters.at(-2));

// --- обращение к не существующему элементу в массиве

// console.log(letters[10]);
// console.log(letters.at(-10));


// // ------------------------

// const arr2D = [[5, 6], [7, 8], [10, 11]];

// console.log(arr2D[0]);   //  [5, 6]
// console.log(arr2D[0][1]);    //6

// -------- изменение элемента

// let trees = ["maple", "pine", "oak", "aspen"];
// // trees = 7;
// console.log(trees);
// trees[1] = "ash";
// console.log(trees);


// trees[5] = "birch";
// console.log(trees, trees.length);

// --- compare with strings

// let string = "abcde";

// string[2] = 'C';
// console.log(string);

// const array = ['a', 'b', 'c', 'd', 'e'];

// array[2] = 'C';
// console.log(array);

            
// ========== Методы pop/push, shift/unshift ======

// push  ->  добавляет элемент(ы) в конец.
// pop ->  удаляет последний элемент (и возвращает этот элемент!)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// letters.push('f');
// let c = letters.push('g', 'h', 'i');

// console.log(letters,c);

// let a = letters.pop();
// console.log(letters, a);


// unshift -> Добавляет элемент(ы) в начало массива
// shift удаляет элемент в начале, сдвигая очередь, так 
// что второй элемент становится первым (и возвращает этот элемент!)

// const bigLetters = ['A', 'B', 'C', 'D', 'E'];

// bigLetters.unshift('Z');
// let d = bigLetters.unshift('X', 'Y');
// console.log(bigLetters, d);

// let b = bigLetters.shift();
// console.log(bigLetters, b);


// ------- объединение массивов
//  concatenation - не используется!

// console.log(letters + bigLetters);   // строка!!!
// console.log(String(letters));

// // push()    

// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// // arr1.push(arr2)
// console.log(arr1);

// push() + spread operator ...

// arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
// console.log(arr1);

// через третий массив

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// 

// ------ spread operator (...)

// const numbers = [4, 8, 99, 9, 7, 777, 54];
// console.log(...numbers);

// Math.max();
// console.log(Math.max(4, 8, 99, 9));

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

//----------- ==; === --------

// const arr = [1, 2];
// const arr1 = arr;

// console.log(arr === arr1); 
// console.log(arr > arr1);
// console.log(arr < arr1);

// =========================

// let arr = [1, 2, 3];
// let emptyArr = [];
// console.log(String(arr), String(emptyArr));
// console.log(Number(arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

// ========= split(); join(); ========

// split(); делит строку по указанному разделителю, возвращает массив
// split("");  => возвращает массив _всех_ символов

// let string = "Hello World";
// console.log(string.split(" "));
// console.log(string);

// join(); конвертирует массив в строку, по умолчанию 
// разделяет символы запятой 
 
// let array = ['a', 'b', 'c', 1, 2, 3];
// console.log(array.join());
// console.log(array);

// =========== Loops and Arrays

// const nums = [4, 8, 99, 9, 7, 777, 54];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }



// const code = [-1, 1, 2, 3, 4]
// const description = ['Internal error', 'Unknown error', 'Player not found', 'Campaign not found', 'Bet not found']
// let sum = ""
// for(let i = 0; i < code.length; i++){
//     sum = code[i] + " " + description[i];
// }
// console.log(sum)




// const code = [-1, 1, 2, 3, 4]
// const description = ['Internal error', 'Unknown error', 'Player not found', 'Campaign not found', 'Bet not found']
// let str = "";
// for(let i = 0; i < code.length; i++){
//     const errorCode = (code[i] + " " + description[i] + ", ");
//     str = str + errorCode;
// };
// console.log(str)



const code = [-1, 1, 2, 3, 4]
const description = ['Internal error', 'Unknown error', 'Player not found', 'Campaign not found', 'Not found']
let sum = ""
for(let i = 0; i < code.length; i++){
    sum = code[i] + " " + description[i];
    console.log(sum)
}
// console.log(sum)

// --- SUM

// let sum = 0; 
// for(let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }
// console.log(sum);

// --- select odd numbers

// const arr = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {    
//     arr.push(nums[i])
//   }
// }
// console.log(arr);


// --- find MAX

// const nums = [ 4, 8, 99, 9, -777, 7, 54];

// let max = nums[0];    
// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] > max) { 
//     max = nums[i];
//   }   
// }
// console.log(max);

// // --- find MIN

// let min = nums[0];    
// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] < min) { 
//     min = nums[i];
//   }   
// }
// console.log(min);


//  =========== for..of loop
// for (let el of array){}

// const nums = [4, 8, 99, 9, 7, 777, 54];

// for (let el of nums) {
//   console.log(el + 5);
// }
// console.log(nums);

// ===================== while
// while () {
// // code block
// }


// let i = 1;
// while (i < 3) { 
//   console.log( i );
//   i++;
// }

// let j = 7
// while (j != -1) {
//   console.log(j);
//   j--;
// }

// const trees = ["maple", "pine", "oak", "aspen", "birch"];
// let idx = 0;
// while (idx < trees.length) {
//   console.log(trees[idx]);
//   idx++;
// }

// ================= do ... while

// do {
//   // code block
// } while (condition);


// let k = 0;
//  do { 
//   console.log( k );
//   k++;
// } while (k > 3);

//  =========================================
//                 Codewars
// ===========================================

// First:
// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript 
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2  // !!! Find min !!!

// Easy
// https://www.codewars.com/kata/57cc975ed542d3148f00015b 
// https://www.codewars.com/kata/5721a78c283129e416000999  // For loop ; Array
// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript     // For loop ; Array
// https://www.codewars.com/kata/count-by-x 
// www.codewars.com/kata/598057c8d95a04f33f00004e   borders excludes
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript  // for || method
// https://www.codewars.com/kata/how-good-are-you-really   // for || method
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7    // count Monkey
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55   // Head-Tail
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e   // Lost Without a Map
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151 

// Middle
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript 
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9 
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099  // for || method
// https://www.codewars.com/kata/5888145122fe8620950000f0/train/javascript  // loop
// https://www.codewars.com/kata/583989556754d6f4c700018e  // кратные
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript 
// https://www.codewars.com/kata/539ee3b6757843632d00026b  //
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0  

// Hard
// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e   // Month.  6kyu
// https://www.codewars.com/kata/54e6533c92449cc251001667   // 6kyu
// www.codewars.com/kata/564d0490e96393fc5c000029   // coins
// https://www.codewars.com/kata/558fc85d8fd1938afb000014 
// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e  // 6kyu




