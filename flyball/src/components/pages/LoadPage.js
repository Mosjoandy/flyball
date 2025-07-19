import React, { useEffect } from 'react';
import LoadingImage from "../../images/Loading/loading_savvy.gif"
import './LoadPage.css';


function LoadPage() {
    
    useEffect(() => {
        // Update the document title using the browser API
        console.log('Page is loading. No Paige.');
      });
    return (
        <div className="LoadImage justify-content-center" fluid id='contact'>
            <img src={LoadingImage} />
           <h1 className="gilligan-font text-center" >Grabbing the treats</h1>
        </div>
    );
};

export default LoadPage