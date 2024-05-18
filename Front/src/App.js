import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import Main from "./components/Main";
import Test1 from "./components/Test1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import Nopage from "./Nopage";
import Dashboard from "./Dashboard";
import { CustomerServiceFilled } from "@ant-design/icons";
import Course from "./Course";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Degrees from "./Degrees";
import Forget from "./Forget";
import Dash from "./Dash";
import Admin from "./Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/courses" element={<Course/>}></Route>
        <Route path="/degrees" element={<Degrees/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/dash" element={<Dash/>}></Route>
        <Route path="/login/forget" element ={<Forget/>}></Route>
        <Route path="*" element ={<Nopage/>}></Route>
      </Routes>
    </BrowserRouter>
    // <Course/>
    // <Home/>
    // <Forget/>
    // <Dash/>
    // <Admin/>
  
  

  )
};
export default App;
