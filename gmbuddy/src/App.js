import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SetAvatar from "./components/SetAvatar";
// import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainForm from './chatcomponets/MainForm';
import ChatRoom from './chatcomponets/ChatRoom';
import Mainpage from './pages/Mainpage'
import Welcomepage from './pages/Welcomepage'
import Contact from './pages/contact'






export default function App() {
  return (
   

    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/contact" element={<Contact />} />
        <Route path='/mainform' element={<MainForm />} />
					<Route path="chat/:roomId" element={<ChatRoom />} /> 
          <Route path='/Welcomepage' element={<Welcomepage/>} />
        <Route exact path="/" element={<Mainpage />} />
      </Routes>
  
    </BrowserRouter>
    
  );
}