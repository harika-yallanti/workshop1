//JS is a single threaded language->it will execute the task one by one 
//because of event loop the tasks are executed simultaneously
//Synchronous-> one by one the code will be executed
//Asynchronous->tasks are executed simultanously(ex;setTimeout,setInterval,api calling,dom)
console.log("execute-1");//1
setTimeout(()=>{
    console.log("Inside the set timeout");//4
},100);
console.log("execute-2");//2
console.log("execute-3");//3


