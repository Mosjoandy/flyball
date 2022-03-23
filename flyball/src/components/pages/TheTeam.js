import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./TheTeam.css";
import imageData from "../data/slideImagesData";
import { Container, Row, Col, Card } from "react-bootstrap";

class TheTeam extends Component {
  render() {
    const rngSlideStart = Math.floor(Math.random() * 10);

    return (
      <Container fluid id="theTeam">
        <Row>
          <Col>
            <Card.Text className="text-center aboutUsTitle negative-margin gilligan-font">
              The Team
            </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col >
            <ImageGallery
              showPlayButton={false}
              autoPlay={true}
              startIndex={rngSlideStart}
              slideDuration={500}
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
