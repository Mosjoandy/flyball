import React, { Component } from 'react';
import './Home.css';
import flyballVid from '../../images/flyballvid.mp4'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="wholeScroll">
{/* 
                    <div id="blackTop">top</div>
                    <div id="blackLeft">left</div>
                    <div id="BlackRight">right</div> */}

                    <div id="landingBG">
                        <div id="titleName">
                            <h1>The Usual Suspects</h1>
                            <h3>Dogs of all shapes and sizes welcome to the only South Bay Los Angeles Flyball club</h3>
                        </div>
                        {/* <video autoPlay loop muted>
                            <source src={flyballVid} type="video/mp4" />
                        </video> */}
                    </div>
                </div>

                <div className="wholeScroll" id="aboutUsSection">
                    <div id="">Who are we?</div>
                    <div>We are </div>
                
                </div>




                <div className="wholeScroll" id="picSection">Pics of each
                    <div id="photo">

                    </div>

                </div>


                <div className="wholeScroll" id="additionalInfoSection">Additional info</div>
                <div className="wholeScroll" id="contactInfoSection">Contact Info</div>
            </div>
        );
    };
};

export default Home;