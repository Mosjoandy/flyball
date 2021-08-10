import React, { Component } from 'react';
import './Home.css';
import flyballVid from '../../images/flyballvid.mp4'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="wholeScroll" id="landingSection">
                    <view id="flyballVidBG">
                        <video autoPlay loop muted>
                            <source src={flyballVid} type="video/mp4" />
                        </video>
                    </view>
                </div>
                <div className="wholeScroll" id="picSection">Pics of each</div>
                <div className="wholeScroll" id="aboutUsSection">About us</div>
                <div className="wholeScroll" id="additionalInfoSection">Additional info</div>
                <div className="wholeScroll" id="contactInfoSection">Contact Info</div>
            </div>
        );
    };
};

export default Home;