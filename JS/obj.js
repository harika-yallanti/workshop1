// let laptopObj={
//     name:"Hp",
//     core:"ulter7",
//     cost:69000,
//     executeFn:()=>{
//         console.log("oBj is executed");
//     }
// };
// laptopObj.name="Lenova"; //we can change the values
// console.log(laptopObj);

// //dot notation and [] notation
// console.log(laptopObj.core);
// console.log(laptopObj["core"]);
// console.log(laptopObj.executeFn);//in executeFn a function is stored 
// console.log();
// laptopObj.executeFn()

// let a=[1,2,3,4,5,6,7,8,9];
// console.log(a.length);//.length is a property if we use length() then its error as it becomes method


//for is used for iterate the object and for each  is used for iterate the array
// let laptopObj={
//     name:"Hp",
//     core:"ulter7",
//     cost:69000,
//     executeFn:()=>{
//         console.log("oBj is executed");
//     }
// };
// for (let eachKey in laptopObj){
//     console.log(eachKey);
//     console.log(laptopObj[eachKey]);
//     console.log(laptopObj.eachKey);
// }

// let ar=[1,2,3,4,5,6];
// ar.forEach((eachEle)=>{
//     console.log(eachEle);
// });

// //ES6 concept->let,arrow functions,destructuring
// let arr=[1,2,3,4,5];
// let[firstValue,secondValue] = arr;
// console.log(firstValue,secondValue);

//destructuring (introduced in ES6)
let laptopObj={
    name:"Hp",
    core:"ulter7",
    cost:69000,
    executeFn:()=>{
        console.log("oBj is executed");
    },
};
let {core}=laptopObj;

//template literals
let num1=1;
let num2=2;
console.log(`The sum of num1 and num2 is ${num1+num2}`);

//rest operator->can convert array into elements
let arr1=[1, 2, 3];
let arr2=[4, 5, 6];

let newArr=[...arr1,...arr2];

//spread operator->convert an individual elements into array
function sum(...nums){
    console.log(nums);
}
sum(1,2);