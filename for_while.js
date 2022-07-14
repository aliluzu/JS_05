// // Esli est ili to budet TRUE


// console.log(true || true);
// console.log(true || false);
// console.log(false || true);

// // Esli est i to budet false

// console.log(true && true);
// console.log(true && false);

// // ========================================1
// let item_1 = 5;
// let item_2 = 10;

// if(item_1 > 3 || item_2 < 15) {
//   console.log("Idi Kushat")
// }else{
//   console.log("Hodi golodnij")
// }

// // ========================================2

// let item_1 = 5;
// let item_2 = 100;

// if(item_1 > 3 || item_2 < 15) {
//   console.log("Idi Kushat")
// }else{
//   console.log("Hodi golodnij")
// }

// // ========================================3
// let item_1 = 5;
// let item_2 = 100;

// if(item_1 > 3 && item_2 < 15) {
//   console.log("Idi Kushat")
// } else{
//   console.log("Hodi golodnij")
// }


// // ========================================4
// let item_1 = 2;
// let item_2 = 100;
// let item_3 = 50;

// if(item_1 > 3 && item_2 < 15 || item_3 == 50) {
//   console.log("Idi Kushat")
// } else{
//   console.log("Hodi golodnij")
// }
// // ========================================5

// let item_1 = 2;
// let item_2 = 100;
// let item_3 = 50;

// if(item_1 > 3 && item_2 < 15 || item_3 != 50) {
//   console.log("Idi Kushat")
// } else{
//   console.log("Hodi golodnij")
// }

// // ========================================6

// while(true){
//   console.log("Idi kushat")
// }

// // ========================================7
// let item_1 = 0


// while(true){
//   console.log(item_1 + " Idi kushat")
//   item_1++
// }


// // ========================================8

// let item_1 = 0
// let item_2 = 20


// while(item_2 > 19){
//   console.log(item_1 + " = Idi kushat")
//   item_1++
// }
// // ========================================9

// let item_1 = 0
// let item_2 = 20


// while(item_1 < 20){
//   console.log(item_1 + " = Idi kushat")
// //   item_1++
// // }
// // // ========================================10

// let item_1 = 0
// let item_2 = 20


// while(item_1 < 20 && item_2 < 30){
//   console.log(item_1 + " = Idi kushat")
//   console.log(item_2 + " = -------second")
//   item_1++
//   item_2++
// }

// // ========================================11
// let temperature = 0



// while(temperature < 40 ){
  
//   if (temperature < 10){
//     console.log("temperature = ", temperature, "Xolodno")
//   }else if (temperature >= 10 && temperature < 30){
//     console.log("temperature = ", temperature, "XOROSHO!!!!")
//   }else {
//     console.log("temperature = ", temperature, "KAPEC")
//   }
  
//   temperature++
// }


// // // ========================================2
// for(let i = 0; i < 10; i++){
//   console.log(i, " = FOR")
// }
  
// // ========================================13

// for(let temperature = 0; temperature < 10; temperature++){
//   if (temperature < 3){
//     console.log("temperature = ", temperature, "Xolodno")
//   }else if (temperature >= 3 && temperature < 7){
//     console.log("temperature = ", temperature, "XOROSHO!!!!")
//   }else {
//     console.log("temperature = ", temperature, "KAPEC")
//   }
// }
  
// // ========================================14
// // let names = ['Kate', 'Alex', 'Ivan', 'Ignat','Andrej','Vika']


// // for(let imena in names){
// //   console.log(imena, names[imena])
// // }

// // ========================================15
// // let names = ['Kate', 'Alex', 'Ivan', 'Ignat','Andrej','Vika']


// // for(imena of names){
// //   console.log(imena)
// // }

// // ========================================16

// let names = ['Kate', 'Alex', 'Ivan', 'Ignat','Andrej','Vika']


// for(imena of names){
  
//   if(imena == 'Ignat'){
//     break
//   }
  
//   console.log(imena)
// }


// let successCode = true
// let messageStatus = "OK"

// while(successCode ==true && messageStatus == "OK"){
//   if(successCode == false){
//     console.log("successCode = ", successCode, "False")
//   }
//   successCode++
//   messageStatus++
// }
// // ==========================================================================


// // let successCode = true
// // let messageStatus = "OK"

