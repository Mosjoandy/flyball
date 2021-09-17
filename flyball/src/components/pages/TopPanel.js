import React from 'react';
// import './TopPanel.css';
import Logo1 from "../../images/Logo1.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function TopPanel() {
    return (
        <Container fluid>

            <Row>
                <Col sm={12} xs>
                    <Image src={Logo1} style={{ width:'50%', marginLeft:'auto', marginRight:'auto', display:'block', paddingTop:'7vh'}}/>
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