import React, {useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css';





function YoutubeEmbed  ({embedId}){ 
const [videoData, setVideoData] = useState('');

  return(
  <div className="video-responsive" style={{ border: '#008000 solid 3px' }}>
    <iframe
      width="100%"
      className="youtubeVideo"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="Embedded youtube"
      samesite="none"
      onPlay={()=>{console.log('video is playing.')}}
    />
  </div>
  )
};



export default YoutubeEmbed;