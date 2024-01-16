import React from 'react';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';
import { Card, CardContent } from '../../../../components/Card';
import { Spinner } from '../../../../components/Spinner';
import { TbDiscountCheckFilled } from 'react-icons/tb';
import { Div } from '../../../../components/Div';
import { Icon } from '../../../../components/Icon';

interface Props {
  onSubmit: () => void;
  isLoading: boolean | null;
}

export const Form = ({ onSubmit, isLoading }: Props) => {
  return (
    <Card className=''>
      <CardContent className='flex flex-col items-center text-center gap-y-4'>
        <Icon
          icon={TbDiscountCheckFilled}
          size={40}
          color='green'
        />

        <Div className='space-y-1'>
          <Text
            as='h5'
            size='xl'
            weight={500}
          >
            Verify your email address
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Click on the button to verify your email address and proceed with
            the sign up process
          </Text>
        </Div>

        <Button
          type='button'
          size='sm'
          variant='outline'
          onClick={onSubmit}
          disabled={isLoading!}
          className='mt-3'
        >
          {isLoading ? <Spinner /> : 'Verify my email address'}
        </Button>
      </CardContent>
    </Card>
  );
};
