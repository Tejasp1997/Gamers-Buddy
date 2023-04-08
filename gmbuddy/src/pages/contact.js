import React from "react";
import "./contact.css"
import {Link} from "react-router-dom"
import { ImLocation} from "react-icons/im";
import { AiOutlineMail} from "react-icons/ai";
import {BsTelephoneFill } from "react-icons/bs";




function contact() {
    return (
<>

<div className="first">
<div className="nav">
            <ul>        
            <li><Link to="/">Mainpage</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>     
            </ul>
          </div>
<div className="sec">
    <h2>contact us</h2>
    <h5>Feel free to contact us using below details... </h5>
</div>
<div className="box">
    <h3><ImLocation />Address</h3>
    <p>Plot no18, Padmavati Nagar, near gaurav palace,Nandurbar-425412</p>
    <h3><AiOutlineMail />  Email</h3>
    <p>ptejasp123@gmail.com</p>
    <h3><BsTelephoneFill />  Phone</h3>
    <p>+91-8830218101</p>



</div>

</div>

</>
    );
}

export default contact;