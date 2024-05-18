import React, { useState } from "react";
import "./forget.css";
import forget from "D:/Shrey Project/Front/src/components/image/forget.avif";
import axios from "axios";
import { MailOutlined, UnlockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Forgetpass() {
  var navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);
    console.log(formData);
    if (password === confirmpassword) {
      axios
        .post("http://localhost:8000/api/user/reset_password", formData)
        .then((response) => {
          var stringData = JSON.stringify(response);
          var parseData = JSON.parse(stringData);
          console.log(parseData);
          console.log(stringData);
          setTimeout(() => {
            navigate("/login");
          }, 2000);

          if (parseData.data.status == "1") {
            alert(parseData.data.message);
          } else {
            alert(parseData.data.message);
          }
        });
    } else {
      alert("password not matched");
    }
  };

  return (
    <div>
        <div className='forget'>
            <div className="forget-box1">
               <h2 className="forget-head">FORGOT <br /> YOUR PASSWORD ?</h2>
               <p className='forget-p'>Enter the email address <br />associated with your account. </p>

               <Input size="large" className='forget-input' required type='email' name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" prefix={<MailOutlined />} /><br />

               <Input className='forget-input' size="large" name="password" id="password" value={password} type='text' onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your New Password" required prefix={<UnlockOutlined />} /><br />

               <Input className='forget-input' size="large" type='text' name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Your Password" required prefix={<UnlockOutlined />} /><br />

               <button className='forget-btn'  onClick={handleUpdate}>RESET</button>
            </div>
            <div className="forget-box2">
              <img className="forget-img" src={forget} alt="" />
            </div>
        </div>
    </div>
  );
}
