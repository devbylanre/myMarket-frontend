import React from 'react';
import { SetupContainer } from '../../../features/sell/setup/SetupContainer';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { motion } from 'framer-motion';
import { LuActivity } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';

export const SetupPage = () => {
  const { isSeller } = useOutletContext() as UserSchema;

  return (
    <motion.div
      key={isSeller ? 'true' : 'false'}
      animate={{ y: [-12, 0] }}
      className='w-full mx-auto sm:w-3/5 lg:w-2/5'
    >
      {isSeller ? (
        <div className='space-y-5'>
          <LuActivity className='w-8 h-8 text-zinc-500' />
          <div className='space-y-1'>
            <Text
              as='h5'
              size='xl'
              weight={500}
            >
              You're now a seller
            </Text>
            <Text as='p'>
              You are now a seller, you can proceed by uploading your products,
              browse existing products, and lots more...
            </Text>
          </div>
        </div>
      ) : (
        <SetupContainer />
      )}
    </motion.div>
  );
};
