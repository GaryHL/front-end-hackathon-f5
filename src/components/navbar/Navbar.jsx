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

function NavBar() {

  const [busqueda, setBusqueda]= useState("");
  const [results, setResults] = useState(null);


const handleChange = (e) => {
  setBusqueda(e.target.value);
}


  const handleSearch = async () => {
    await axios.get("http://localhost:8000/api/search/"+busqueda)
  .then(response=>{
    setResults(response.data)
  }).catch(error=>{
    console.log(error);
  })
  }

  return (
    <div>
      <Navbar className='navBarColor'>
        <Container >
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
              <Nav.Link href="#action2">My Books</Nav.Link>
              <Nav.Link href="#action3">Favourites</Nav.Link>
              <Nav.Link ><Link to="/" className='link_brand'>Home</Link></Nav.Link>
              <Nav.Link ><Link to="/profile" className='link_brand'>Perfil</Link></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {
          results &&
          <Row style={{padding: '5px'}} className='navBarColor'>
            {
              results.map(result => {
                return (
                    <Card style={{ maxWidth: '120px', margin: '5px' }}>
                      <Card.Img variant="top" src={result.image} style={{maxWidth: '80px', margin: '0 auto', marginTop: '10px'}}/>
                      <Card.Body>
                        <Card.Title style={{fontSize: '12px', fontWeight: 'bold', textAlign: 'center'}}>{result.title}</Card.Title>
                        <Card.Text style={{fontSize: '10px', textAlign: 'left'}}>
                          {result.category}<br></br>
                          EUR {result.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                )
              })
            }
          </Row>
        }
    </div>
  );
}

export default NavBar;