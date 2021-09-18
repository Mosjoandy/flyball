import React from 'react';
// import './SchedulePanel.css';
import { Container, Row, Col, Card, ListGroup, Button, Modal } from "react-bootstrap";
import GoogleEmbed from './../googlemaps/GoogleEmbed.js'

function SchedulePanel() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);


    return (
        <Container className="bgWhite" fluid>
            <Row>
                <Col>
                    <Card.Text style={{ marginTop: '2vh', marginBottom: '3vh' }}>
                        Team Practice is currently Tuesday Nights from 7:00pm to 9:00pm during
                        warmer months
                    </Card.Text>
                    <GoogleEmbed />
                </Col>
            </Row>
            <Row>
                <div className="d-grid gap-2" style={{ marginTop: '3vh', marginBottom: '3vh' }}>
                    <Button variant="success" size='lg' onClick={() => setModalShow(true)}>
                        Experienced Schedule
                    </Button>
                    <ExperiencedModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <Button variant="success" size='lg' onClick={() => setModalShow2(true)}>
                        First-Timer Schedule
                    </Button>
                    <FirstTimerModal
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                    />
                </div>
            </Row>
        </Container>
    );
};


function ExperiencedModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Experienced Schedule
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup.Item>Drop-in practices held Weekly</ListGroup.Item>
                <ListGroup.Item>Bring a dog crate</ListGroup.Item>
                <ListGroup.Item>Practice is $5 per session (used for park rental fees)</ListGroup.Item>
                <ListGroup.Item>Annual Club fees apply</ListGroup.Item>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

function FirstTimerModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    First-timer Schedule
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup.Item>Dog owners are welcome to visit us without your dog on any practice day, to check out the sport, the team members, and get answers to any questions you may have</ListGroup.Item>
                <ListGroup.Item>Bring your pup AND a dog crate to the first and second practice of the month for their first two Intro to Flyball classes</ListGroup.Item>
                <ListGroup.Item>Continue to Beginner classes for $120, which include a one-year membership</ListGroup.Item>
                <ListGroup.Item>We will work with you and teach your dog everything they need to know to master the skills of flyball</ListGroup.Item>
                <ListGroup.Item>Weekly practice is $5 per session (used for park rental fees)</ListGroup.Item>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default SchedulePanel