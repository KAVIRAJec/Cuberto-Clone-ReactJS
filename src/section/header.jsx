import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Cursor from '../components/cursor';
import { motion } from 'framer-motion';
import '../index.css';

function Header() {
  const [hoverCuberto, setHoverCuberto] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cursorRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
    },
  };
  const textVariants = {
    hidden: { y: '100%' },
    visible: { y: 0 },
    exit: { y: '-100%' },
  };
  
  const newTextVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
    exit: { y: '100%' },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  
  const handleMouseEnterCuberto = () => {
    setHoverCuberto(true);
  };

  const handleMouseLeaveCuberto = () => {
    setHoverCuberto(false);
  };

  const handleMouseEnterMenu = () => {
    setHoverMenu(true);
  };

  const handleMouseLeaveMenu = () => {
    setHoverMenu(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="flex justify-between m-8"
        transition={{ duration: 0.5 }}
      >
        <div
          className={`text-2xl noto-sans-unique ${hoverCuberto ? 'text-white z-50 cursor-none' : ''}`}
          onMouseEnter={handleMouseEnterCuberto}
          onMouseLeave={handleMouseLeaveCuberto}
        >
          cuberto
        </div>
        <motion.div
          className={`flex gap-x-2 mr-8 ${hoverMenu ? 'text-white z-50 cursor-none' : ''}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
          onClick={toggleSidebar}
        >
          <p className='text-xl -mt-1 montserrat-menu'>menu</p>
          <Menu />
        </motion.div>
        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 right-0 w-[600px] h-full bg-white text-black z-50 cursor-pointer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <X className="absolute top-8 right-16 " onClick={toggleSidebar} />
            <motion.div className='flex' initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div className='ml-16 mt-32' variants={containerVariants}>
                <motion.p className='poppins-menu text-slate-400 font-extralight' variants={itemVariants}>
                  Social Media
                </motion.p>
                <motion.p className='poppins-menu mt-7' variants={itemVariants}>
                  LinkedIn
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  Behance
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  Dribbble
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  Instagram
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  YouTube
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  Twitter
                </motion.p>
                <motion.p className='poppins-menu mt-4' variants={itemVariants}>
                  GitHub
                </motion.p>
              </motion.div>
              <motion.div className='ml-24 mt-32' variants={containerVariants}>
                <motion.p className='poppins-menu  text-slate-400 font-extralight' variants={itemVariants}>
                  Menu
                </motion.p>
                <motion.p className='text-4xl mt-5' variants={itemVariants}>
                  What do we do
                </motion.p>
                <motion.p className='text-4xl mt-5' variants={itemVariants}>
                  Projects
                </motion.p>
                <motion.p className='text-4xl mt-5' variants={itemVariants}>
                  Company
                </motion.p>
                <motion.p className='text-4xl mt-5' variants={itemVariants}>
                  Our Work
                </motion.p>
                <motion.p className='text-4xl mt-5' variants={itemVariants}>
                  Contact
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className='ml-5 mt-32 text-base font-extralight text-gray-400'
            >
              Get in Touch
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className='ml-5 mt-4 text-2xl font-medium underline decoration-1 underline-offset-4'
            >
              info@cuberto.com
            </motion.div>
          </motion.div>
        )}
        <Cursor cursorRef={cursorRef} hoverContent={hoverCuberto || hoverMenu || isSidebarOpen} />
      </motion.div>
    </>
  );
}

export default Header;