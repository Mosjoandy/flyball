import React from 'react';
// import './Nav.css';
import { Navbar, Container, NavDropdown, Image } from "react-bootstrap";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";


function Nav() {
    return (
        <Container >
            <Navbar fixed="top" style={{background:'#008000'}} >
                <Container>
                    <Navbar.Collapse id="socialIconRow" className="d-flex justify-content-between" >

                        <Navbar.Brand>
                            <a href="https://www.instagram.com/theusualsuspectsfc/">
                                <Image
                                    src={Instagram}
                                    style={{ height: '30px', width: '30px', margin: '0 10px' }}
                                />
                            </a>
                            <a href="https://www.facebook.com/pg/theusualsuspectsfc/">
                                <Image
                                    src={Facebook}
                                    style={{ height: '30px', width: '30px' }}
                                />
                            </a>
                        </Navbar.Brand>
                        <NavDropdown
                            title="Navigation"
                      
                        >
                            <NavDropdown.Item href="" style={{ color: '#008000' }}>About Us</NavDropdown.Item>
                            <NavDropdown.Item href="" style={{ color: '#008000' }}>Activities</NavDropdown.Item>
                            <NavDropdown.Item href="" style={{ color: '#008000' }}>The Team</NavDropdown.Item>
                            <NavDropdown.Item href="" style={{ color: '#008000' }}>Contact</NavDropdown.Item>

                        </NavDropdown>




                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </Container>
    );
};

export default Nav