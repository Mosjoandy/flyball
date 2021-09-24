import React, { Component } from 'react';
import './AboutUsPanel.css';
import aboutUsTitle from "../../images/aboutUsTitle.png";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import ExpansionJutsuTwo from '../cardtext/ExpansionJutsuTwo.js'
import ShrinkingJutsuTwo from '../cardtext/ShrinkingJutsuTwo.js'
import { CSSTransition } from 'react-transition-group';

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
                                {this.tora ?
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
                                </CSSTransition>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default AboutUsPanel