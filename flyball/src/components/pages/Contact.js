import React from 'react';
// import './Contact.css';
import { Card, Container, Image } from "react-bootstrap";

import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Email from "../../images/email.png";

function Contact() {
    return (
        <Container className="bgBlack text-center" fluid id='contact' style={{ paddingTop: '4vh' }}>
            <h2 style={{ fontWeight: 'bold', color:'#008000'}}>Contact</h2>

            <Card.Text>We are always looking for new members interested in bringing their pup!</Card.Text>
            <Card.Body>
                <a href="mailto: Theusflyballclub@gmail.com">
                    <Image
                        src={Email}
                        style={{ height: '60px', width: '60px' }}
                    />
                </a>
                <a href="mailto: Theusflyballclub@gmail.com" style={{ color: 'white' }}>
                    <Card.Text>theusflyballclub@gmail.com</Card.Text>
                </a>
            </Card.Body>
            <Card.Body >
                <a href="https://www.instagram.com/theusualsuspectsfc/">
                    <Image
                        src={Instagram}
                        style={{ height: '30px', width: '30px', marginRight: '10px' }}
                    />
                </a>
                <a href="https://www.facebook.com/pg/theusualsuspectsfc/">
                    <Image
                        src={Facebook}
                        style={{ height: '30px', width: '30px' }}
                    />
                </a>
            </Card.Body>
        </Container>
    );
};

export default Contact

