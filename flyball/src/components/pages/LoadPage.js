import React, { useEffect } from 'react';
import './LoadPage.css';


function LoadPage() {
    
    useEffect(() => {
        // Update the document title using the browser API
        console.log('Page is loading. No Paige.');
      });
    return (
        <div className="LoadImage justify-content-center" fluid id='contact'>
            <img src='https://cdn.discordapp.com/attachments/255903025074405406/956672429550346320/loading_savvy.gif' />
           <h1 className="gilligan-font text-center" >Grabbing the treats</h1>
        </div>
    );
};

export default LoadPage