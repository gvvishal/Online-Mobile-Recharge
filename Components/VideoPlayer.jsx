import React from 'react';
import './VideoPlayer.css';
import Video from '../assets/reimagine-life-city.mp4'; 

const VideoPlayer = ({ src = Video, poster, controls = true, autoPlay = false }) => {
  return (
    <div className="video-player">
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        className="video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
