import React from 'react'
import "./contact.css"
import emaillogo from "D:/Shrey Project/Front/src/components/image/mail1.jpg";
import { UserOutlined,MailOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Header from "./Header";

const { TextArea } = Input;

export default function Contact() {
  return (
    <div>

{<Header/>}

<div className="contact-box1">
  <img className="contact-img" src={emaillogo} alt="" />
  <pre className="contact-pre">
   <center>
   If you have questions or just <br />want to get in touch, use the <br />form below. We look forward <br />to hearing from you!
   </center>
  </pre>
</div>

<div className="contact-box2">
  <h2 className="contact-head">Contact Us</h2>
  <hr />
  <p className='cont-p'>Contact :- +91 5427986429 <br />Email :- allstar12@gmail.com <br />Address :- Prestine Profile, Pimpri-Chinchwad, Pune </p>
  
</div>

    </div>
  )
}
