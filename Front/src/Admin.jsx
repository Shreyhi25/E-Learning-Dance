import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import swal from 'sweetalert';
import './admin.css'


export default function Admin() {

  const [userData,setUserData]=useState([]);


  const email=localStorage.getItem("name");
  if(email==null||email==undefined||email=="undefined"||email=="") {
    
} 
const getUserData=async()=>{
    axios
    .get("http://localhost:8000/api/users")
    .then((response) => {
      console.log("backend response: " + response);
      var strinData = JSON.stringify(response);
      console.log("strinData", strinData);
      var parseData = JSON.parse(strinData);
      console.log("parseData", parseData);
      setUserData(parseData.data.data);

      if (parseData.data.status == "1") {
        swal({
          title: "User Fetched",
          text: "User fetched Successfully",
          icon: "success",
          button: "OK",
        });
      }
      else{
        swal({
          title: "User Fetched",
          text: "Something went wrong!",
          icon: "Error",
          button: "OK",
        });
      }
    })
    .catch((error) => {
      console.log("backend error: " + error);
    });
  }

  useEffect(
    ()=>{
      getUserData()
    },[email]
  )

  return (
    <div className='admin-main-div'>
      <table border={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete / Update</th>
          </tr>
        </thead>

        <tbody>
          {
            userData.map((data,i)=>{
              return(
                <tr key={i}> 
                <td>{data.name}</td>
                <td className='admin-tb-email'>{data.email}</td>
                <td>{data.password}</td>
                </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  )



}
