import React from 'react';
// import './SchedulePanel.css';
import { Container, Row, Col, Card, ListGroup, Button, Modal } from "react-bootstrap";
import GoogleEmbed from './../googlemaps/GoogleEmbed.js'

function SchedulePanel() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);


    return (
        <Container className="bgBlack" fluid>

            <Row>
                <Col>
                    <Card.Text className='text-center' style={{ marginTop: '2vh', marginBottom: '3vh' }}>
                        Team Practices are weekday nights warmer months and weekend mornings during colder months
                    </Card.Text>
                    <Card.Text className='text-center' style={{ marginTop: '2vh', marginBottom: '3vh' }}>
                        During colder months, we practice Saturday mornings 9:30am to 11:30am.
                    </Card.Text>

                    {/* google calendar */}
                    <Card border='success' style={{ marginTop: '2vh', marginBottom: '2vh' }}>
                        <iframe src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23008000&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=The%20Usual%20Suspects%20Flyball&src=dGhldXNmbHliYWxsY2x1YkBnbWFpbC5jb20&color=%23039BE5'
                            title='gcalendar'
                            style=
                            {{
                                borderWidth: '0',
                                width: '100%',
                                height: '60vh',
                                frameborder: '0',
                                scrolling: 'no'
                            }}>
                        </iframe>
                    </Card>

                    {/* google map */}
                    <GoogleEmbed />
                </Col>
            </Row>

            {/* buttons */}
            <Row>
                <div className="d-grid gap-2" style={{ marginTop: '3vh', marginBottom: '3vh' }}>
                    <Button variant="success" className='border-dark border-2' size='lg' onClick={() => setModalShow3(true)}>
                        Dog Prerequisites
                    </Button>
                    <DogPrereqs
                        show={modalShow3}
                        onHide={() => setModalShow3(false)}
                    />

                    <Button variant="success" className='border-dark border-2' size='lg' onClick={() => setModalShow2(true)}>
                        First-Timer Schedule
                    </Button>
                    <FirstTimerModal
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                    />

                    <Button variant="success" className='border-dark border-2' size='lg' onClick={() => setModalShow(true)}>
                        Experienced Schedule
                    </Button>
                    <ExperiencedModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                </div>
            </Row>
        </Container>
    );
};

function DogPrereqs(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Dog Prerequisites
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup.Item>Basic Obedience</ListGroup.Item>
                <ListGroup.Item>Fetch</ListGroup.Item>
                <ListGroup.Item>Recall</ListGroup.Item>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
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
                <ListGroup.Item>Dog owners are welcome to visit us without their dog on any practice day to check out the sport, meet the team members, and get answers to any questions you may have</ListGroup.Item>
                <ListGroup.Item>Bring your pup and a dog crate to their first two Intro to Flyball classes (held on the first practice of each month)</ListGroup.Item>
                <ListGroup.Item>Continue to Beginner classes for $120, which includes a one-year membership</ListGroup.Item>
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