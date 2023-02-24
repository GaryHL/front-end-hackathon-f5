import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Book from '../book/Book';

function NavBar() {

  const [busqueda, setBusqueda]= useState("");
  const [results, setResults] = useState(null);


const handleChange = (e) => {
  setBusqueda(e.target.value);
}


  const handleSearch = async () => {
    if(busqueda.length > 0){
    await axios.get("http://localhost:8000/api/search/"+busqueda)
  .then(response=>{
      setResults(response.data)
      
    }).catch(error=>{
      console.log(error);
    })
  }
  else{
    setResults(null);
  }
  }

  return (
    <div>
      <Navbar className='navBarColor'>
        <div className='container_nav'>
          <Navbar.Brand><Link to="/" className='link_brand'>Rarebooks</Link></Navbar.Brand>
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
              <Nav.Link ><Link to="/" className='link_brand'>Home</Link></Nav.Link>
              <Nav.Link ><Link to="/profile" className='link_brand'>Perfil</Link></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Navbar>
        {
          results !== null ?
          <Row style={{padding: '2vh 10% '}} className='navBarColor'>
            {
              results.map(result => {
                return (
                    <Card style={{ maxWidth: '150px', margin: '5px' }}>
                      <Card.Body style={{padding:"0.5rem 0"}}>
                        <Book book={result} min={true}/>
                      </Card.Body>
                    </Card>
                )
              })
            }{results.length === 0? 'not found' : null}
          </Row>: null
        }
    </div>
  );
}

export default NavBar;