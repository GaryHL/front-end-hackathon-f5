import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import NavBar from "../components/navbar/Navbar";
import BookDetail from "../views/book_detail/BookDetail";

const Router = () => {
   const [token, setToken] = useState(null)
   useEffect(() => {
      setToken(localStorage.getItem("token"))
   }, [])
   
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/profile"
               element={
                  token ? (
                     <Profile />
                  ) : (
                     <Navigate to="/register" />
                  )
               }
            />
            <Route
               path="/register"
               element={
                  token ? (
                     <Navigate to="/" />
                  ) : (
                     <Register />
                  )
               }
            />
            <Route
               path="/login"
               element={
                  token ? (
                     <Navigate to="/" />
                  ) : (
                     <Login />
                  )
               }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