// // while(successCode ==true && messageStatus == "OK"){
// //   if(successCode == false){
// //     console.log("successCode = ", successCode, "False")
// //   }
// //   successCode++
// //   messageStatus++
// // }


// // res.body.Selections.forEach(element => {
// //   if(typeof(element.SelectionId) != ) {

// //   }
// //   if(element.SelectionName != null && typeof() !=)
// // });
// // ==========================================================================

// pm.test("Successful POST request", () => {
//   pm.expect(pm.response.code).to.be.oneOf([201,202]);
// });


// pm.test("Value is in valid list", () => {
//   pm.expect(pm.response.json().type)
//     .to.be.oneOf(["Subscriber", "Customer", "User"]);
// });


// pm.test('Validate schema', function () {
//   var result=tv4.validateResult(pm.response.json(), schema);

//   if(!result.valid){
//       console.log(result);
//   }
//   pm.expect(result.valid).to.be.true;
// });

// const allEqual = (arr, key) => {
//     let firstNonNull = null;
//     return arr.every((v) => {
//         const value = v[key];
//         if (value === null) {
//             return true;
//         }
//         if (firstNonNull === null) {
//             firstNonNull = value;
//             return true;
//         }
//         return value === firstNonNull;
//     });
// };


// function checkObject(arr){
//     const result = Array.isArray(arr)
//     

//     if(result) {
//         console.log(`[${arr}] is an array.`)
//     }else {
//         console.log(`${arr} is not an array.`)
//     }

//     if(selectionid){
//         console.log(`[${arr}] is string.`)
//     }

// }

/*
            if (selectionsModel[selectionKey]) {
                const attribute = selectionsModel[selectionKey]
                const typeOfValueIsValid = typeof selectionValue === attribute.type;
                if (!typeOfValueIsValid) {
                    errors.push({
                        selectionIndex: index,
                        error: `${selectionKey}'s value (${typeof selectionValue}) is incompatible with required value of ${attribute.type}`
                    })
                }
            } else {
                errors.push({
                    selectionIndex: 0,
                    error: `${selectionKey} is missing in selections at index ${0}`
                })
            }
        } 
*/ 

const Selections = [
    {
        "SelectionId": 27857,
        "SelectionName": "Alpla HC Hard",
        "MarketTypeId": 90010,
        "MarketName": "MAIN RESULTS",
        "MatchId": 790265,
        "MatchName": "Alpla HC Hard - Besiktas JK, ",
        "MatchStartDate": "2021-12-29T00:00:00+02:00",
        "RegionId": 17,
        "RegionName": "Europe",
        "CompetitionId": 3294,
        "CompetitionName": "Champions League. Qualification. Men",
        "SportId": 9,
        "SportName": "Handball",
        "Price": 1.4,
        "IsLive": false,
        "State": 3
    },
    {
        "SelectionId": 27857,
        "SelectionName": "HC Dinamo",
        "MarketTypeId": 90010,
        "MarketName": "MAIN RESULTS",
        "MatchId": 790268,
        "MatchName": 8,
        "MatchStartDate": "2021-12-29T00:00:00+02:00",
        "RegionId": 17,
        "RegionName": "Europe",
        "CompetitionId": 3294,
        "CompetitionName": "Champions League. Qualification. Men",
        "SportId": 9,
        "SportName": "Handball",
        "Price": "1.5",
        "IsLive": true,
        "State": 3
    },
    {
        "SelectionId": '27860',
        "SelectionName": "Buducnost Banovici",
        "MarketTypeId": 90010,
        "MarketName": "MAIN RESULTS",
        "MatchId": 790289,
        "MatchName": "Buducnost Banovici - Buducnost T-Mobile, ",
        "MatchStartDate": "2021-12-29T00:00:00+02:00",
        "RegionId": 17,
        "RegionName": "Europe",
        "CompetitionId": 620,
        "CompetitionName": "Champions League. Women",
        "SportId": 9,
        "SportName": "Handball",
        "Price": "1.6",
        "IsLive": false,
        "State": 3
    }
];

