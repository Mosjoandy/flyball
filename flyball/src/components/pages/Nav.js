import React from 'react';
// import './Nav.css';
import { Navbar, Container, NavDropdown, Row, Col } from "react-bootstrap";

function Nav() {
    return (
        <Container>
            <Navbar fixed="top" >
                <Container >

                    <Row>
                        <Col md={4}>
                            <div>FB | IG | Email</div>
                        </Col>

                        <Col md={{ span: 4, offset: 4 }}>
                            <Navbar.Collapse id="socialIconRow">

                                <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="">Activities</NavDropdown.Item>
                                    <NavDropdown.Item href="">The Team</NavDropdown.Item>
                                </NavDropdown>

                            </Navbar.Collapse>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </Container>

        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
};

export default Nav