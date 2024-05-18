import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import "./register.css";
import Header from "./Header";

export const Register = () => {
  var navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  console.log("Name onchange: " + name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Name,Email,mobile,password in handleSubmit: " + name,
      email,
      mobile,
      password
    );

    var formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    console.log("formData: " + formData);

    const regx1=/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
    const regx2=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (password.length<=4){
      swal({
        title: "Error",
        text: "Password must be at least 4 characters",
        icon: "error",
        button: "OK",
      });
    }
    else if (!regx1.test(mobile)){
      swal({
        title: "Error",
        text: "mobile number must be 10 Digits",
        icon: "error",
        button: "OK",
      });
    }
    else if (!regx2.test(email)){
      swal({
        title: "Error",
        text: "Wrong email address",
        icon: "error",
        button: "OK",
      });
    }

    //backend api calling
    else {
      axios
      .post("http://localhost:8000/api/register", formData)
      .then((response) => {
        console.log("backend response: " + response);
        var strinData = JSON.stringify(response);
        console.log("strinData", strinData);
        var parseData = JSON.parse(strinData);
        console.log("parseData", parseData);

        if (parseData.data.status == "1") {
          setTimeout(() => {
            navigate("/login");
          }, 4000);
          swal({
            title: "Sign Up",
            text: "You Successfully Signed Up",
            icon: "success",
            button: "OK",
          });
        }
      })
      .catch((error) => {
        console.log("backend error: " + error);
      });
  };
}
  return (
    <div>
      {/* <Header /> */}
      <div className="regImg"></div>

      <div className="regHeading">
        <h1>Sign Up</h1>
      </div>
      <div className="regForm">
        <form>
          <p>* are mandatory field!</p>
          <table>
            <tr>
              <td>
                <label for="Name">Name</label>
              </td> 
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "} 
                * 
              </td>
            </tr> <br />

            <tr>
              <td>
                <label for="Email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                *
              </td>
            </tr> <br />
            <tr>
              <td>
                <label for="Mobile">Mobile Number</label>
              </td>
              <td>
                <input
                  type="number"
                  name="mobileno"
                  id="mno"
                  placeholder="Enter your Mobile Number"
                  value={mobile}
                  maxlength="10"
                  onChange={(e) => setMobile(e.target.value)}
                />{" "}
                *
              </td>
            </tr> <br />
            <tr>
              <td>
                <label for="Password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
                *
              </td>
            </tr> <br />

            <tr>
              <td></td>
              {name.length > 0 &&
              email.length > 0 &&
              password.length > 0 &&
              mobile.length > 0 ? (
                <td>
                  <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
                    Register
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={handleSubmit}
                    style={{ cursor: "not-allowed" }}
                    disabled
                  >
                    Sign Up
                  </button>
                </td>
              )}
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
