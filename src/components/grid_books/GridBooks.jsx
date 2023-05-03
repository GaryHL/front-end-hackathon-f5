import React from "react";
import Book from "../book/Book";
import './gridBooks.css'

const GridBooks = ({books}) => {
   
   return <div className="container_grid_books">
    {books.map((item) =>{
        return <Book book={item}/>
    })}
   </div>;
};

export default GridBooks;
