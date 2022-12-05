import React, { useEffect } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import group from "../../assets/svg/hero/group.svg"
import MissionVissonCard from "./components/card";
import { cardData } from "../../data/StaticData";
import fish from "../../assets/images/Fish-SVG.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  return (
    <div>
      <div className="hero">
        <Container data-aos="fade-zoom-in" data-aos-duration="1000" className="hero-container px-5">
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack className="aboutUs-stack">
                <h1

                >
                  About Us
                </h1>
                <h2

                >
                  Tagline
                </h2>
                <p

                >
                  Members of a dolphin pod create strong bonds and work together
                  to protect one another and thrive. Join now to build your pod!
                  As dolphins, we have our sonars on at all times and form pods
                  of mental health allies to support you.
                </p>
              </Stack>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="img-section">
              <img
                className="img-fluid"
                width="100%"
                height="100%"
                src={group}
                alt="group"
              />
            </Col>
          </Row>
          <div className="img-fish">
            <img className="fish" width="100%" height="100%" src={fish} alt="fish" />
          </div>
        </Container>
      </div>
      {/* <div className="hero-curve"></div> */}
      <div className="vision-mission">
        <Container>
          <Row>
            {cardData.map((card, index) => (
              <Col data-aos="fade-zoom-in" data-aos-duration="1000" xs={12} sm={12} md={12} lg={6} xl={6} className="cardCol" key={index}>
                <MissionVissonCard title={card.title} content={card.content} backgroundColor={card.backgroundColor} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>


  );
};

export default Hero;
