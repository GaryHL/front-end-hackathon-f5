import React, { useEffect, useState } from 'react'
import './profile.css'
import GridBooks from '../../components/grid_books/GridBooks';
import FormBooks from '../../components/form_books/FormBooks';

const Profile = () => {
  const [userName, setUserName] = useState(null)

    useEffect(() => {
      setUserName(localStorage.getItem('user_name'))
    }, [])
    

  return (
    <div className='container_profile_view'>
        <h2>{userName ? userName : '..'}</h2>
        <div className="container_user_image">{userName ? userName[0] : '..'}</div>
        <h2>Libros disponibles</h2>
        <GridBooks/>
        <FormBooks/>
    </div>
  )
} 

export default Profile