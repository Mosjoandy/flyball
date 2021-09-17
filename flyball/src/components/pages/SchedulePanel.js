import React, { Component } from 'react';
// import './SchedulePanel.css';
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

class SchedulePanel extends Component {

    render() {
        return (
            <Container fluid>
                <Row className="bgBlack">
                    <h1>Get those paws moving!</h1>
                    <Col>
                        <Card className="bgWhite">
                            <p>Team Practice is currently Tuesday Nights from 7:00pm to 9:00pm during
                                warmer months </p>
                            <div id="googleMapsEmbed">
                                Google maps embed
                            </div>
                        </Card>
                    </Col>
                    <Row>
                        <Col xs sm={6}>
                            <Card className="bgWhite">
                                <Card.Header>First-timer Schedule</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Dog owners are welcome to visit us without your dog on any practice day, to check out the sport, the team members, and get answers to any questions you may have</ListGroup.Item>
                                    <ListGroup.Item>Bring your pup AND a dog crate to the first and second practice of the month for their first two Intro to Flyball classes</ListGroup.Item>
                                    <ListGroup.Item>Continue to Beginner classes for $120, which include a one-year membership</ListGroup.Item>
                                    <ListGroup.Item>We will work with you and teach your dog everything they need to know to master the skills of flyball</ListGroup.Item>
                                    <ListGroup.Item>Weekly practice is $5 per session (used for park rental fees)</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col xs sm={6}>
                            <Card className="bgWhite">
                                <Card.Header>Experienced Schedule</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Drop-in practices held Weekly</ListGroup.Item>
                                    <ListGroup.Item>Bring a dog crate</ListGroup.Item>
                                    <ListGroup.Item>Practice is $5 per session (used for park rental fees)</ListGroup.Item>
                                    <ListGroup.Item>Annual Club fees apply</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Row>

            </Container>
        );
    };
};

export default SchedulePanel