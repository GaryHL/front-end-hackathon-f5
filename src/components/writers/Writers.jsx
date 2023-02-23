import React from 'react'
import wr1 from '../../assets/images/wr1.jpg'
import wr2 from '../../assets/images/wr2.jpg'
import wr3 from '../../assets/images/wr3.jpg'
import wr4 from '../../assets/images/wr4.jpg'
import wr5 from '../../assets/images/wr5.jpg'
import wr6 from '../../assets/images/wr6.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap'

function Writers() {
  return (
   <Container>
   <h1 className="text"> TOP BOOKS</h1>
         <Row className="justify-content-center" >
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr1} fluid className="mb-3" style={{ height: '400px' }}/>
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr2} fluid className="mb-3" style={{ height: '400px' }} />
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr3} fluid className="mb-3" style={{ height: '400px' }} />
           </Col>
         </Row>
   
         <Row className="justify-content-center" >
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr4} fluid className="mb-3" style={{ height: '400px' }}/>
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr5} fluid className="mb-3" style={{ height: '400px' }} />
           </Col>
           <Col xs={12} md={6} lg={3} className="text-center">
             <Image src={wr6} fluid className="mb-3" style={{ height: '400px' }} />
           </Col>
         </Row>
       </Container>
   
  );
}

export default Writers;