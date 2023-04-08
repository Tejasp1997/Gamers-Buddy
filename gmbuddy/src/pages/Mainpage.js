import React from "react";
import {Link} from "react-router-dom"
import './mainpage.css'


function Mainpage() {
  return (
    <>

      <div className="main">
        <div className="navbar">
          <div className="icon">
          
          {/* <img src={gamers} alt="" className="img-1" /> */}
  
 

            <h2 className="logo">GamersBuddy</h2>
          </div>

          <div className="menu">
            <ul>        
            <li><Link to="/contact">contact</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>     
            </ul>
          </div>

         

        </div>

        <div className="content">

          <h1>FIND FRIENDS,<br /><span>JOIN COMMUNITIES</span> <br />AND SHARE CONTENT</h1>
            <p className="par">It's great and easy to connect with like-minded gamers. <br />Get people who share same passions,games, and personality type.
              <br />Chat with your friends or meet new players.</p>

              <button className="cn"><Link to="/register">JOIN US</Link></button>

              



                  
              </div>
            </div>
         
          </>
          );

  }
          export default Mainpage;