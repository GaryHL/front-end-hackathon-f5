import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import b12 from '../../assets/images/b12.jpg'



const Releases = () => {
  return (
    
<Container>
<h2>Book Description</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b12} fluid className="mb-3" />
        </Col>
        <Col xs={12} md={6} lg={8} className="text-left">
        <h3>Little Women</h3>
          <h4>Louisa May Alcott</h4>
          <p><strong>Description: </strong>The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—and details their passage from childhood to womanhood. Loosely based on the lives of the author and her three sisters, it is classified as an autobiographical or semi-autobiographical novel.The novel has been said to address three major themes: "domesticity, work, and true love, all of them interdependent and each necessary to the achievement of its heroine's individual identity.”
          </p>
          <p><strong>Price: </strong>23€</p>
          <p><strong>Vendor: </strong>BornToRead</p>
          <p><strong>Location: </strong>Barcelona, Spain</p>
          <Button variant="primary">Contact Vendor</Button>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Releases