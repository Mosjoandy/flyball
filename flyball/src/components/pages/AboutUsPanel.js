import React from 'react';
// import './AboutUsPanel.css';
import { Container, Row } from "react-bootstrap";

function AboutUsPanel() {
    return (
        <Container fluid>
            <Row>
                <div id="aboutDescription">
                    <h1>About Us</h1>
                    <h4>The Usual Suspects is the onyl flyball club in the South Bay
                        Area of Los Angeles</h4>
                    <p>We have been a team for over 15 years, having fun with our dogs
                        and only using positive training techniques to learn this exciting
                        team sport.</p>
                    <p>The club open to anyone interested in teaching their dog the
                        sport of flyball, and all family members are encouraged to participate.
                        Dogs of any age, breed, or experience are welcome to come join the fun.</p>
                    <p>The Usual Suspects was founded in XXXX by Dave Goldwine. As a dog
                        trainer and longtime flyball dog runner his passion for the sport lead
                        him to xxx. Since them, our team has competed in XXX tournaments under
                        the UFli and NAFA leagues.</p>
                </div>
                <div id="davePicRight">
                    {/* <img id="davePic" src={daveIMG} alt="dave's face" /> */}
                </div>

                <div id="daveDescriptionLeft">
                    <p>On June 28, 2019, our founder Dave Goldwine passed away. His spirit
                        continues to live on in our memories and within his Flyball legacy.</p>
                </div>
            </Row>

        </Container>
    );
};

export default AboutUsPanel