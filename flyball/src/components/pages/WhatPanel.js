import React, { Component } from 'react';
import './WhatPanel.css';
import { Container, Row, Col } from "react-bootstrap";
import flyballVid from '../../images/flyballvid.mp4'
import YoutubeEmbed from "./../youtube/YoutubeEmbed.js";
import ExpansionJutsu from '../cardtext/ExpansionJutsu.js'
import ShrinkingJutsu from '../cardtext/ShrinkingJutsu.js'

class WhatPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { tori: false }

        this.choji = this.choji.bind(this);
    };

    choji() {
        this.setState({ tori: this.tori = !this.tori });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h2 style={{ fontWeight: 'bold' }}>What is flyball?</h2>
                        <YoutubeEmbed embedId="mZ9ugj73Oqw" />
                        <footer className="blockquote-footer" style={{ marginTop: '10px' }}>
                            We do not own the rights to this video
                        </footer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div onClick={() => this.choji()}>
                            {this.tori ? <ExpansionJutsu /> : <ShrinkingJutsu />}
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'2vh'}}>
                    <video autoPlay loop muted>
                        <source src={flyballVid} type="video/mp4" />
                    </video>
                </Row>
            </Container>
        );
    };
};

export default WhatPanel;