import React, { Component } from 'react';
// import './WhatPanel.css';
import { Container, Row, Col, Card } from "react-bootstrap";
// import flyballVid from '../../images/flyballvid.mp4'
import placeHold from "../../images/115488.jpg";


class WhatPanel extends Component {

    render() {
        return (
            <Container fluid>
                <Row >
                    <Col>
                        <h2 >What is flyball?</h2>
                        <Card.Img variant="bottom" src={placeHold} />
                        <p>https://youtu.be/mZ9ugj73Oqw</p>
                        <Card.Subtitle>We do not own the rights to this video</Card.Subtitle>
                    </Col>
                </Row>
                <Row className="bgBlack">
                    <Col>
                        <p>Flyball is a team relay race for dogs. 2 teams of 4 dogs
                            race against each other. The racecourse consists of 4 jumps
                            spaced 10 feet apart, with a start line 6 feet in front of
                            the first jump and a flyball box 15 feet from the last jump.</p>
                        <p>The first dog must race over all four hurdles to the box and
                            trigger the box with its paws. The box then releases a tennis ball,
                            which the dog must catch and bring back over all four jumps.</p>
                        <p>As the first dog returns, the second dog starts running.
                            Ideally, the dogs pass nose-to-nose at the start line. The dog
                            is faulted if it passes too early and must run again at the end.</p>
                        <p>The race continues until all four dogs have finished. If a
                            dog or handler makes an error (such as dropping a ball, going
                            around a jump, or passing too early), that dog must rerun. The
                            first team that finishes running all dogs wins. However, both
                            winning and losing teams gain points towards their titles,
                            depending on how fast they finish the race! </p>
                    </Col>
                </Row>



                <div>Video here
                    {/* <video autoPlay loop muted>
                            <source src={flyballVid} type="video/mp4" />
                        </video> */}
                </div>
            </Container>
        );
    };
};

export default WhatPanel