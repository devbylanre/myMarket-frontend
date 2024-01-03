import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../ui/Text';
import { LuLock, LuUnlock } from 'react-icons/lu';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/Card';

export const SellerSetup = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Card className='w-full p-0 mx-auto space-y-3 sm:w-96 ring-0'>
      <CardContent className='flex flex-col gap-y-5'>
        <div className='space-y-1 text-center'>
          <Text
            as='h5'
            size='xl'
            weight={500}
            className='inline-flex items-center gap-x-2'
          >
            Become a Seller to Unlock
            <motion.span
              animate={hover ? { x: [-3, 0, 3, 0] } : { x: 0 }}
              transition={{ duration: 0.2 }}
              className='text-primary-500'
            >
              {hover ? <LuUnlock /> : <LuLock />}
            </motion.span>{' '}
            More
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Become a seller to unlock more access to features like product
            selling, analytics, store and many more..
          </Text>
        </div>
        <Button
          size='sm'
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Link to='/app/sell/setup'>Setup a Store Today</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
