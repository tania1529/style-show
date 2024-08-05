// src/Slideshow.js
import React, { useState, useEffect } from 'react';
import './slideshow.scss';

const Slideshow = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
