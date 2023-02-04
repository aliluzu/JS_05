let num_1 = 7;
let num_2 = 8;

let sum = num_1 + num_2;
console.log(sum)

let min = num_1 - num_2;
console.log(min);


let str = "hello";
let str2 = "test of  running vs code"

console.log(str + "  " + str2);

// -------------------

let str5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//A
// A B 
// A B C 
//A B C D
//A B C D E

for(let i = 1; i <= 8; i++){
    let result = "";
    for(let j = 1; j <= i; j++){
        result = result + " "+ str5[j - 1];
    }
    console.log(result);
}

console.log('-------------------------- next-------------------------------\n');