import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import "./Story.css";
import { storyData } from "./allStory";

const Story = () => {
  return (
    <Stack>
      <div className="story-bg">
        <div className="story-heading fs-1">Our Story</div>
        <Container>
          {storyData.map((item, index) => {
            return (
              <div className="col-spacing">
                {index % 2 == 0 ? (
                  <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <img
                        src={item.storyImg}
                        className="story-img"
                        alt="Story Image"
                      />
                    </Col>

                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="story-content-container"
                    >
                      <p className="right-story-content">{item.storyContent}</p>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col
                      xl={{ span: 6, order: "first" }}
                      lg={{ span: 6, order: "first" }}
                      md={{ span: 6, order: "first" }}
                      sm={{ span: 12, order: "last" }}
                      xs={{ span: 12, order: "last" }}
                      className="story-content-container"
                    >
                      <p className="left-story-content">{item.storyContent}</p>
                    </Col>
                    <Col
                      xl={{ span: 6, order: "last" }}
                      lg={{ span: 6, order: "last" }}
                      md={{ span: 6, order: "last" }}
                      sm={{ span: 12, order: "first" }}
                      xs={{ span: 12, order: "first" }}
                    >
                      <img
                        src={item.storyImg}
                        alt="Story Image"
                        className="right-story-img"
                      />
                    </Col>
                  </Row>
                )}
              </div>
            );
          })}
        </Container>
      </div>
    </Stack>
  );
};

export default Story;
