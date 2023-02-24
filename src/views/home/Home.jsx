import React from 'react'
import Form from '../../components/form/Form'
import Releases from '../../components/Releases/Releases'
import Description from '../../components/description/Description'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Releases />
      <Description />
      <Form />
  
    </div>
  )
}

export default Home
