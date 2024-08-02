import React, { useEffect, useRef } from 'react'
import '../index.css'
import Cursor from '../components/cursor';
import { motion } from 'framer-motion';

const Intro = () => {

    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div ref={containerRef} className="relative flex h-screen mb-20">
            <motion.div
                className="w-1/2 h-full p-20"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="C-diamond.mp4" type="video/mp4" />
                </video>
                <Cursor cursorRef={cursorRef} hoverContent={false} />
            </motion.div>
            <motion.div
                className="w-1/2 h-full flex flex-col justify-center items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, scale: 0.5 }}
            >
                <p className="px-32 text-3xl font-medium text-left">
                    Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.
                </p>
                <div className="relative w-96 h-48 rounded-[100px] bg-white border-2 border-black flex justify-center items-center mt-8 overflow-hidden group">
                    <p className="relative z-10 text-black text-3xl font-normal group-hover:text-white transition-colors duration-150">How we work</p>
                    <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"></div>
                </div>
            </motion.div>
        </div>
    )
}

export default Intro