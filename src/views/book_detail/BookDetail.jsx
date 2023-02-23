import React from "react";
import { useParams } from "react-router";

const BookDetail = () => {
   const { bookId } = useParams();
   console.log(bookId)
   return <div>{bookId}</div>;
};

export default BookDetail;
