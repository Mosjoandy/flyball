import React from 'react';
// import './ScheduleTitle.css';
import { Container, Row, Col, Card } from "react-bootstrap";
// import activitiesTitle from "../../images/activitiesTitle.png";


function ScheduleTitle() {
    return (
        <Container className="bgBlack" fluid id='activities'>
            <Card.Text className="text-center aboutUsTitle negative-margin gilligan-font">
                Activities
            </Card.Text>
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