import React, { Component } from 'react';
// import './TopPanel.css';
import Logo1 from "../../images/Logo1.png";
import Logo2 from "../../images/Logo2.png";
import LineUpLogo from "../../images/UsualSuspects_LineUp.png"
import { Container, Row, Col, Card, Image } from "react-bootstrap";

class TopPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Logos: [Logo1, Logo2]
        };
    };

    render() {
        // const hijutsu = Math.floor(Math.random() * 2)
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} xl>

                        <Image src={LineUpLogo}
                            style={{
                                width: '100%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                paddingTop: '11vh'
                            }} />
                        <Card.Body className="text-center">
                            <Card.Title style={{ color: '#008000' }}>
                                Welcome To The Usual Suspects Flyball Dog Team
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
};




export default TopPanel