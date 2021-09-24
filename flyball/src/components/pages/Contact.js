import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';
import { Card, Container, Image, Button, Alert } from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Email from "../../images/email.png";

function Contact() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        <Container style={{ paddingTop: '2rem' }}>
            {showButton && (
                <Button
                    onClick={() => setShowMessage(true)}
                    size="lg"
                >
                    Show Message
                </Button>
            )}
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="alert"
                transitionName='alert'
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
                <div style={{ padding: '10vh', backgroundColor: 'salmon' }}>
                    <Alert
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                    >
                        <Alert.Heading>
                            Animated alert message
                        </Alert.Heading>
                        <p>
                            This alert message is being transitioned in and
                            out of the DOM.
                        </p>
                        <Button onClick={() => setShowMessage(false)}>
                            Close
                        </Button>
                    </Alert>
                </div>
            </CSSTransition>
        </Container>
    );
}
export default Contact

{/* <Container className="bgBlack text-center" fluid id='contact' style={{ paddingTop: '4vh', paddingBottom: '4vh' }}> */ }

// <h2 style={{ fontWeight: 'bold', color:'#008000'}}>Contact</h2>

// <Card.Text>We are always looking for new members interested in bringing their pup!</Card.Text>
// <Card.Body>
//     <a href="mailto: Theusflyballclub@gmail.com">
//         <Image
//             src={Email}
//             style={{ height: '60px', width: '60px' }}
//         />
//     </a>
//     <a href="mailto: Theusflyballclub@gmail.com" style={{ color: 'white' }}>
//         <Card.Text>theusflyballclub@gmail.com</Card.Text>
//     </a>
// </Card.Body>
// <Card.Body >
//     <a href="https://www.instagram.com/theusualsuspectsfc/">
//         <Image
//             src={Instagram}
//             style={{ height: '30px', width: '30px', marginRight: '10px' }}
//         />
//     </a>
//     <a href="https://www.facebook.com/pg/theusualsuspectsfc/">
//         <Image
//             src={Facebook}
//             style={{ height: '30px', width: '30px' }}
//         />
//     </a>
// </Card.Body>
// <Card.Text>Copyright © 2021</Card.Text>
// </Container>