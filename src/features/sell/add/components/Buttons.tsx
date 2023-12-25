import React from 'react';
import { Button } from '../../../../components/ui/Button';

export const Buttons = () => {
  return (
    <div className='flex flex-col w-full gap-3 mt-8 sm:flex-row sm:justify-between'>
      <Button
        variant='outline'
        type='button'
        size='xs'
      >
        Cancel
      </Button>

      <Button
        variant='primary'
        type='submit'
        size='xs'
      >
        Create new product
      </Button>
    </div>
  );
};
