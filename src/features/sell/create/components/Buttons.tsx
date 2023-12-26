import React from 'react';
import { Button } from '../../../../components/ui/Button';
import { Spinner } from '../../../../components/ui/Spinner';

export const Buttons = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <Button
      variant='primary'
      type='submit'
      size='sm'
      disabled={isLoading ? isLoading : false}
      className='w-full mt-8'
    >
      {isLoading ? <Spinner variant='light' /> : 'Upload new product'}
    </Button>
  );
};
