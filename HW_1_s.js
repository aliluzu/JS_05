const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

// if (age_1 < age_2) {
//     console.log('You don't have access cause your age is ' + age_1 + 'Its less than ' + age_2)
// } else if (age >= age_2 && < age_3) {
//     console.log('Welcome!')
// } else if(age_1 > age_3) {
//     console.log('Keep calm and look Culture channel')
// } else {
//     console.log('Technical work".')
// }

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


// const checkAge = function(age) {
//     if (age < age_2) {
//         console.log('You do not have access cause your age is ' + age  + '. Its less than ' + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         console.log('Welcome !')
//     } else if(age > age_3) {
//         console.log('Keep calm and look Culture channel')
//     } else {
//         console.log('Technical work".')
//     }
// }

// checkAge(17)
// checkAge('aaaaa')


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge = function(age) {
// if(typeof age == 'number') {

//     if (age < age_2) {
//         console.log('You do not have access cause your age is ' + age  + '. Its less than ' + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         console.log('Welcome !')
//     } else if(age > age_3) {
//         console.log('Keep calm and look Culture channel')
//     } else {
//         console.log('Technical work".')
//     }
// } else {console.log('Not integer value')}
// }

// checkAge(17)
// checkAge('aaaaa')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// const checkAge = function(age) {

//     age = Number(age)
    

//     // if(!isNaN(age)) {
//     // if(Number(age)) {

//         if (+age) {
//         if (age < age_2) {
//             console.log('You do not have access cause your age is ' + age  + '. Its less than ' + age_2)
//         } else if (age >= age_2 && age < age_3) {
//             console.log('Welcome !')
//         } else if(age > age_3) {
//             console.log('Keep calm and look Culture channel')
//         } else {
//             console.log('Technical work".')
//         }
// } else {console.log('Not integer value')}
// }
    
// checkAge(17)
// checkAge('22')
// checkAge('222222aaaaa')
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) {

    age = Number(age)
    

    // if(!isNaN(age)) {
    // if(Number(age)) {

        if (+age) {
        if (age < age_2) {
            console.log('You do not have access cause your age is ' + age  + '. Its less than ' + age_2)
        } else if (age >= age_2 && age < age_3) {
            console.log('Welcome !')
        } else if(age > age_3) {
            console.log('Keep calm and look Culture channel')
        } else {
            console.log('Technical work".')
        }
} else {console.log('Not integer value')}
}
    
checkAge(17)
checkAge('22')
checkAge('222222aaaaa')

let agePromt = prompt('Enter age')
checkAge(agePromt)