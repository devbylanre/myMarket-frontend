import React from 'react';
import { Button } from '../../../../components/ui/Button';
import { Spinner } from '../../../../components/ui/Spinner';

export const Buttons = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <Button
      type='submit'
      disabled={isLoading ? isLoading : false}
      className='w-full'
    >
      {isLoading ? <Spinner variant='light' /> : 'Upload new product'}
    </Button>
  );
};
