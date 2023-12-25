import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { Spinner } from '../../../../components/ui/Spinner';
import { motion } from 'framer-motion';

export const Success = () => {
  return (
    <motion.div
      animate={{ y: [-24, 0], opacity: [0, 1] }}
      className='space-y-5'
    >
      <Spinner variant='primary' />
      <div className='space-y-1'>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Authentication Successful
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Getting everything ready in 5 seconds ...
        </Text>
      </div>
    </motion.div>
  );
};
