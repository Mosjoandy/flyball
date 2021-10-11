import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{ border: '#008000 solid 3px' }}>
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="Embedded youtube"
      samesite="none"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;