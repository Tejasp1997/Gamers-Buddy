import React from "react";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import "./Mainform.css"

const MainForm = () => {

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


 
      const [Username,setUserName] = useState("")

      useEffect( () => {
        async function fetchData() {
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        setUserName(data.username);
     
        }
        fetchData();
      },[]);
      

    const [error, setError] = useState("")
    const [data, setData] = useState({name:"",room:""})         

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value })
           



       
    }

    const validation = () => {
        if(!data.name){ 
            setError("Please enter your name.")
            return false
        }
        if(!data.room){ 
            setError("Please select room.")
            return false
        } 
        setError("")
        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validation()
        if(isValid){
            navigate(`/chat/${data.room}`, { state: data ,Username});
        }
    }

    return (
       
        <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        <div className="px-3 py-4 shadow bg-white text-dark border rounded row"> 
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="txt">Welcome to GMBChatclub "{Username}"</h2>
                </div>
                <div className="form-group mb-4">
                    <input type="name" className="form-control bg-light" name="name" placeholder="Enter your Nickname"onChange={handleChange}/> 
                </div>
                <div className="form-group mb-4">
                    <select className="form-select bg-light" name="room" aria-label="Default select example" onChange={handleChange}>
                        <option value="">Select Room</option>
                        <option value="Counter-Strike go">Counter-Strike go</option>
                        <option value="Valorant">Valorant</option>
                        <option value="Pockemon Go">Pockemon Go</option>
                        <option value="Ludo">Ludo</option>
                        <option value="Apex Legend">Apex Legend</option>
                        <option value="Amoung Us">Amoung Us</option>

                    </select>
                </div>
                <button type="submit" className="btn btn-warning w-100 mb-2" >Submit</button>
                {error ? <small className="text-danger m-auto">{error}</small> : "" }
            </form>
        </div>
        </div>
    )
}

export default MainForm;