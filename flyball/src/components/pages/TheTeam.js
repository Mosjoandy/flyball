import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./TheTeam.css";
import imageData from "../data/slideImagesData";
import { Container, Row, Col, Card } from "react-bootstrap";

class TheTeam extends Component {
  render() {
    const rngSlideStart = Math.floor(Math.random() * 4);

    return (
      <Container fluid id="theTeam">
        <Row>
          <Col>
            <Card.Text className="text-center aboutUsTitle negative-margin mistral-font">
              The Team
            </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Title
              className="text-center"
              style={{
                fontWeight: "600",
                color: "#008000",
                paddingBottom: "3vh",
              }}
            >
              Coming Soon!
            </Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageGallery
              showPlayButton={false}
              autoPlay={true}
              startIndex={rngSlideStart}
              showFullscreenButton={false}
              items={imageData}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TheTeam;