const selectionsModel = {
    SelectionId: {type: 'number', required: true},
    SelectionName: {type: 'string', required: false},
    MarketTypeId: {type: 'number', required: false},
    MarketName: {type: 'string', required: false},
    MatchId: {type: 'number', required: true},
    MatchName: {type: 'string', required: false},
    MatchStartDate:{type: 'string', required: false},
    RegionId: {type: 'number', required: true},
    RegionName: {type: 'string', required: false},
    CompetitionId: {type: 'number', required: true},
    CompetitionName:{type: 'string', required: false},
    SportId: {type: 'number', required: true},
    SportName: {type: 'string', required: false},
    Price: {type: 'number', required: true},
    IsLive: {type: 'boolean', required: true},
    State: {type: 'number', required: true}
}

const validateSelection = (selection, index) => {
    const errors = [];
        for(const [modelKey, modelValueObject] of Object.entries(selectionsModel)) {    
            const selectionValue = selection[modelKey];
            if(selectionValue === undefined && modelValueObject.required) { //selection property is not found but this property is required, then create an error
                errors.push({
                    selectionIndex: index,
                    error:`${modelKey} is missing in selections at index ${index}`
                })
            }else { //selection property is not missing but type of property's value is not correct as expected, then create an error.
                if(selectionValue !==undefined && typeof selectionValue !== modelValueObject.type) {
                    errors.push({
                        selectionIndex: index,
                        error: `${modelKey}'s value (${typeof selectionValue}) is incompatible with required value of ${modelValueObject.type}`
                    })
                }
            }
        }

    if (errors.length) {
        console.log(errors)
    }else {
        console.log( "No errors found")
    }
}

const checkEventStatus = (selection) => {
    let status = ''//selection['IsLive'] ? "Event is Live" : "Prematch";
    if (selection['IsLive']) {
       status =  "Event is Live";
    }else {
        status =  "Prematch";
    }
    console.log(status)
}

Selections.forEach((selection, index) => {
    validateSelection(selection, index)
    checkEventStatus(selection)
})

// function isKeyExists(obj,key){
//     if( obj[key] == undefined ){
//         return false;
//     }else{
//         return true;
//     }
// }

// let result0 = isKeyExists(Selections,"mykey0")
// console.log("Check for the non-existing key, is key exists > "+ result0)

// let result1 = isKeyExists(Selections[0],"SelectionName")
// console.log("Check for the existing key, is key exists > "+ result1)

// ==============================================


// Selections.forEach(selection => {
//     function isKeyExists(obj,key){
//         if( obj[key] == undefined ){
//             return false;
//         }else{
//             return true;
//         }
//     }
    
//     let result0 = isKeyExists(Selections[0].CompetitionId)
//     console.log("Check for the non-existing key, is key exists > "+ result0)
    
//     let result1 = isKeyExists("From first Selections", Selections[0].CompetitionName)
//     console.log("Check for the existing key, is key exists > "+ result1)

//     if(result0 == true){
//         for (const [key, value] of Object.entries(selection)) {
//             console.log(`${key} => ${typeof value == 'number'}`);
//         }
//     }if(result1 == true){
//         for (const [key, value] of Object.entries(selection)) {
//             console.log(`${key} => ${typeof value == 'string'}`);
//         }
//     }
//     else{
//         console.log("Eroro")
//     }
// })


// checkObject(Selections)


// console.log(Selections.RegionId)


// const selectionModel = Selections[0];


// for (const [key, value] of Object.entries(selectionModel)) {
//     console.log(`${key} => ${typeof value }`);
//   }

// const SeleAr = Selections

// Selections.forEach(selection => {
//     for (const [key, value] of Object.entries(selection)) {
//         console.log(`${key} => ${typeof value}`);
//     }
// })




// Selections.forEach(selection => {

//     for (const [key, value] of Object.entries(selection)) {
//         console.log(typeof value);
//       }

// })

// for(const value of Selections){
//     console.log(value)
// }


// var obj = [
//     { name: 'Max', age: 23 },
//     { name: 'John', age: 20 },
//     { name: 'Caley', age: 18 }
// ];

// // const checkTypeValue = function(value){
// //     if(typeof value.name == "string"){
// //         console.log(value.name)
// //     }else{
// //         console.log("Error")
// //     }
// // }
// // checkTypeValue(value.name)
 
// for (var value of obj) {
//     console.log(value.name)
// }
console.log("===========================================================")

let PotentialWinnings =  "/"
let pot_num = +PotentialWinnings

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber(pot_num)
