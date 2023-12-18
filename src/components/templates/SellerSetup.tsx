import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../ui/Text';
import { LuLock, LuUnlock } from 'react-icons/lu';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const SellerSetup = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='flex flex-col mx-auto mt-8 min-w-[240px] max-w-[500px] gap-y-5 text-center items-center'>
      <Text
        as='h5'
        size='2xl'
        weight={500}
        className='inline-flex items-center gap-x-2'
      >
        Become a Seller to Unlock
        <motion.span
          animate={hover ? { x: [-3, 0, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.2 }}
          className='text-primary'
        >
          {hover ? <LuUnlock /> : <LuLock />}
        </motion.span>{' '}
        More
      </Text>
      <Text as='p'>
        Become a seller to unlock more access to features like product selling,
        analytics, store and many more..
      </Text>
      <Link to='/app/sell/setup'>
        <Button
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Setup a Store Today
        </Button>
      </Link>
    </div>
  );
};
