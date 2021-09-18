import React, { Component } from 'react';
// import './TheTeam.css';
import { Container } from "react-bootstrap";

class TheTeam extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid id='theTeam'>
                <h1>The Team</h1>
            </Container>
        )
    }
};

export default TheTeam

