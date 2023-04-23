import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./TheTeam.css";
import imageData from "../data/slideImagesData";
import { Container, Row, Col, Card } from "react-bootstrap";

class TheTeam extends Component {
  render() {
    // const rngSlideStart = Math.floor(Math.random() * 10);
   

//shuffles the object to randomize the order of the dogs.
    function shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (sourceArray.length - i));
  
          var temp = sourceArray[j];
          sourceArray[j] = sourceArray[i];
          sourceArray[i] = temp;
      }
      return sourceArray;
  }

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
              startIndex={0}
              slideDuration={500}
              showFullscreenButton={false}
              items={shuffle(imageData)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TheTeam;
