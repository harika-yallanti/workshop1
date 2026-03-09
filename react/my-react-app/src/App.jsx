
import { useEffect, useState } from "react";
// import logo from "./assets/react.svg";
import axios from "axios";
import "./index.css";
import { Header } from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

//import HeaderComponent from "./components/Header";
// export default App

const App = () => {
  //hooks -> useState, useEffect
  //useState -> is a hook which is used to store data and update the data
  //array destructuring
  // let arr = [1, 2, 3, 4];
  // const [firstvalue, secondvalue] = arr;
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  // let counter = 0;
  
  const handleDecrease = () => {
    // console.log("executed");
 
    // counter =counter - 1;
    // console.log(counter, "decreased function");
    setCounter(counter - 1);
  };
  
  const handleIncrease = () => {
    // console.log("executed");
 
    // counter =counter + 1;
    // console.log(counter, "increased function");
    setCounter(counter + 1);
  };
  
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    setPosts(response.data);
  };
  console.log(posts);
  //useEffect -> it is used to handle the side effects(api calling,timeout,dom manipulation)
  useEffect(()=>{
    fetchPosts();
    console.log("component loaded");
  }, []);
  return (
  // <div className="container" style={styles.container}>
   
     <div>
      <div 
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          justifyContent:"center",
        }}
      >
        
      <button onClick={handleDecrease}>-</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>+</button>
      </div>
      
      {posts.map((post) => {
        return (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
  
        {/*<Header /> 
        <About />
        <Contact /> */}
      </div>

    
    
    /* <h1>Hello</h1>
    <p>This is paragraph</p> */
  ); 
};
//default export
 export default App;

// const styles ={
//   container:{
//     backgroundColor:"red",
//     display:"flex",
//   },
// }

//named export