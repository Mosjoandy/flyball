import React, { useState } from 'react';
import './WhatPanel.css';
import { Container, Row, Col } from "react-bootstrap";
import flyballVid from '../../images/flyballvid.mp4'
import YoutubeEmbed from "./../youtube/YoutubeEmbed.js";
import CardJutsu, { ExpansionJutsu } from './../cardtext/cardText.js'

function WhatPanel() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const paraOne = `Flyball is a team relay race for dogs. 2 teams of 4 dogs race against each other. The racecourse consists of 4 jumps spaced 10 feet apart, with a  `;

    return (
        <Container fluid>
            <Row >
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
                    <div
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed ? <ExpansionJutsu paraOne={paraOne} /> : <CardJutsu />}
                    </div>
                </Col>
            </Row>
            <Row>
                <video autoPlay loop muted>
                    <source src={flyballVid} type="video/mp4" />
                </video>
            </Row>
        </Container>
    );
};

export default WhatPanel