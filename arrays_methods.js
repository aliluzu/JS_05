// ======= push(); pop(); shift(); unshift;
// ======= arr.at(i); == arr[i];
// ======= join()l join(separator); return => string

// ======= Array.isArray();
// returns true if an object is an array, otherwise false.

// console.log(Array.isArray([]));
// console.log(Array.isArray([1,2]));
// console.log(Array.isArray());
// console.log(Array.isArray(1));
// console.log(Array.isArray(null));


// ======= includes()
// Check if an array contains the specified elemnt
// arr.includes(elemnt, start)
//  start - index -> can be negative number

// const arr = ['a', 1, null, 'yes', false, 1];

// console.log(arr.includes('a'));
// console.log(arr.includes('a', 1));
// console.log(arr.includes('1'));
// console.log(arr.includes(1, -2));
// console.log(arr.includes('ye'));
// console.log(arr.includes(null));


// // ======= reverse()
// // Reverse the order of the elemts in array 
// // arr.reverse()

// let str = "JavaScript";
// console.log(str.split(''));
// console.log(str.split('').reverse());
// console.log(str.split('').reverse().join(""));
// console.log(str.split('').reverse().join()[2]);

// =======indexOf, lastIndexOf()
// Search the array for an elemnt and returns its position
// return -> number, -1 if item is not found.
// arr.indexOf(item, from) searches "item" starting at index "from"
// arr.lastIndexOf(item, from) - The same but starts from right to left

// let arr = [1, 0, 0, false];

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));

// console.log(arr.lastIndexOf(0));

// ======= slice()
// returns selected elements in an array, as a new array
// array.slice(start, end)
// start - index of start for copy
// end - до какого индекса(не вклюяительно!)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.slice())
// console.log(arr.slice(1, 3))
// console.log(arr.slice(2))
// console.log(arr.slice(-2))
// console.log(arr.slice(0, -3))
// console.log(arr.slice(6))


//  ======= splice()
// Adds/Removes elements from an array
// arr.splice(index, howmany, iteml, ...., itemX)
// index Required! The position to add/remove items.
// howmany Optional.Number of items to be removed.
// iteml, ....., itemX Optional. New elements(s) to be added.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// // fruits.splice(2, 2);
// fruits.splice(2, 0, "Pear");
// console.log(fruits);

// Change the array
// Returns array of removed elements 
// console.log("======================================================")

// const arr = ['hi', 'by', 'hello', 'good', 'girls', 'boy'];

// let removed = arr.splice(2, 3);
// console.log(removed);
// console.log(arr);

// ========================= sort()
// Sorts the lementss of an Array
// arr.sort()   arr.sort(compareFunction)
// Change the array

// const strArr = ['ANNA', 'David', 'Jane', 'Boris'];
// // console.log(strArr.sort());

// const numArr = [25, 1, 100, 45, 7, 90];
// console.log(numArr.sort());

// // arr.sort((a, b ) => a - b);
// console.log('\n')
// console.log('======Sort from 1 to 100========')
// console.log(numArr.sort((a,b) => a - b));

// min, max

// arr.sort((a, b ) => b - a);
// console.log('\n')
// console.log('======Sort from 100 to 1========')
// console.log(numArr.sort((a,b) => b - a));

// console.log('\n')
// let min = numArr[0];
// let max = numArr.at(-1);

// console.log(min, max);



// Sort of length of string:

// const arr = ['cap', 'logo', 'apple', 'banana', 'loop'];
// arr.sort((a, b ) => a.length - b.length);
// console.log(arr); 

// =====find()
// Returns the _value_ of the first element in an array that pass a test
// array.find(function)
// Arrow function:
// find ((element) => { /* ... */})
// find ((element, index   ) => { /* ... */})
// find ((element, index, array ) => { /* ... */})

// 1. Find the first element > 0.

// const arr = [-1, -2, -3, 6, -5, 8, 13];

// let num = arr.find(el => el > 0);
// console.log(num);

// 2. Find the first element < 0 and index > 3

// const arr = [1, 2, -3, 4, -5, -6, -7];
// let num2 = arr.find((el, i) => el < 0 && i > 3);
// console.log(num2)

// 3. Find the first element > 30

// const arr = [1, 2, -3, 6, -5, 0];
// let num = arr.find(el => el > 30);
// console.log(num);


// ========================= findIndex()
// Return the _index_ of the first element in an array that pass a test
// array.findIndex(function)

// findIndex((elemnt) => {})
// findIndex((elemnt, index) => {})
// findIndex((elemnt, index, array) => {})

// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"]

// const index = fruits.findIndex(el => el === "blueberries");
// console.log(index);

// const index2 = fruits.findIndex(el => el.length > 6);
// console.log(index2);

// // function ==> Number.isInteger()

// let arr = [0.6, 1, 2, 3.3, 4.4, 5];
// console.log(arr.findIndex(Number.isInteger));


// ========================= filter()
// Creates _a new array_ with every element in an array that pass a test
// array.filter(function(currntValue, index, arr))

// 1. Find element >=0.

// const arr = [-1, -2, 3, 6 , -5, 0];

