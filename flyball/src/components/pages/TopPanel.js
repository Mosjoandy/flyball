import React from 'react';
// import './TopPanel.css';
import Logo1 from "../../images/Logo1.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function TopPanel() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} xl>
                    <Image src={Logo1}
                        style={{
                            width: '75%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'block',
                            paddingTop: '7vh'
                        }} />
                    <Card.Body className="text-center">
                        <Card.Title style={{ color: '#008000' }}>
                            Welcome to The Usual Suspects flyball dog team
                        </Card.Title>
                        <Card.Text>
                            Dogs of all shapes and sizes are welcome
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default TopPanel