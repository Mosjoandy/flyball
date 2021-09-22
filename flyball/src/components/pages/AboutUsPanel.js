import React, { Component } from 'react';
// import './AboutUsPanel.css';
import aboutUsTitle from "../../images/aboutUsTitle.png";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import ExpansionJutsuTwo from '../cardtext/ExpansionJutsuTwo.js'
import ShrinkingJutsuTwo from '../cardtext/ShrinkingJutsuTwo.js'

class AboutUsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { tori: false };

        this.choji = this.choji.bind(this);
    };

    choji() {
        this.setState({ tori: this.tori = !this.tori });
    };

    render() {
        return (
            <Container fluid id="aboutDescription">
                <Row>
                    <Col>
                        <Image src={aboutUsTitle}
                            style={{
                                width: '50%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                paddingTop: '4vh',
                                paddingBottom: '2vh'
                            }} />
                        <Card.Title style={{ fontWeight: '600', color: '#008000' }}>
                            The Usual Suspects is the only flyball club in the South Bay
                            Area of Los Angeles
                        </Card.Title>
                        <Row>
                            <Col>
                                <div onClick={() => this.choji()}>
                                    {this.tori ? <ExpansionJutsuTwo /> : <ShrinkingJutsuTwo />}
                                </div>
                            </Col>
                        </Row>


                        {/* <Card.Text>We have been a team for over 15 years, having fun with our dogs
                        and only using positive training techniques to learn this exciting
                        team sport.</Card.Text>
                    <Card.Text>The club open to anyone interested in teaching their dog the
                        sport of flyball, and all family members are encouraged to participate.
                        Dogs of any age, breed, or experience are welcome to come join the fun.</Card.Text>
                    <Card.Text>The Usual Suspects was founded in XXXX by Dave Goldwine. As a dog
                        trainer and longtime flyball dog runner his passion for the sport lead
                        him to xxx. Since then, our team has competed in XXX tournaments under
                        the UFli and NAFA leagues.</Card.Text> */}
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default AboutUsPanel

    // < Row >
    //             <Col md={6}>
    //                 {/* dave pic right */}
    //                 <Image src={DavePic}
    //                     style={{
    //                         width: '100%',
    //                         marginLeft: 'auto',
    //                         marginRight: 'auto',
    //                         display: 'block',
    //                         paddingTop: '2vh',
    //                         paddingBottom: '2vh'
    //                     }} />
    //             </Col>
    //             <Col md={6}>
    //                 <Card.Body id="daveDescriptionLeft">
    //                     <Card.Text>On June 28, 2019, our founder Dave Goldwine passed away. His spirit
    //                         continues to live on in our memories and within his Flyball legacy.</Card.Text>
    //                 </Card.Body>
    //             </Col>
    //         </Row >