import React from 'react';
import { LuPlus } from 'react-icons/lu';
import { motion } from 'framer-motion';

export const Upload = ({ click }: { click: () => void }) => {
  return (
    <motion.span
      animate={{ scale: [0.3, 1] }}
      className='flex items-center justify-center w-full h-full p-3 rounded-full bg-primary/20 text-primary'
      onClick={click}
    >
      <LuPlus className='w-full h-full' />
    </motion.span>
  );
};
