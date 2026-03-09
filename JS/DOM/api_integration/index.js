//https://api.ipoalerts.in/ipos?status=open->get method->fetch the ipos
//https://open.er-api.com/v6/latest/USD->get api(when u paste the url u get data)
//in post api we will get error if we paste the url in browser
//https://jsonplaceholder.typicode.com/todos

//fetch is a bulidin js
async function fetchIpos(){
    //we can intgrate api using fetch method(buildin js method).in react.js axios(library)
    //It is asynchranous one
    //async await->tells js to wait for the respons until api returns
    //use async to add await else error
    let response = await fetch ("https://jsonplaceholder.typicode.com/todos",{
    
        headers:{
            // "x-api-key":
            // "ef5ad68fc311b6be1e202f7860724fcbc54be3a2e18a4a2cb8870df0468d887f",
            "Content-Type":"application/json",//automatically converts your data to json format
        }
    });
    console.log(response);
    let data =await response.json();
    console.log(data);
    displayData(data);

    function displayData(todos){
        todos.map((todo,index)=>{
           let divObj = document.createElement("div");
           divObj.className="title";
           divObj.innerHTML = `The title is ${todo.title}`;
           document.body.appendChild(divObj);
        });
    }
    
}
fetchIpos();