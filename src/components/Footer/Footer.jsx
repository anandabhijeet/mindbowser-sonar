import React from "react";
import "./Footer.css";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack className="footer-bg">
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="left-content p-5">
              <div className="left-heading fs-3">Get Sonar, Inc.</div>
              <div className="social-icons mt-2">
                <FaInstagram size={24} style={{ marginRight: "12px" }} />
                <FaLinkedinIn size={24} />
              </div>

              <ul className="list-items mt-5">
                <li>About</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default Footer;
