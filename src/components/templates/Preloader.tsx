import React from 'react';
import { motion } from 'framer-motion';

export const Preloader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 1] }}
        transition={{ repeat: Infinity }}
        className='text-lg'
      >
        myMarket
      </motion.h6>
    </div>
  );
};
