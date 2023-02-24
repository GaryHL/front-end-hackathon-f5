import React, { useEffect, useState } from 'react'
import './profile.css'
import GridBooks from '../../components/grid_books/GridBooks';
import FormBooks from '../../components/form_books/FormBooks';
import { getMyBooks } from '../../services/books.service';

const Profile = () => {
  const [userName, setUserName] = useState(null)
  const [books, setBooks] = useState([])

  const handleRegister = async () => {
    const { data } = await getMyBooks();
    setBooks(data);
    console.log("books of users",data)
 };

    useEffect(() => {
      setUserName(localStorage.getItem('user_name'));
      handleRegister();
    }, [])
    

  return (
    <div className='container_profile_view'>
        <h2>{userName ? userName : '..'}</h2>
        <div className="container_user_image">{userName ? userName[0] : '..'}</div>
        <h2>Published books:</h2>
        <GridBooks books={books}/>
        <FormBooks/>
    </div>
  )
} 

export default Profile