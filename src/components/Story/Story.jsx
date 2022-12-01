import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import "./Story.css";
import Story1 from "../../assets/svg/story-1.svg";
import Story2 from "../../assets/svg/story-2.svg";
import Story3 from "../../assets/svg/story-3.svg";

const Story = () => {
  return (
    <Stack>
      <div className="story-bg">
        <div className="story-heading fs-1">Our Story</div>
        <Container>
          <Row className="col-spacing">
            <Col xl={6} lg={6} md={6} sm>
              <img src={Story1} className="story-img" alt="Story Image" />
            </Col>

            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="story-content-container"
            >
              <p className="right-story-content">
                Like many of you reading this, our team has experienced and
                witnessed the struggles of mental illness and have lost family
                members or friends as a result.
              </p>
            </Col>
          </Row>

          {/*<Row className="col-spacing">
            <Col xl={6} lg={6} md={6} className="story-content-container">
              <p className="left-story-content">
                Gabe & Drew, bonded by a passion for improving mental healthcare
                and frustration about the lack of tools available to youth and
                their caregivers, started Sonar Mental Health out of Stanford
                University. Through hundreds of interviews and months of
                research, they identified that without more time or proper
                training, many of us find it incredibly difficult to identify
                when our loved ones require support.
              </p>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <img src={Story2} alt="Story Image" />
            </Col>
          </Row>

          <Row className="col-spacing">
            <Col xl={6} lg={6} md={6}>
              <img src={Story3} className="story-img" alt="Story Image" />
            </Col>

            <Col xl={6} lg={6} md={6} className="story-content-container">
              <p className="right-story-content">
                With the foundation of years of experience leading mental
                healthcare and technology organizations and having united a team
                of clinicians, expert researchers, technologist, and youth
                leaders, Sonar aspires to address this problem. We are building
                a platform that proactively identifies when youth require
                support and improves the quality of care they receive.
              </p>
            </Col>
          </Row>*/}
        </Container>
      </div>
    </Stack>
  );
};

export default Story;
