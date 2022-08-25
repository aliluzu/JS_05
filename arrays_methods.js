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

const arr = ['a', 1, null, 'yes', false, 1];

console.log(arr.includes('a'));
console.log(arr.includes('a', 1));
console.log(arr.includes('1'));
console.log(arr.includes(1, -2));
console.log(arr.includes('ye'));
console.log(arr.includes(null));


// ======= reverse()
// Reverse the order of the elemts in array 
// arr.reverse()

let str = "JavaScript";
console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join());

// =======indexOf, lastIndexOf()
// Search the array for an elemnt and returns its position
// return -> number, -1 if item is not found.
// arr.indexOf(item, from) searches "item" starting at index "from"