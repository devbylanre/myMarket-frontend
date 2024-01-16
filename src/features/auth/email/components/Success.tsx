import React from 'react';
import { Text } from '../../../../components/Text';
import { motion } from 'framer-motion';
import { Icon } from '../../../../components/Icon';
import { TbLockAccess } from 'react-icons/tb';
import { Card, CardContent } from '../../../../components/Card';
import { Div } from '../../../../components/Div';

export const Success = ({ timeout }: { timeout: number }) => {
  return (
    <motion.div animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}>
      <Card>
        <CardContent className='space-y-5'>
          <Icon
            icon={TbLockAccess}
            size={40}
            color='green'
          />

          <Div className='space-y-1'>
            <Text
              as='h5'
              size='lg'
              weight={500}
            >
              Authentication Successful
            </Text>
            <Text
              as='p'
              size='sm'
            >
              Your authentication process is complete, We're setting up your
              account and all requirements in {timeout / 1000} seconds
            </Text>
          </Div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
