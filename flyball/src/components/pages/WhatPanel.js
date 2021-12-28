import React, { Component } from 'react';
import './WhatPanel.css';
import { Container, Row, Col } from "react-bootstrap";
// import flyballVid from '../../images/flyballmute.mp4'
import YoutubeEmbed from "./../youtube/YoutubeEmbed.js";
import ExpansionJutsu from '../cardtext/ExpansionJutsu.js';
import ShrinkingJutsu from '../cardtext/ShrinkingJutsu.js';
import { CSSTransition } from 'react-transition-group';


class WhatPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { tori: false }
        this.state = { tora: false };

        this.obito = this.obito.bind(this);
    };

    obito() {
        this.setState({ tora: this.tora = !this.tora });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h2 style={{ fontWeight: 'bold' }}>What is flyball?</h2>
                        <YoutubeEmbed embedId="mZ9ugj73Oqw" />
                        <div className="" style={{ marginTop: '10px', marginBottom: '10px', color: 'grey' }}>
                            We do not own the rights to this video
                        </div>
                    </Col>
                </Row>

                {this.tora ?
                    null
                    :
                    <div onClick={() => this.setState({ tori: this.tori = true })}>
                        <ShrinkingJutsu />
                    </div>
                }
                <CSSTransition
                    in={this.tori}
                    timeout={900}
                    classNames="whatInfo"
                    unmountOnExit
                    onEnter={() => this.obito()}
                    onExited={() => this.obito()}
                >
                    <div onClick={() => this.setState({ tori: this.tori = false })}>
                        <ExpansionJutsu />
                    </div>
                </CSSTransition>

                {/* <Row style={{ marginTop: '2vh', position: 'relative', zIndex: '8889' }}>
                    <video
                        autoPlay
                        muted
                        src={flyballVid}
                        title="The Usual Suspects in Action"
                        type="video/mp4"
                    >
                        Your browser does not like this flyball video!
                    </video>
                    <YoutubeEmbed embedId="oklyzU9uS18?playlist=oklyzU9uS18&autoplay=1&controls=0&mute=1&rel=0&loop=1" />
                </Row> */}
            </Container>
        );
    };
};

export default WhatPanel;