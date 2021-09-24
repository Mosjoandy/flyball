import React, { Component } from 'react';
import './WhatPanel.css';
import { Container, Row, Col } from "react-bootstrap";
import flyballVid from '../../images/flyballvid.mp4'
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
                        <footer className="blockquote-footer" style={{ marginTop: '10px' }}>
                            We do not own the rights to this video
                        </footer>
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






                <Row style={{ marginTop: '2vh', position: 'relative', zIndex: '8889' }}>
                    <video autoPlay loop muted>
                        <source src={flyballVid} type="video/mp4" />
                    </video>
                </Row>
            </Container>
        );
    };
};

export default WhatPanel;