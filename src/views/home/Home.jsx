import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import GridBooks from '../../components/grid_books/GridBooks'
import { getAllBooks } from '../../services/books.service'
import './home.css'

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
    <div className='container_home_view'>
      <Carousel />
      <h1 className="top_books_title">Top Books:</h1>
      <GridBooks books={dataBooks}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
