import React, { Component } from 'react';
import './Nav.css';
import { Navbar, Container, NavDropdown, Image } from "react-bootstrap";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Email from "../../images/email.png";
import classnames from "classnames";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };


    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <Container fluid className={
                classnames({
                    "navUp--hidden": !this.state.visible
                }, "navUp ")}>
                <Navbar style={{ background: '#008000' }} >
                    <Container>
                        <Navbar.Collapse id="socialIconRow" className="d-flex justify-content-between" >

                            <Navbar.Brand>
                                <a href="https://www.instagram.com/theusualsuspectsfc/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Instagram}
                                        style={{ height: '30px', width: '30px', margin: '0 10px' }}
                                    />
                                </a>
                                <a href="https://www.facebook.com/pg/theusualsuspectsfc/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Facebook}
                                        style={{ height: '30px', width: '30px' }}
                                    />
                                </a>
                                <a href="mailto: Theusflyballclub@gmail.com">
                                    <Image
                                        src={Email}
                                        style={{ height: '30px', width: '30px', marginLeft: '11px' }}
                                    />
                                </a>
                            </Navbar.Brand>
                            <NavDropdown title="Navigation">
                                <NavDropdown.Item href="#aboutDescription" style={{ color: '#008000' }}>About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#activities" style={{ color: '#008000' }}>Activities</NavDropdown.Item>
                                <NavDropdown.Item href="#theTeam" style={{ color: '#008000' }}>The Team</NavDropdown.Item>
                                <NavDropdown.Item href="#contact" style={{ color: '#008000' }}>Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        );
    };
};

export default Nav;