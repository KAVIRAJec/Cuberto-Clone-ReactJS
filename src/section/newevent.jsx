import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Cursor from '../components/cursor';

const ImageComponent = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
  <motion.div
    className="relative flex-shrink-0 z-50"
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    
  >
    <img
      src={src}
      onError={(e) => {
        e.onerror = null;
        e.target.src = src.replace('.png', '.jpg');
      }}
      alt={alt}
      className="w-64 h-64 object-cover rounded-3xl mx-4"
      onClick={(e) => e.preventDefault()} 
      draggable="false"  // Disable native dragging
      onDragStart={(e) => e.preventDefault()}
    />
    <p className="ml-7 flex items-center mt-2">
      <Instagram className="mr-2" /> Cuberto
    </p>
  </motion.div>
)}

const NewEvent = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    controls.start({ x: '0vw', transition: { duration: 10 } });
    const handleScroll = (e) => {
      if (e.deltaY < 0) {
        controls.start({ x: '-100vw', transition: { duration: 10 } });
      } else {
        controls.start({ x: '100vw', transition: { duration: 10 } });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = containerRef.current.offsetWidth;
      setConstraints({ left: -(containerWidth - viewportWidth), right: 0 });
    }
  }, []);

  return (
    <div className="mt-[80px] overflow-hidden" style={{ userSelect: 'none' }}>
      <motion.div
        className="flex items-center justify-center text-[120px] gap-10 pt-sans-regular-italic whitespace-nowrap"
        animate={controls}
        initial={{ x: '100%' }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      >
        <span className='text-[180px]'>New Inspo -- </span>
        <span className="noto-sans-unique text-[180px]">New Day </span>
        <span>
          <div className="w-80 h-48 rounded-full overflow-hidden relative">
            <video
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src="projects.mp4" type="video/mp4" />
            </video>
          </div>
        </span>
        <span className='text-[180px]'>New Inspo -- </span>
        <span className="noto-sans-unique text-[180px]">New Day </span>
        <span>
          <div className="w-80 h-48 rounded-full overflow-hidden relative">
            <video
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src="projects.mp4" type="video/mp4" />
            </video>
          </div>
        </span>
      </motion.div>

      <motion.div
        className="flex space-x-4 p-4 hide-scrollbar mt-32"
        drag="x"
        dragConstraints={constraints}
        ref={containerRef}
        style={{ width: '100%' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      >
        <ImageComponent src="img1.png" alt="img1" />
        <ImageComponent src="img2.png" alt="img2" />
        <ImageComponent src="img3.png" alt="img3" />
        <ImageComponent src="img4.png" alt="img4" />
        <ImageComponent src="img5.png" alt="img5" />
        <ImageComponent src="img6.png" alt="img6" />
        <ImageComponent src="img7.png" alt="img7" />
        <ImageComponent src="img8.png" alt="img8" />
        <ImageComponent src="img10.png" alt="img10" />
        <ImageComponent src="img11.png" alt="img11" />
      </motion.div>
    </div>
  );
};

export default NewEvent;