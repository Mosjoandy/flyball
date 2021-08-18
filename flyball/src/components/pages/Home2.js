import React, { Component } from 'react';
import './Home2.css';
import Logo1 from "../../images/Logo1.png";
import flyballVid from '../../images/flyballvid.mp4'

class Home2 extends Component {

    render() {
        return (
            <div>
                <h1>The Usual Suspects</h1>
                <div id="socialIconRow">
                    <div id="socialIcons">FB, IG</div>
                    <div id="emailRow"></div>
                </div>

                <div id="landingSection">
                    <div id="logoLeft">
                        <img id="logoIMG" src={Logo1} alt="Main Doggo Drawn" />
                    </div>
                    <div id="landingRight">
                        <h3>Welcome to the Usual Suspects flyball dog team</h3>
                        <h4>Dogs of all shapes and sizes are welcome</h4>
                    </div>
                    <div id="landingDescription">
                        <h2>What is flyball?</h2>
                        <div>Youtube embed</div>
                        <p>We do not own the rights to this video</p>
                        <p>Flyball is a team relay race for dogs. 2 teams of 4 dogs
                            race against each other. The racecourse consists of 4 jumps
                            spaced 10 feet apart, with a start line 6 feet in front of
                            the first jump and a flyball box 15 feet from the last jump.</p>
                        <p>The first dog must race over all four hurdles to the box and
                            trigger the box with its paws. The box then releases a tennis ball,
                            which the dog must catch and bring back over all four jumps.</p>
                        <p>As the first dog returns, the second dog starts running.
                            Ideally, the dogs pass nose-to-nose at the start line. The dog
                            is faulted if it passes too early and must run again at the end.</p>
                        <p>The race continues until all four dogs have finished. If a
                            dog or handler makes an error (such as dropping a ball, going
                            around a jump, or passing too early), that dog must rerun. The
                            first team that finishes running all dogs wins. However, both
                            winning and losing teams gain points towards their titles,
                            depending on how fast they finish the race! </p>
                    </div>
                    <div>Video here
                        {/* <video autoPlay loop muted>
                            <source src={flyballVid} type="video/mp4" />
                        </video> */}
                    </div>
                </div>

                <div id="aboutSection">
                    <div id="aboutDescription">
                        <h1>About Us</h1>
                        <h4>The Usual Suspects is the onyl flyball club in the South Bay
                            Area of Los Angeles</h4>
                        <p>We have been a team for over 15 years, having fun with our dogs
                            and only using positive training techniques to learn this exciting
                            team sport.</p>
                        <p>The club open to anyone interested in teaching their dog the
                            sport of flyball, and all family members are encouraged to participate.
                            Dogs of any age, breed, or experience are welcome to come join the fun.</p>
                        <p>The Usual Suspects was founded in XXXX by Dave Goldwine. As a dog
                            trainer and longtime flyball dog runner his passion for the sport lead
                            him to xxx. Since them, our team has competed in XXX tournaments under
                            the UFli and NAFA leagues.</p>
                    </div>
                    <div id="davePicRight">
                        <img />
                    </div>

                    <div id="daveDescriptionLeft">
                        <p>On June 28, 2019, our founder Dave Goldwine passed away. His spirit
                            continues to live on in our memories and within his Flyball legacy.</p>
                    </div>
                </div>

                <div id="activityInfoSection">
                    <h1>Get those paws moving!</h1>
                    <p>Team Practice is currently Tuesday Nights from 7:00pm to 9:00pm during
                        warmer months </p>
                    <div id="googleMapsEmbed">
                        Google maps embed
                    </div>
                    <div id="scheduleLeft">
                        <h1>First-timer Schedule</h1>
                        <p>Dog owners are welcome to visit us without your dog on any practice day, to check out the sport, the team members, and get answers to any questions you may have</p>
                        <p>Bring your pup AND a dog crate to the first and second practice of the month for their first two Intro to Flyball classes</p>
                        <p>Continue to Beginner classes for $120, which include a one-year membership</p>
                        <p>We will work with you and teach your dog everything they need to know to master the skills of flyball</p>
                        <p>Weekly practice is $5 per session (used for park rental fees)</p>
                    </div>
                    <div id="schduleRight">
                        <h1>Experienced Schedule</h1>
                        <p>Drop-in practices held Weekly</p>
                        <p>Bring a dog crate</p>
                        <p>Practice is $5 per session (used for park rental fees)</p>
                        <p>Annual Club fees apply</p>
                    </div>
                </div>

                <div id="competitionSection">
                    <h1>Competitions</h1>
                </div>

                <div id="footer">
                        
                </div>
            </div>
        );
    };
};

export default Home2