import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import Releases from '../../components/Releases/Releases'
import Description from '../../components/description/Description'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import GridBooks from '../../components/grid_books/GridBooks'
import { getAllBooks } from '../../services/books.service'

const Home = () => {

  const [dataBooks, setDataBooks] = useState([])
  const getBooks = async () => {
    const { data } = await getAllBooks();
    setDataBooks(data);
 };
 useEffect(() => {
  getBooks();
 }, [])
 

  return (
    <div>
      <Carousel />
      <Releases />
      <GridBooks books={dataBooks}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
