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

export const Forms = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <div className='space-y-5'>
      <div className='space-y-1'>
        <Text
          as='h5'
          weight={500}
          size='xl'
        >
          Setup your Store
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Set up your account by filling the required information
        </Text>
      </div>
      <Fields />

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

const Fields = () => {
  return (
    <>
      <DetailsFields />
      <LocationFields />
    </>
  );
};

const DetailsFields = () => {
  return (
    <div className='space-y-3'>
      <FormField name='name'>
        <FormLabel>Store name</FormLabel>
        <FormControl>
          <Input
            name='name'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage />
      </FormField>

      <FormField name='description'>
        <FormLabel>Store description</FormLabel>
        <FormControl>
          <Textarea
            name='description'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage>Describe what your store sells </FormMessage>
      </FormField>
    </div>
  );
};

export const LocationFields = () => {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      <Text
        as='h5'
        weight={500}
        size='lg'
        className='col-span-full'
      >
        Where is your store located?
      </Text>

      <FormField name='country'>
        <FormLabel>Country</FormLabel>
        <FormControl>
          <Input
            name='country'
            placeholder='What would you name your store'
            disabled
          />
        </FormControl>
        <FormMessage>Available to users located in Nigeria</FormMessage>
      </FormField>

      <FormField name='state'>
        <FormLabel>State</FormLabel>
        <FormControl>
          <Input
            name='state'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage />
      </FormField>

      <FormField name='city'>
        <FormLabel>City</FormLabel>
        <FormControl>
          <Input
            name='city'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage />
      </FormField>

      <FormField name='address'>
        <FormLabel>Address</FormLabel>
        <FormControl>
          <Input
            name='address'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField
        name='accept'
        className='inline-flex items-center space-y-0 col-span-full gap-x-2'
      >
        <Checkbox />
        <FormMessage>
          Do you accept our Seller Terms of Service and Privacy policy
        </FormMessage>
      </FormField>
    </div>
  );
};
