import React from 'react';

// components
import { Button } from '../../../components/ui/Button';
import { Spinner } from '../../../components/ui/Spinner';
import {
  CardContent,
  CardTitle,
  CardDescription,
} from '../../../components/ui/Card';

interface ComponentProps {
  onSubmit: () => void;
  isLoading: boolean | null;
}

export const Component = ({ onSubmit, isLoading }: ComponentProps) => {
  return (
    <>
      <CardContent className='space-y-1'>
        <CardTitle
          as='h5'
          weight={600}
        >
          Verify your account
        </CardTitle>
        <CardDescription>
          Click on the button below to verify your account and start uploading
          those awesome products
        </CardDescription>
      </CardContent>

      <Button
        type='button'
        onClick={onSubmit}
        disabled={isLoading!}
      >
        {isLoading ? <Spinner variant='light' /> : 'Click to verify'}
      </Button>
    </>
  );
};