// const newArr =  arr.filter(el => el >=0);
// console.log(newArr);
// console.log(arr);

// 2. Find the element == 0

// const arr = [1, 2, -3, 0, 4, -5, -6, -7];

// const num2 =  arr.filter(el => el == 0);
// console.log(num2);

// 3.  Return array with odd index

// const arr = ["a", "b", "c", "d", "e", "f"];
// const filtered  = arr.filter((element, index) => index % 2)
// console.log(filtered);

// 4. Chanching  all elemnts 

// const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
// // const modifiedWords = words.filter((el, i, arr) => {
// //     arr[i]+= 'extra'
// // });

// const modifiedWords = words.filter((el, i, arr) => arr[i] += 'extra');

// console.log(modifiedWords);
// console.log(words)

// 5. function ==> Number.isInteger()

// let arr = [1, 2, 3.3, 4.4, 5];
// let newArr = arr.filter(Number.isInteger);
// console.log(newArr, arr);


// ================= every()
// Checks if every element in an array pass a test
// return ==> true/ false &&
// array.every(function(currentValue, index, arr))

// const arr = [10, -2, 0, 1, 9, 5];
// console.log(arr.every(el => el > 0));

// const arr = [-10, -2, 2, 34, 90, 52];
// console.log(arr.every(el => el % 2 === 0));

// const arr = [];
// console.log(arr.every(el => el % 2 === 0));

//  ======== compare arrays

// const a = ['to', 'be', 'or', 'not', 'to', 'be'];
// const b = ['to', 'be', 'or', 'not', 'to', 'be'];

// console.log(a == b);

// function checksString(arr){
//     const a = ['to', 'be', 'or', 'not', 'to', 'be'];
//     return a.every((el, i) => el === arr[i])
// }

// console.log(checksString(['to', 'be', 'or']));
// console.log(checksString(['to', 'be', 'or',  'not', 'to', 'be']));
// console.log(checksString(['to']));

//  ======== some ()
// Checks if any of the elements in an array pass a test
// return ==> true / false ||
// array.some(function(currentValue, index, arr))

// 1. some el < 0

// const arr = [-10, 2, 0, 1, 9, 5];
// console.log(arr.some(el => el < 0)); /**true */

// 2. some el % 2; odd

// const arr = [-10, -2, 2, 34, 90, 52];
// console.log(arr.some(el => el % 2)); /**false */

// // 3. some el.length > 5.
// const arr = [-10, -2, 2, 34, 90, 52];
// console.log(arr.some(el => el % 2 !==0)); /**false */


// =========================== forEach()
// Calls a function for each array element
// arr.forEach(function(item, index, array))

// 1.conslole.log each el

// const arr = ['1', '2', '3', 'Go!'];
// arr.forEach(el => console.log(el));

// 2. return index of el next to each el

// const arr = ['One', 'Two', 'Three', 'Go!'];
// const newArr = [];

// arr.forEach(function(el, i){
//     newArr.push(i, el) /** для каждлого элемента(el) из массива arr запуш в новый аррай индекс и элемент*/
// });
// console.log(newArr)


// =========================== map
// Creates _a new array_ with the result of calling a function 
// for each array element
// Если нам нужно перебрать массив и вернуть данные для каждого элемента -  мы используем
// Он создает новый массив, котрый будет состоять из результатов вызова
// function(item, i, arr) для каждого элемента arr.

// array.map(function(currentValue, index, arr))

// 1. power of 2
// const arr = [1, 2, 3, 4];
// const numPower = arr.map(el => el ** 2);
// console.log(numPower);

// 2. Дан массив десятичных числе arr.
// для чисел, имеющих честный индекс, произвести округление
// значение отсальных сделать равным 0.

// const arr = [1.57, 2.1, 3.8, 10.67, 25.6];
// const nums = arr.map((el, i) => i % 2 === 0 ? Math.round(el) : 0);
// console.log(nums); /*[2, 0, 4, 0, 26]*/

// // 3. from number to string
// const arr = [-37, -8, 56.3, 0, 18.9];
// const newArr = arr.map(el => String(el));
// console.log(newArr);

// // 4.
// const numbers = [1.5, -4.7, 9.09];
// const trunc = numbers.map(Math.trunc);
// console.log(trunc);
// console.log(numbers);

// 5. from str to num
// const arr = ['1.5', '4.7', 9.09];
// console.log(arr.map(Number));

// =========== reduce()

// Reduce the value of an array to a single value(going left-to-right)
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// reduce() применяет переменную в него функцию один раз для каждого 
// элемента в порядке возростания и возращает одно результирующее значение.

// let arr = [1,2 ,3, 4, 5]
// let result = arr.reduce((sum, el) => sum + el, 0);
// console.log(result);

let arr2 = [1,2 ,3, 4, 5]
let result = arr2.reduce((mult, current) => mult * current);
console.log(result);


// let arr2 = [1, 2, 3, 4, 5];
// let result = arr2.reduce((mult, current) => mult * current, 0);
// console.log(result);


// =========== reduceRight()
// Reduce the value of an array to a single value (going right - to  - left)
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

// Метод arr.reduceRight работает аналогично reduce(), но проходит по массиву справа налево.