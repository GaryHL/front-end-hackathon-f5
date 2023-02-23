import React from 'react'
import b12 from '../../assets/images/b12.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap'

function Writers() {
  return (
   <Container>
   <h1 className="text mt-5"> TOP BOOKS</h1>
         <Row className="justify-content-center mb-5 gap-5 mt-5" >
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }}/>
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }} />
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }} />
           </Col>
         </Row>
   
         <Row className="justify-content-center mt-5 mb-5 gap-5">
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }}/>
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }} />
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={b12} fluid className="mb-3" style={{ height: '300px' }} />
           </Col>
         </Row>
       </Container>
   
  );
}

export default Writers;