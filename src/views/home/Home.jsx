import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Releases from '../../components/Releases/Releases'
import Description from '../../components/description/Description'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Releases/>
        <Description/>
        <h1>V</h1>
        <Footer/>
    </div>
  )
}

export default Home