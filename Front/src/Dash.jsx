import React from 'react';
import "./dash.css";
import DashBack from "D:/Shrey Project/Front/src/components/image/Dash Back.png";
import Dashboard from './Dashboard';
// import {link} from "react-router-dom"


export default function Dash() {
  return (
    <div>
      {<Dashboard/>}
        <div className='dash-main'>
          
            <div className='dash-cont'>
              <h1 className='dash-h1'>FEEL THE </h1><h2 className='dash-h2'> RHYTHM </h2><h1 className='dash-h1'>INSIDE YOUR SOUL</h1>
              <p className='dash-p'>We hope this online Dance Platform  <br />enhances your Dance journey and provides<br /> you with valuable resources and connections<br /> within the Dance community.<br /> So, get ready to Dance your way to new heights!</p>
              </div>
            <div className='dash-img'>
            <img src={DashBack} alt="image" style={{height:450,width:450,marginTop:75}} />
            </div>
        </div>  
    </div>
  )
}
