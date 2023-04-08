import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
// import tail from "../assets/freak.gif";
// import amg from "../assets/amg.gif";

import "./welcome.css"
export default function Welcomepage() {

    let navigate = useNavigate();

    useEffect( () => {
        async function fetchData() {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          navigate("/login");
        } else {
          
            await JSON.parse(
              localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            )
        
        }
      }
        fetchData();
      },[navigate]);


  const [userName, setUserName] = useState("");
  useEffect( () => {
    async function fetchData() {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
      }
    fetchData();
  },[]);
  
  return (
    <div className="back">
    {/* <img src={tail} alt="" className="img-1" /> */}
    {/* <img src={amg} alt="" className="img" /> */}

    <section>
  <div className="content">
    <h4>GamersBuddy</h4>
    <h4>GamersBuddy</h4>
  </div>
</section>
    
    <Container>
     
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat Group to Start messaging.</h3>
      <div >
  <div className="button">
  <Link to="/mainform">click Here</Link>
  </div>
</div>
    </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  backgroun-color:grey;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  
  body{
    text-align:center;
    
    display:flex;
  background: rgb(0, 0, 0);
  min-height: 100vh;

  
  }
  
  .button{
    position:relative;
    display:inline-block;
    margin:20px;
  }
  
  .button a{
    color:white;
    font-family:Helvetica, sans-serif;
    font-weight:bold;
    font-size:36px;
    text-align: center;
    text-decoration:none;
    background-color:#FFA12B;
    display:block;
    position:relative;
    padding:20px 40px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active{
  top:10px;
  background-color:#F78900;
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
} `;


