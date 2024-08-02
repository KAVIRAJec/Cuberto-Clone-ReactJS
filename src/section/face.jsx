import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../index.css'; // Ensure you import your CSS file

const Face = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleMouseEnter = () => {
    setIsVideoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsVideoHovered(false);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-32 h-32 ${isVideoHovered ? 'cursor-pointer' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1 }} 
    >
      <video
        ref={videoRef}
        className="w-32 h-32 object-cover rounded-full ml-28"
        autoPlay
        loop
        muted
      >
        <source src="face.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Face;