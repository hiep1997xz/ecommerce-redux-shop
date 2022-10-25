import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>
          </Col>
          <Col lg="3"></Col>
          <Col lg="2"></Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
