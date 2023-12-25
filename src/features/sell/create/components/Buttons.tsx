import React from 'react';
import { Button } from '../../../../components/ui/Button';

export const Buttons = () => {
  return (
    <Button
      variant='primary'
      type='submit'
      size='sm'
      className='w-full mt-8'
    >
      Upload new product
    </Button>
  );
};
