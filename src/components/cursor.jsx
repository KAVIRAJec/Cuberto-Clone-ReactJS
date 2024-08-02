import React, { useEffect, useRef } from 'react';
import '../index.css';
import { motion } from 'framer-motion';

const Cursor = ({  hoverContent, isVideoHovered, isProjectsHovered, projects, image }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        let offsetX = 0;
        let offsetY = 0;

        if (hoverContent) {
          offsetX = -50;
          offsetY = -50;
        }

        if (projects) {
          offsetX = -50;
          offsetY = -50;
        }

        if (image) {
          offsetX = -50;
          offsetY = -50;
        }
        
        cursorRef.current.style.left = `${e.clientX + offsetX}px`;
        cursorRef.current.style.top = `${e.clientY + offsetY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [ cursorRef, hoverContent, projects, image]);

  return (
    <motion.div
      ref={cursorRef}
      className={`cursor fixed w-5 h-5 rounded-full top-0 left-0 pointer-events-none z-5 
      ${isProjectsHovered ? 'bg-white' : 'bg-black'} 
      ${isVideoHovered ? 'bg-white cursor-play' : 'bg-black'}
      ${projects ? 'bg-white cursor-play' : 'bg-black'}
      ${image ? 'bg-slate-700 cursor-play' : 'bg-black'}`}
      animate={{ 
        x: 1, 
        y: 1,
        width: (hoverContent || projects || image) ? '90px' : '20px',
        height: (hoverContent || projects) || image ? '90px' : '20px',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {projects && (
        <span className="text-black font-bold text-center w-full h-full flex items-center justify-center">
          Explore
        </span>
      )}
      {image && (
        <span className="text-white font-bold text-center w-full h-full flex items-center justify-center">
          Drag
        </span>
      )}
    </motion.div>
    
  );
};

export default Cursor;