/*let arr = [1, "apple", null, 4, undefined];

console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr.at(-1));
*/


// let arr = [1, "apple", null, 4, undefined];
// let index = 0;

/*while(index <= arr.length){  /** from 0 to more or equal length *
    console.log(arr[index]);
    index++;
}**/

// while(index < arr.length){  /** from 0 to more length */
//     console.log(index, ' ', arr[index]);
//     index++;
// }
// console.log(index);
// console.log('End');



// -------------------------------------------------

/*let arr = properties;
let i = 0;
do{
    request of password
}while(password ==123);*/



// let arr = [1, "apple", null, 4, undefined];
// let i = 0;

// do {console.log(i)
//     i++;

// }while (i < 5);

// -------------------- for -----------------------------

/*let arr = [1, "apple", null, 4, undefined];
let index = 0;

while(index < arr.length){  
    console.log(arr[index]);
    index++;
}

console.log("")
console.log("**********************")

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/

// let arr = [1, 30, 5, 4, 3];
// let sum = 0;

// for(let i =0; i < arr.length; i ++){
//     sum += arr[i];
// }
// console.log(sum)


// ==================

let arr = [1, -30, 5, -4, 3];
let num = 0;

for(let i =0; i < arr.length; i++){
    if(arr[i]<0){
        console.log("This is the negative value: " + arr[i]);
    }else{
        console.log("This is the positive value: " +  arr[i]);
    }
}