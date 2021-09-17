import React from 'react';
// import './TopPanel.css';
import Logo1 from "../../images/Logo1.png";
import { Container, Row, Col, Card } from "react-bootstrap";

function TopPanel() {
    return (
        <Container fluid>

            <Row id="landingSection" className="jusfity-content-md-center">
                <Col id="logoLeft" sm={12} xs>
                    <Card.Img variant="top" src={Logo1} />
                    {/* <img id="logoIMG" src={Logo1} alt="Main Doggo Drawn" /> */}
                    <Card.Body>
                        <Card.Text>
                            <h3>Welcome to the Usual Suspects flyball dog team</h3>
                            <h4>Dogs of all shapes and sizes are welcome</h4>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default TopPanel