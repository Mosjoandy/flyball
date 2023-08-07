import React from 'react';
// import './GoogleEmbed.css';
import { Container, Card } from "react-bootstrap";

function GoogleEmbed() {
    const addy = '401 Sheldon St, El Segundo, CA 90245'
    return (
        <Container fluid>
            <Card.Title>
                <h2 className="text-center">Pitchford Campanion Animal Village</h2>
                {/* <h6 className="text-center">(near the tennis courts)</h6> */}
                {/* <h2 className="text-center">El Segundo Recreation Park</h2> */}
            </Card.Title>
            <a className="text-center" samesite="none" href="https://goo.gl/maps/SBcjjcxYuc9SvAXFA" target="_blank" rel="noopener noreferrer">
                <Card.Text style={{ marginBottom: '2vh', color: 'white', textDecoration: 'underline white' }}>{addy}</Card.Text>
            </a>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.133674093309!2d-118.08282020000001!3d33.8088633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e6e084c9983%3A0xafa264e9f4efd842!2sspcaLA%20P.D.%20Pitchford%20Companion%20Animal%20Village%20and%20Education%20Center!5e0!3m2!1sen!2sus!4v1691390435408!5m2!1sen!2sus"
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

