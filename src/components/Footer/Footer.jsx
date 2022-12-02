import React, { useEffect } from "react";
import "./Footer.css";
import {
  Stack,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])

  return (
    <Stack className="footer-bg">
      <div className="content-container">
        <Container fluid>
          <Row>
            <Col xl={6} lg={5} md={12} sm={12} xs={12} data-aos="fade-right" data-aos-duration="2500">
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

            <Col xl={6} lg={7} md={12} sm={12} xs={12} data-aos="fade-left" data-aos-duration="2500">
              <div className="right-content p-5">
                <div className="right-heading my-4">
                  Sign up to join our pod and get early access to Sonar.
                </div>

                <Row>
                  <Form.Group
                    as={Col}
                    xl={8}
                    lg={8}
                    md={7}
                    sm={7}
                    xs={11}
                    className="mx-auto"
                  >
                    <Form.Label className="input-label">Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRight: "unset",
                        }}
                      >
                        <BsEnvelope size={22} style={{ color: "#949494" }} />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="pods@getsonar.org"
                        className="email-field"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    xl={4}
                    lg={4}
                    md={12}
                    sm={12}
                    xs={12}
                    className="btn-column mx-auto"
                  >
                    <Button className="form-button fs-5">Sign Up</Button>
                  </Form.Group>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default Footer;
