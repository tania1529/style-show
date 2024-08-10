// src/Slideshow.js
import React, { useState, useEffect } from 'react';
import './slideshow.scss';
import { theme } from "antd";

const Slideshow = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const {
    token: {  borderRadiusLG },
  } = theme.useToken();

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
          style={{ backgroundImage: `url(${image})`, borderRadius: borderRadiusLG }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
