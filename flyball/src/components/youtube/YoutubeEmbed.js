import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{ border: '#008000 solid 3px' }}>
    <iframe
      width="100%"
      // height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow=""
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;