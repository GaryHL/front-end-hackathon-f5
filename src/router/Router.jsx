import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pagina2" element={<h1>pagina2</h1>} />
            <Route path="/profile" element={<Profile/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;