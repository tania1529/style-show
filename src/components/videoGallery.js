// src/components/VideoGallery.js
import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div>
      <h1>Video Gallery</h1>
      {videos.map(video => (
        <video key={video.id} controls>
          <source src={video.url} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default VideoGallery;
