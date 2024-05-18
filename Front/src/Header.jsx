import React from "react";
import "./header.css";
import {Link,Outlet} from 'react-router-dom';
import logo from "D:/Shrey Project/Front/src/components/image/HomeLogo.png"
export default function () {
  return (
    
    <div className="header">
      <div className="header-logo">
        <img className="header-img" src={logo} alt="logo" />
      </div>
      <div className="header-nav">
        <ul>
          <li>
          <Link to="/">Home </Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
           <Link to="/contact"> Contact</Link>
          </li>
        </ul>
        
      </div>
      <div className="user">
      <Link to ="/login"><button className="login">Sign In</button></Link>
      <Link to ="/register"><button className="register">Sign Up</button></Link>
        </div>
        {/* <Outlet> */}
        <Outlet/>
    </div>
   
  );
}   
