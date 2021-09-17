// import React, { Component } from 'react';
// import './Home2.css';
// import Logo1 from "../../images/Logo1.png";
// import placeHold from "../../images/115488.jpg";
// import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
// // import flyballVid from '../../images/flyballvid.mp4'

// class Home2 extends Component {

//     render() {
//         return (
//             <Container fluid>
//                 {/* <h1>The Usual Suspects</h1> */}
//                 <Row id="socialIconRow">
//                     <Col id="socialIcons">FB, IG</Col>
//                     <Col id="emailRow"></Col>
//                 </Row>

//                 <Row id="landingSection" className="jusfity-content-md-center">
//                     <Col id="logoLeft" sm={12} xs>
//                         <Card.Img variant="top" src={Logo1} />
//                         {/* <img id="logoIMG" src={Logo1} alt="Main Doggo Drawn" /> */}
//                         <Card.Body>
//                             <Card.Text>
//                                 <h3>Welcome to the Usual Suspects flyball dog team</h3>
//                                 <h4>Dogs of all shapes and sizes are welcome</h4>
//                             </Card.Text>
//                         </Card.Body>
//                     </Col>
//                 </Row>
//             </Container>


//                <Container fluid>
//                 <Row >
//                     <Col>
//                         <h2 >What is flyball?</h2>
//                         <Card.Img variant="bottom" src={placeHold} />
//                         <p>https://youtu.be/mZ9ugj73Oqw</p>
//                         <Card.Subtitle>We do not own the rights to this video</Card.Subtitle>
//                     </Col>
//                 </Row>
//                 <Row className="bgBlack">
//                     <Col>
//                         <p>Flyball is a team relay race for dogs. 2 teams of 4 dogs
//                             race against each other. The racecourse consists of 4 jumps
//                             spaced 10 feet apart, with a start line 6 feet in front of
//                             the first jump and a flyball box 15 feet from the last jump.</p>
//                         <p>The first dog must race over all four hurdles to the box and
//                             trigger the box with its paws. The box then releases a tennis ball,
//                             which the dog must catch and bring back over all four jumps.</p>
//                         <p>As the first dog returns, the second dog starts running.
//                             Ideally, the dogs pass nose-to-nose at the start line. The dog
//                             is faulted if it passes too early and must run again at the end.</p>
//                         <p>The race continues until all four dogs have finished. If a
//                             dog or handler makes an error (such as dropping a ball, going
//                             around a jump, or passing too early), that dog must rerun. The
//                             first team that finishes running all dogs wins. However, both
//                             winning and losing teams gain points towards their titles,
//                             depending on how fast they finish the race! </p>
//                     </Col>
//                 </Row>
                       


//                 <div>Video here
//                     {/* <video autoPlay loop muted>
//                             <source src={flyballVid} type="video/mp4" />
//                         </video> */}
//                 </div>
//                 </Container>

// <Container fluid
//                 <Row>
//                     <div id="aboutDescription">
//                         <h1>About Us</h1>
//                         <h4>The Usual Suspects is the onyl flyball club in the South Bay
//                             Area of Los Angeles</h4>
//                         <p>We have been a team for over 15 years, having fun with our dogs
//                             and only using positive training techniques to learn this exciting
//                             team sport.</p>
//                         <p>The club open to anyone interested in teaching their dog the
//                             sport of flyball, and all family members are encouraged to participate.
//                             Dogs of any age, breed, or experience are welcome to come join the fun.</p>
//                         <p>The Usual Suspects was founded in XXXX by Dave Goldwine. As a dog
//                             trainer and longtime flyball dog runner his passion for the sport lead
//                             him to xxx. Since them, our team has competed in XXX tournaments under
//                             the UFli and NAFA leagues.</p>
//                     </div>
//                     <div id="davePicRight">
//                         {/* <img id="davePic" src={daveIMG} alt="dave's face" /> */}
//                     </div>

//                     <div id="daveDescriptionLeft">
//                         <p>On June 28, 2019, our founder Dave Goldwine passed away. His spirit
//                             continues to live on in our memories and within his Flyball legacy.</p>
//                     </div>
//                 </Row>

// </Container>

// <Container fluid>
//                 <Row className="bgBlack">
//                     <h1>Get those paws moving!</h1>
//                     <Col>
//                         <Card className="bgWhite">
//                             <p>Team Practice is currently Tuesday Nights from 7:00pm to 9:00pm during
//                                 warmer months </p>
//                             <div id="googleMapsEmbed">
//                                 Google maps embed
//                             </div>
//                         </Card>
//                     </Col>
//                     <Row>
//                         <Col xs sm={6}>
//                             <Card className="bgWhite">
//                                 <Card.Header>First-timer Schedule</Card.Header>
//                                 <ListGroup variant="flush">
//                                     <ListGroup.Item>Dog owners are welcome to visit us without your dog on any practice day, to check out the sport, the team members, and get answers to any questions you may have</ListGroup.Item>
//                                     <ListGroup.Item>Bring your pup AND a dog crate to the first and second practice of the month for their first two Intro to Flyball classes</ListGroup.Item>
//                                     <ListGroup.Item>Continue to Beginner classes for $120, which include a one-year membership</ListGroup.Item>
//                                     <ListGroup.Item>We will work with you and teach your dog everything they need to know to master the skills of flyball</ListGroup.Item>
//                                     <ListGroup.Item>Weekly practice is $5 per session (used for park rental fees)</ListGroup.Item>
//                                 </ListGroup>
//                             </Card>
//                         </Col>
//                         <Col xs sm={6}>
//                             <Card className="bgWhite">
//                                 <Card.Header>Experienced Schedule</Card.Header>
//                                 <ListGroup variant="flush">
//                                     <ListGroup.Item>Drop-in practices held Weekly</ListGroup.Item>
//                                     <ListGroup.Item>Bring a dog crate</ListGroup.Item>
//                                     <ListGroup.Item>Practice is $5 per session (used for park rental fees)</ListGroup.Item>
//                                     <ListGroup.Item>Annual Club fees apply</ListGroup.Item>
//                                 </ListGroup>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Row>

// </Container>

//         <Container fluid>
//                 <div id="competitionSection">
//                     <h1>Competitions</h1>
//                 </div>

//                 <div id="footer">

//                 </div>
//                 </Container>
//             </Container>
//         );
//     };
// };

// export default Home2