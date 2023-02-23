import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import {useEffect, useState} from 'react';

function NavBar() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");


const handleChange = (e) => {
  setBusqueda(e.target.value);
}


  const handleSearch = async () => {
    await axios.get("http://localhost:8000/api/search/"+busqueda)
  .then(response=>{
    /*setUsuarios(response.data);
    setTablaUsuarios(response.data);*/
    console.log(response.data)
  }).catch(error=>{
    console.log(error);
  })
  }

  return (
    <Navbar className='navBarColor' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Rarebooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">My Books</Nav.Link>
            <Nav.Link href="#action3">Favourites</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;