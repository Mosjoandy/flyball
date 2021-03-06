import React, { Component } from 'react';
import './AboutUsPanel.css';
// import aboutUsTitle from "../../images/aboutUsTitle.png";
import YoutubeEmbed from "./../youtube/YoutubeEmbed.js";
import YoutubeParallax from '../youtube/YoutubeParallax';
import { Container, Row, Col, Card } from "react-bootstrap";
import ExpansionJutsuTwo from '../cardtext/ExpansionJutsuTwo.js'
// import ShrinkingJutsuTwo from '../cardtext/ShrinkingJutsuTwo.js'
// import { CSSTransition } from 'react-transition-group';

class AboutUsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { tori: false };
        this.state = { tora: false };

        this.obito = this.obito.bind(this);
    };

    obito() {
        this.setState({ tora: this.tora = !this.tora });
    };

    render() {
        return (
            <Container fluid id="aboutDescription">
                <Row>
                    <Col>
                        {/* <Image src={aboutUsTitle}
                            style={{
                                width: '50%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                paddingTop: '4vh',
                                paddingBottom: '2vh'
                            }} /> */}
                        <Card.Text className="text-center aboutUsTitle negative-margin gilligan-font">
                            About Us
                        </Card.Text>
                        <Card.Title className='aboutUsTitleSecondary text-center' style={{ fontWeight: '600', color: '#008000' }}>
                            The Usual Suspects is the only flyball club in the South Bay
                            Area of Los Angeles
                        </Card.Title>
                        <Row style={{ marginBottom: '3vh' }}>
                            <Col >
                                <ExpansionJutsuTwo />
                                {/* {this.tora ?
                                    null
                                    :
                                    <div onClick={() => this.setState({ tori: this.tori = true })}>
                                        <ShrinkingJutsuTwo />
                                    </div>
                                }
                                <CSSTransition
                                    in={this.tori}
                                    timeout={900}
                                    classNames="aboutInfo"
                                    unmountOnExit
                                    onEnter={() => this.obito()}
                                    onExited={() => this.obito()}
                                >
                                    <div onClick={() => this.setState({ tori: this.tori = false })}>
                                        <ExpansionJutsuTwo />
                                    </div>
                                </CSSTransition> */}
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row style={{ marginTop: '2vh', marginBottom: '2vh', position: 'relative', zIndex: '8889' }}>
                    {/* <video
                        autoPlay
                        muted
                        src={flyballVid}
                        title="The Usual Suspects in Action"
                        type="video/mp4"
                    >
                        Your browser does not like this flyball video!
                    </video> */}
                    <Col>
                        <YoutubeParallax setIsLoaded={this.props.setIsLoaded} />
                        {/* <YoutubeEmbed embedId="oklyzU9uS18?playlist=oklyzU9uS18&autoplay=1&controls=0&mute=1&rel=0&loop=1" /> */}
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default AboutUsPanel