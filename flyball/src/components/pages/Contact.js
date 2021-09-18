import React from 'react';
// import './Contact.css';
import { Card, Container } from "react-bootstrap";

function Contact() {
    return (
        <Container className="bgBlack text-center" fluid id='contact' style={{ height: '20vh', paddingTop: '4vh'}}>
            <h2 style={{ fontWeight: 'bold' }}>Contact</h2>

            <Card.Text>We are always looking for new members interested in bringing their pup!</Card.Text>
        </Container>
    );
};

export default Contact

