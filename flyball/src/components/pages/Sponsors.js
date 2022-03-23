import React from 'react';
// import './Sponsors.css';
import Sponsor1 from "../../images/El-Segundo-Pet-Resort1.png";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function Sponsors() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card.Text className="text-center aboutUsTitle negative-margin gilligan-font">
                        Sponsors
                    </Card.Text>
                    <Card.Body>
                        <a href='https://www.elsegundopetresort.com/' rel='noreferrer' target='_blank'>
                            <Image src={Sponsor1}
                                style={{
                                    width: '50%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    display: 'block',
                                    paddingTop: '5vh',
                                    paddingBottom: '5vh'
                                }} />
                        </a>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default Sponsors

