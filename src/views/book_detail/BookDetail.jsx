import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getBook } from "../../services/books.service";
import Releases from "../../components/description/Description";
import './book_detail.css'

const BookDetail = () => {

   

   const { bookId } = useParams();

   const [bookData, setBookData] = useState(null)

   const handleRegister = async () => {
      const { data } = await getBook(bookId);
      setBookData(data);
      console.log(data)
   };

   useEffect(() => {
      handleRegister();
      console.log("book data",bookData)
   }, [])
   

   console.log(bookId);

   return <div className="container_book_datails">
      <Releases bookData={bookData}/>
   </div>;
};

export default BookDetail;
