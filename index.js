// console.log("JS loaded");
let btn1Obj = document.getElementById("btn1");
let btn2Obj = document.getElementById("btn2"); 
let para1Obj = document.createElement("p");//globally
let divObj = document.createElement("div");
let bodyCollection = document.getElementsByTagName("body");//1
let bodyObj = bodyCollection[0];//1

// console.log(btn1Obj,"btn1 Obj");
// console.log(document.body,"body Obj");

// // console.log(typeof btn1Obj);

// //click
// //addEventListener
// btn1Obj.addEventListener("click",function (){
//     console.log("Btn 1 clicked");
//     // let para1Obj = document.createElement("p");//locally  //createElement()
//     console.log(para1Obj);
//     para1Obj.innerHTML = "Bearish view on BTCUSO";          //innerText innerHTML
//     //styling
//     para1Obj.style.color = 'purple';
//     para1Obj.style.fontSize = '40px';
//     // document.body.appendChild(divObj);
//     // document.body.appendChild(para1Obj) // 1 or this one line
//     divObj.appendChild(para1Obj)
//     console.log(para1Obj);
//     // bodyObj.appendChild(para1Obj);  //appendChild //1
    
// });
// btn1Obj.addEventListener("click",function (){
//     para1Obj.innerHTML = "Global Stock Exchange";
//     para1Obj.style.color = 'orange';
//     para1Obj.style.fontSize = '40px';
//     document.body.appendChild(para1Obj);
// });

btn1Obj.addEventListener("click", function () {
    para1Obj.innerHTML = "Bearish view on BTCUSO";
    para1Obj.style.color = "purple";
    para1Obj.style.fontSize = "40px";
    document.body.appendChild(para1Obj);
});

btn2Obj.addEventListener("click", function () {
    para1Obj.innerHTML = "Global Stock Exchange";
    para1Obj.style.color = "orange";
    para1Obj.style.fontSize = "40px";
    document.body.appendChild(para1Obj);
});