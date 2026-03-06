//Data types->Primitive data types->string,boolean,number,null and undefined
//non-primitive data types->objects
let person;
console.log(person);//undefined no data is stored so it takes garbage value i.e undefined
//if we don't want garbage value we give let person=null

//operators->arthmetic(+.-.*,/,%),logical(&& || !),comparision(==,===,<,>,>=,<=)
let num1=10;
let num2="10";
console.log(typeof num2);//datatype check
console.log(num1==num2);
console.log(num1===num2);//checks the data types

//Conditional Statements
if(num1>3){
    console.log("true");
}
else{
    console.log("false");
}

//condition ? statement1 : statement2;//ternary operator
num1>3? console.log("true"):console.log("false");

//functions->run the collection of statements
function greet(){
    console.log("hello hi");
}
greet();//function call using function name

//function expression
let callFirstName=function(){
     console.log("harika")
}
callFirstName();

//Arrow functions
let arrowFn = ()=>{
    console.log("This is a arrow function");
};
arrowFn();

//Parameters and arguments
function sum(a,b){
    console.log(a,b);
}
sum(2,3);
sum(5,6);

//arrays used to store any type of data
let arr1=[1,true,"hello"];
console.log(arr1);
arr1[0]='2';
console.log(arr1);

//methods(simple function which is exectuted on object)->push(),pop(),slice()
let arr2 = [1,2,3,4,5];
console.log(typeof arr2);
arr2.push(6);
console.log(arr2);
arr2.pop();//removes the last element
console.log(arr2);
arr2.slice(1,4);
console.log(arr2);

let newarr2 = arr2.slice(1,4);
console.log(newarr2);


//map method
 let arr3 = [1,2,3,4,5,6];
// // let newArr2 = [11,22,33,44,55];
// let newarr3 = arr2.map((ele,index)=>{
//     // console.log(ele,index);
//       return  ele *2;
// });
// console.log(newarr3);

let newarr3 =arr3.map((ele,index)=>ele/2);
console.log(newarr3);

//filter method
let arr4=[12,23,45,67,89,0,65,5];//new array will be 0,12,5
let newarr4 = arr4.filter((ele,index)=>{
    return ele <20;
})
console.log(newarr4);

//find method
let ar=[1,2,3,4,5,6,7,8,9];
let newar = ar.find((ele,index)=>{
    return ele === 4;
})
console.log(newar);
