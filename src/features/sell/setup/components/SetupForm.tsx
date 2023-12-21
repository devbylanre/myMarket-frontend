import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { Input } from '../../../../components/ui/Input';
import { Button } from '../../../../components/ui/Button';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/Form';
import { LuWand2 } from 'react-icons/lu';
import { Textarea } from '../../../../components/ui/Textarea';
import { Checkbox } from '../../../../components/ui/Checkbox';
import { Spinner } from '../../../../components/ui/Spinner';
import { Separator } from '../../../../components/ui/Separator';

export const SetupForm = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <div className='space-y-5'>
      <Text
        as='h5'
        size='xl'
        weight={500}
      >
        Setup your store
      </Text>
      <div>
        <Details />
        <Separator className='my-8' />
        <Location />
        <Separator className='my-8' />
        <FormField
          name='accept'
          className='flex space-y-0 gap-x-2'
        >
          <Checkbox />
          <FormMessage className='leading-tight'>
            By becoming a Seller, you agree to our seller Terms of service
          </FormMessage>
        </FormField>
      </div>
      <Button
        disabled={isLoading!}
        type='submit'
        className='w-full'
      >
        {isLoading ? (
          <Spinner variant='light' />
        ) : (
          <>
            Setup my store <LuWand2 />
          </>
        )}
      </Button>
    </div>
  );
};

const Details = () => {
  const fields: string[] = ['name', 'description'];

  return (
    <div className='space-y-3'>
      {fields.map((field, i) => (
        <FormField
          name={field}
          key={i}
        >
          <FormLabel className='capitalize'>{field}</FormLabel>
          <FormControl>
            {i === 1 ? (
              <Textarea placeholder={`Store ${field}`} />
            ) : (
              <Input placeholder={`Store ${field}`} />
            )}
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </div>
  );
};

const Location = () => {
  const fields: string[] = ['country', 'state', 'city', 'address'];

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      <Text
        as='h6'
        weight={500}
        className='col-span-full'
      >
        Where is your store located?
      </Text>
      {fields.map((field, i) => (
        <FormField
          key={i}
          name={field}
        >
          <FormLabel className='capitalize'>{field}</FormLabel>
          <FormControl>
            <Input
              disabled={i === 0 ? true : false}
              placeholder={`Store ${field}`}
            />
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </div>
  );
};
