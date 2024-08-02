import React from 'react'
import { motion } from 'framer-motion';
import '../index.css';

function Hero() {
    return (
        <>
      <div className='block w-1/2 mx-40 text-center mt-24 mb-36'>
        <motion.p
          className='poppins-text text-8xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We are a digital
        </motion.p>
        <div className='flex gap-8 justify-center'>
          <div className="w-36 h-24 rounded-full overflow-hidden relative">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="brandingHeader.mp4" type="video/mp4" />
            </video>
          </div>
          <motion.p
            className='text-8xl -mt-1 montserrat-text'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            design and
          </motion.p>
        </div>
        <motion.p
          className='text-8xl -mt-1 poppins-side'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          motion agency
        </motion.p>
      </div>
    </>
    )
}

export default Hero
