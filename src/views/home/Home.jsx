import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import Releases from '../../components/Releases/Releases'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Form/>
        <Releases/>
        <h1></h1>
    </div>
  )
}

export default Home