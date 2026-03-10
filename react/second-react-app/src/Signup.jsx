// import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

 function Signup() {
    const navigate = useNavigate();
    //useNavigate -> is a method or a function used for navigation.which is given by react-router-dom
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleLogin = ()=>{
    navigate('/login');
   }
   const handleSaveFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleSaveEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSavePassword = (event) => {
    setPassword(event.target.value);
  };

   const handleSubmit = (event) => {
    event.preventDefault(); // prevents page refresh
    console.log("Signup submitted");

    console.log(fullName, "Full Name");
    console.log(email, "Email");
    console.log(password, "Password");
  };
  
  return (
    <div className='page'>
     <div className='card'>
        <h1>Signup</h1>

        <form onSubmit={handleSubmit}>
            <input onChange={handleSaveFullName} type="text" placeholder='Full Name' />
            <input onChange={handleSaveEmail} type="email" placeholder='Email' />
            <input onChange={handleSavePassword} type="password" placeholder='Password' />
            <button type='submit'>Signup</button>

        </form>
        {/* <Link */}
        <p className='switch'>
            Already have an account?
            <span onClick={handleLogin}>Login</span>
        </p>
     </div>
    </div>
  );
}

export default Signup;
