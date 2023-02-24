import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faMailchimp,
  

} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#B1D1D1",
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        height: 'max-content'
      }}
    >
      <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center text-md-right mt-3 mt-md-0">
          <img src={Logo} alt="logo" className="imglogo" />
          <p  className="fw-bolder">"No leemos para ser interesantes, leemos para ser felices"</p>
        </Col>
        <Col xs={12} md={6} className="text-center text-md-left mt-4 line-height">
          <p className="footer-texto text-center fw-bolder">Rarebooks Marketplace</p>
         <p>C. Juan de Mariana, 15, 28045 Madrid</p>
          <a href="rarebookmarketplace@gmail.com">
            rarebooksmarketplace@gmail.com
          </a>
          <p>+34 910 78 02 34</p>
          <p>Terms and Conditions</p>
          <p>Rarebooks Marketplace: 2023 All rights reserved</p>
          <ul className="list-inline mb-0 ">
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="text-black" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="text-black" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="text-black" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="text-black" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} className="text-black" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
    </footer>
  );
};
export default Footer;
