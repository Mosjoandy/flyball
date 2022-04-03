import React, {useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
import './YoutubeParallax.css';





function YoutubeParallax  ({embedId, setIsLoaded}){ 
const [videoData, setVideoData] = useState('');

function handleVideoLoader (){
  console.log('Paige is attempting to be unloaded.');
  setIsLoaded(true);
console.log('Paige has been unloaded.');
}

  return(
  // <div className="" id="YoutubeParallax" style={{ border: '#008000 solid 3px' }}>
    
  // </div>
  <ReactPlayer 
  className="bigVideo" 
  url='https://www.youtube.com/embed/oklyzU9uS18' 
  width={'100%'} 
  onStart={handleVideoLoader} 
  wrapper="div" 
  loop="true"
   playing="true"
    muted="true" />
  )
};



export default YoutubeParallax;