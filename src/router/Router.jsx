import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import NavBar from "../components/navbar/Navbar";
import BookDetail from "../views/book_detail/BookDetail";

const Router = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/profile"
               element={
                  localStorage.getItem("token") ? (
                     <Profile />
                  ) : (
                     <Navigate to="/register" />
                  )
               }
            />
            <Route
               path="/register"
               element={
                  localStorage.getItem("token") ? (
                     <Navigate to="/" />
                  ) : (
                     <Register />
                  )
               }
            />
            <Route
               path="/login"
               element={
                  localStorage.getItem("token") ? (
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
