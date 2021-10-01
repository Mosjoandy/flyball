import React from 'react';
// import './GoogleEmbed.css';
import { Container, Card } from "react-bootstrap";

function GoogleEmbed() {
    const addy = '401 Sheldon St, El Segundo, CA 90245'
    return (
        <Container fluid>
            <Card.Title>
                <h2 className="text-center">At the El Segundo Recreation Park</h2>
            </Card.Title>
            <a className="text-center" samesite="none" href="https://goo.gl/maps/6RvoezVppmigL1VG8" target="_blank" rel="noopener noreferrer">
                <Card.Text style={{ marginBottom: '2vh', color: 'white', textDecoration: 'underline white' }}>{addy}</Card.Text>
            </a>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1655.3922563202661!2d-118.4122849!3d33.9209452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b141263ae193%3A0x637258c8962a2e45!2sEl%20Segundo%20Parks%20%26%20Recreation!5e0!3m2!1sen!2sus!4v1631947195965!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: '0', borderRadius: '10px' }}
                loading="lazy"
                title="Embedded Google Map"
                samesite="none"
            >
            </iframe>
        </Container>
    );
};

export default GoogleEmbed

