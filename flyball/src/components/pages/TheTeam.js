import React, { Component } from 'react';
import './TheTeam.css';
import { Container, Row, Col, Card } from "react-bootstrap";

class TheTeam extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid id='theTeam'>
                <Row>
                    <Col>
                        <Card.Text className="text-center aboutUsTitle negative-margin mistral-font">
                            The Team
                        </Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Title className="text-center" style={{ fontWeight: '600', color: '#008000', paddingBottom: '3vh' }}>
                            Coming Soon!
                        </Card.Title>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default TheTeam

