import React from 'react'
import './profile.css'
import GridBooks from '../../components/grid_books/GridBooks';

const Profile = () => {

    const user = {
        name: 'usuario1',
    };

  return (
    <div className='container_profile_view'>
        <h2>{user.name}</h2>
        <div className="container_user_image">{user.name[0]}</div>
        <h2>Libros disponibles</h2>
        <GridBooks/>
    </div>
  )
} 

export default Profile