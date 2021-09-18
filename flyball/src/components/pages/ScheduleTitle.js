import React from 'react';
// import './ScheduleTitle.css';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import activitiesTitle from "../../images/activitiesTitle.png";


function ScheduleTitle() {
    return (
        <Container className="bgBlack" fluid id='activities'>
            <Image src={activitiesTitle}
                style={{
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    paddingTop: '4vh',
                    paddingBottom: '2vh'
                }} />
            <Row>
                <Col>
                    <Card.Title className="text-center" style={{ fontWeight: '600', color: '#008000', paddingBottom: '3vh' }}>
                        Get those paws moving!
                    </Card.Title>
                </Col>
            </Row>
        </Container>
    );
};


export default ScheduleTitle