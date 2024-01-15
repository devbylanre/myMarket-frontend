import React from 'react';
import { Alert, AlertContent } from '../../../components/Alert';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/Avatar';
import { Text } from '../../../components/Text';
import { Div } from '../../../components/Div';

export const AlertPage = () => {
  return (
    <Div
      layout='flex'
      className='flex-col space-y-8'
    >
      <PageHeadline subHeading='Alert components' />
      <PageTab>
        <Example />
      </PageTab>
    </Div>
  );
};

const Example = () => {
  return (
    <Alert className='space-y-3 rounded-xl bg-zinc-100'>
      <AlertContent className='flex items-center gap-x-3'>
        <Avatar className='w-10 h-10'>
          <AvatarImage
            src='/assets/images/memoji-05.png'
            alt='john doe'
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Text
          weight={500}
          size='xs'
          className='flex-1'
        >
          John doe liked your post -{' '}
          <span className='font-semibold'>
            Know more about the author of Rich Dad, Poor Dad
          </span>
        </Text>
      </AlertContent>
    </Alert>
  );
};
