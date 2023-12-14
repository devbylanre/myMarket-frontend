import React from 'react';
import { Text } from '../../../components/ui/Text';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { FormControl } from '../../../components/ui/FormControl';
import { Input } from '../../../components/ui/Input';
import { FormMessage } from '../../../components/ui/FormMessage';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';
import { LuWand2 } from 'react-icons/lu';

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
      <FormItem>
        <Label name='name'>Store name</Label>
        <FormControl name='name'>
          <Input
            name='name'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage name='name' />
      </FormItem>

      <FormItem>
        <Label name='description'>Store description</Label>
        <FormControl name='description'>
          <Textarea
            name='description'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage name='description'>
          Describe what your store sells{' '}
        </FormMessage>
      </FormItem>
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

      <FormItem>
        <Label name='country'>Country</Label>
        <FormControl name='country'>
          <Input
            name='country'
            placeholder='What would you name your store'
            disabled
          />
        </FormControl>
        <FormMessage name='country'>
          Available to users located in Nigeria
        </FormMessage>
      </FormItem>

      <FormItem>
        <Label name='state'>State</Label>
        <FormControl name='state'>
          <Input
            name='state'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage name='state' />
      </FormItem>

      <FormItem>
        <Label name='city'>City</Label>
        <FormControl name='city'>
          <Input
            name='city'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage name='city' />
      </FormItem>

      <FormItem>
        <Label name='address'>Address</Label>
        <FormControl name='address'>
          <Input
            name='address'
            placeholder='What would you name your store'
          />
        </FormControl>
        <FormMessage name='address' />
      </FormItem>
    </div>
  );
};
