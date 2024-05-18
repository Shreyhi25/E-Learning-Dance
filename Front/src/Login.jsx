import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import "./login.css";
import { Link } from 'react-router-dom'

export const Login = () => {
    var navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit=async(e)=>{
         e.preventDefault();
         console.log("email,password",email,password);
         var formData = new FormData();
         formData.append("email", email);
         formData.append("password", password);
         console.log("formData: " + formData);
         //backend api calling
         axios
           .post("http://localhost:8000/api/login", formData)
           .then((response) => {
             console.log("backend response: " + response);
             var strinData = JSON.stringify(response);
             console.log("strinData", strinData);
             var parseData = JSON.parse(strinData);
             console.log("parseData", parseData);
             if (parseData.data.status == "1") {
               setTimeout(() => {
                 navigate("/dash");
               }, 4000);
               swal({
                 title: "Sign In",
                 text: parseData.data.message,
                 icon: "success",
                 button: "OK",
               });
                console.log("parseData.data.email",parseData.data.email);
               localStorage.setItem("name",parseData.data.name);
             }
             else{
                // setTimeout(() => {
                //     navigate("/dashboard");
                //   }, 4000);
                  swal({
                    title: "Login",
                    text: parseData.data.message,
                    icon: "error",
                    button: "tryAgain",
                  });
             }
           })
           .catch((error) => {
             console.log("backend error: " + error);
           });
    }

  return (
    <div>
        <div className="loginImg">
           </div>
        <div className='loginHeading'>
        <h1>SignIn</h1>
    </div>
    <div class="loginForm">
        <form>
           
                   <table>
                    <tr>
                        <td className="login-h"><label for="Email"> Email</label></td>
                        <td><input  className="login-i" type="email" name="email" id="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td> 
                        
                    </tr> <br />
                   
                    <tr>
                        <td className="login-h"><label for="Password">Password</label></td>
                        <td><input  className="login-i" type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword
                        (e.target.value)}}/></td>
                        
                    </tr> <br />  
                        <tr>      
                            {
                              email.length>0&&password.length>0?<td><button onClick={handleSubmit} style={{cursor:"pointer"}}>Login</button></td>:<td><button onClick={handleSubmit} style={{cursor:"not-allowed"}}disabled>Sign in</button></td>
                            }
                            <Link to="forget"><p>Forgot Password</p></Link>

                        </tr>
                </table>
        </form>
    </div>
    </div>
  )
}
