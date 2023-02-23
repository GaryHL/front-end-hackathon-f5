import React from "react";
import "./book.css";
import {BsCartPlus} from 'react-icons/bs'

const Book = ({ book }) => {
   const baseUrl = import.meta.env.VITE_IMAGES_URL;

   console.log(baseUrl+book.image);
   return (
      <div className="container_book">
         <div className="container_image">
            <img src={baseUrl+book.image} className="image" alt="" />
         </div>
            <h4 className="title_book">{book.title}</h4>
         <div className="container_footer_book">
            <p className="price">{book.price}33 USD</p>
            <div className="button_add"><BsCartPlus/>Añadir</div>
         </div>
      </div>
   );
};

export default Book;
