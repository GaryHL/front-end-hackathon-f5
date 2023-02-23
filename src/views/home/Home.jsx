import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import Releases from '../../components/Releases/Releases'
import Description from '../../components/description/Description'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Releases/>
        <Description/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home