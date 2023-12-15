import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';
import { LuWand2 } from 'react-icons/lu';
import { Textarea } from '../../../components/ui/Textarea';

export const SetUp = ({ onSwitch }: { onSwitch: () => void }) => {
  const handleSubmit = () => {
    onSwitch();
  };

  return (
    <div className='space-y-5'>
      <div className='space-y-1'>
        <Text
          as='h5'
          weight={500}
          size='3xl'
          className='text-primary'
        >
          Setup your store
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          eligendi nihil saepe
        </Text>
      </div>

      <Fields />

      <Button
        className='w-full'
        onClick={handleSubmit}
      >
        Setup my store <LuWand2 />
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
      <Text
        as='h5'
        weight={500}
        size='lg'
      >
        Store details
      </Text>
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
        Store location
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
    </div>
  );
};
