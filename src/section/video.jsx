import React, { useRef, useEffect, useState } from 'react';
import '../index.css';

const Video = () => {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsVideoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsVideoHovered(false);
  };

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  
  return (
    <div>
      <div
        ref={videoRef}
        className={`bg-white z-50`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        {isVideoHovered && <div ref={cursorRef} className="custom-cursor"></div>}
      </div>
    </div>
  );
};

export default Video;