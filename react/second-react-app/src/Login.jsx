import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSavePassword =(event) =>{
    setPassword(event.target.value);
  };
  const handleSaveEmail =(event) =>{
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
        `Login Successful. These are details email:${email} password:${password}`,
    );
    navigate("/home");
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input onChange={handleSaveEmail} type="email" placeholder="Email" required />
          <input onChange={handleSavePassword} type="password" placeholder="Password" required/>
          <button type="submit">Login</button>
        </form>

        <p className="switch">
          Don't have an account?
          <span onClick={handleSignup}> Signup</span>
        </p>

      </div>
    </div>
  );
}

export default Login;