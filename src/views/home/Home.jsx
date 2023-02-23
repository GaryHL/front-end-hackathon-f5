import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form'
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
      <GridBooks books={dataBooks}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
