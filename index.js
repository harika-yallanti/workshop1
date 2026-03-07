//https://api.ipoalerts.in/ipos?status=open->get method->fetch the ipos

//fetch is a bulidin js
async function fetchIpos(){
    //we can intgrate api using fetch method(buildin js method).in react.js axios(library)
    //It is asynchranous one
    //async await->tells js to wait for the respons until api returns
    //use async to add await else error
    let response = await fetch("https://api.ipoalerts.in/ipos?status=open",{
        headers:{
            "x-api-key":
            "ef5ad68fc311b6be1e202f7860724fcbc54be3a2e18a4a2cb8870df0468d887f",
            "Content-Type":"application/json",
        },
    });
    console.log(response);
}
fetchIpos();