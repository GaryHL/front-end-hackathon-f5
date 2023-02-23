import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import Compra from "../views/favorites/Compra";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const Router = () => {
   return (
      <BrowserRouter>
      <NavBar/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pagina2" element={<h1>pagina2</h1>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/compra" element={<Compra/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
   );
};

export default Router;