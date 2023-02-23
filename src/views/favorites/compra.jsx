import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Compra() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: 600 }}>
      <div className="p-4" style={{ backgroundColor: '#f8f9fa', border: '1px solid #007bff', borderRadius: '5px' }}>
        <h2 className="text-center mb-4">Purchase Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ border: '1px solid #007bff' }} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ border: '1px solid #007bff' }} required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: '1px solid #007bff' }} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter the quantity of books you want to purchase" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ border: '1px solid #007bff' }} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your shipping address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ border: '1px solid #007bff' }} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ border: '1px solid #007bff' }} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="d-block mx-auto mt-4 px-5 py-2">Buy Now</Button>
        </Form>
        {showAlert && (
          <Alert variant="success" className="mt-4">
            Book purchased successfully!
          </Alert>
        )}
      </div>
    </Container>
  );
}

export default Compra;