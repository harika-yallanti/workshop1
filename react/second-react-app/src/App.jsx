import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
//react router dom
function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    // <div>App</div>
  );
}

export default App;