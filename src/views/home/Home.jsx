import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import Releases from '../../components/Releases/Releases'
import Description from '../../components/description/Description'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Writers from '../../components/writers/Writers'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <Releases />
      <Description />
      <Writers/>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
