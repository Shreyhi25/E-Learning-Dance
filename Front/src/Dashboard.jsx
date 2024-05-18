import React, { useState,useEffect } from 'react';
import "./dashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import{UserOutlined} from '@ant-design/icons';
import axios from "axios";
import swal from "sweetalert";
import logo1 from "D:/Shrey Project/Front/src/components/image/HomeLogo.png";

export default function Dashboard() {
var navigate = useNavigate();
  const email=localStorage.getItem("name");
  const [userData,setUserData]=useState([]);

  if(email==null||email==undefined||email=="undefined"||email=="") {
       navigate("/login");
  }
  const userLogout=async()=>{
                   console.log("user called logout");
                   var isUser=localStorage.removeItem("email");
                   const email=localStorage.getItem("email");

                   if(email==null||email==undefined||email=="undefined"||email=="") {
                        navigate("/login");
                   }
                   console.log("isUser",isUser);

  }

  // const getUserData=async()=>{
  //   axios
  //   .get("http://localhost:8000/api/users")
  //   .then((response) => {
  //     console.log("backend response: " + response);
  //     var strinData = JSON.stringify(response);
  //     console.log("strinData", strinData);
  //     var parseData = JSON.parse(strinData);
  //     console.log("parseData", parseData);
  //     setUserData(parseData.data.data);

  //     if (parseData.data.status == "1") {
  //       swal({
  //         title: "User Fetched",
  //         text: "User fetched Successfully",
  //         icon: "success",
  //         button: "OK",
  //       });
  //     }
  //     else{
  //       swal({
  //         title: "User Fetched",
  //         text: "Something went wrong!",
  //         icon: "Error",
  //         button: "OK",
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("backend error: " + error);
  //   });
  // }

  // userDelete
  // const userDelete=async(email)=>{
  //   console.log("delete",email);
  //   const isDelete=window.confirm("Are you sure you want to delete?");
  //   if(isDelete){
  //     axios.post(`http://localhost:8000/api/delete/${email}`).then((response) => {
  //       console.log("backend response: " + response);
  //       var strinData = JSON.stringify(response);
  //       console.log("strinData", strinData);
  //       var parseData = JSON.parse(strinData);
  //       console.log("parseData", parseData);
  
  //       if (parseData.data.status == "1") {
  //         setTimeout(() => {
  //           getUserData();
  //         }, 4000);
  //         swal({
  //           title: "Delete",
  //           text: "User Deleted Successfully",
  //           icon: "success",
  //           button: "OK",
  //         });
  //       }
  //       else{
  //         swal({
  //           title: "Delete",
  //           text: "User not Deleted",
  //           icon: "error",
  //           button: "OK",
  //         });
  
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("backend error: " + error);
  //     });
  //   }
  //   else{
      
  //   }
   
  // } 
  // // userUpdate
  // const userUpdate=async(email)=>{
  //   console.log("update",email);
  // }


  // useEffect(
  //   ()=>{
  //     getUserData()
  //   },[email]
  // )


  return (
    
    <div className="header">
    <div className="logo1">
      <img src={logo1} alt="" height={90}/>
    </div>
    <div className="nav">
      <ul>
        <li>
        <Link to="/courses">Courses</Link>
        </li>
        <li>
      <Link to="/degrees">Degrees</Link>  
        </li>
        <li>
      <Link to="/admin">Admin</Link>  
        </li>
      </ul>
      
    </div>
    <div className="user">
      <button className='usericon'><UserOutlined /></button>
    <button className="logout" onClick={userLogout}>Logout</button>
    </div>
    <h1 className='userlogin'>Hello  {email}</h1> 
    {
      userData.map((data,i)=>{
        return(
          <div key={i}>
            <span>{data.name}</span>
            <span>{data.email}</span>
            <span>{data.password}</span>
          </div>
        )})
    }
  </div>
  )
}
