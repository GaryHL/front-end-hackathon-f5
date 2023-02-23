import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import b1 from "../../assets/images/b1.jpg";
import './description.css'

const Releases = ({ bookData }) => {
   const baseUrl = import.meta.env.VITE_IMAGES_URL;
   return (
      <Container>
         <Row className="justify-content-center">
            <Col xs={12} md={6} lg={3} className="text-center">
               <Image  src={bookData ? baseUrl+bookData.image : '...'} fluid className="mb-3 image" />
            </Col>
            <Col xs={12} md={6} lg={8} className="text-left">
               <h2>{bookData ? bookData.title: '...'}</h2>
               <h4>Description</h4>
               <p>
                  {bookData ? bookData.description : '...' }
               </p>
               <p>
                  <strong>Price: </strong>{bookData ? bookData.price : '...'} $
               </p>
               <p>
                  <strong>Vendor: </strong>{bookData ? bookData.user.name : '...'} 
               </p>
               <p>
                  <strong>Location: </strong>Barcelona, Spain
               </p>
               <Button variant="primary">Contact</Button>
            </Col>
         </Row>
      </Container>
   );
};

export default Releases;
