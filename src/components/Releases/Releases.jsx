import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import b1 from '../../assets/images/b1.jpg'
import b5 from '../../assets/images/b5.jpg'
import b8 from '../../assets/images/b8.jpg'
import b6 from '../../assets/images/b6.jpg'


const Releases = () => {
  return (
    
<Container>
<h1> TOP BOOKS</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b1} fluid className="mb-3" />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b5} fluid className="mb-3" />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b6} fluid className="mb-3" />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b8} fluid className="mb-3" />
        </Col>
      </Row>
    </Container>
   
  )
}

export default Releases