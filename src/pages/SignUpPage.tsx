import React from 'react';
import { Text } from '../components/ui/Text';
import { NavLink } from 'react-router-dom';
import { SignUpContainer } from '../features/signUp/SignUpContainer';

export const SignUpPage = () => {
  return (
    <div className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
      <SideBar />
      <div className='flex justify-center'>
        <div className='w-full px-3 py-8 md:px-0 md:w-4/5 lg:w-3/5 md:py-16'>
          <SignUpContainer />
        </div>
      </div>
    </div>
  );
};

const links: { title: string; url: string }[] = [
  { title: 'Sign in', url: '/auth/' },
  { title: 'Privacy policy', url: '' },
  { title: 'Terms of service', url: '' },
];

const SideBar = () => {
  return (
    <div className='flex-col justify-between hidden w-full h-full p-8 bg-transparent md:flex from-white to-primary/20 bg-gradient-to-br'>
      <div className='flex flex-col w-4/5 lg:w-3/5 gap-y-2'>
        <Text
          as='h2'
          size='5xl'
          weight={500}
          className='text-primary'
        >
          eCommerce platform that promotes local trades
        </Text>
        <Text as='h2'>
          Elevate your community with our thriving eCommerce platform supporting
          local businesses worldwide.
        </Text>
      </div>

      <div className='w-4/5 xl:w-2/5'>
        <Text
          as='h5'
          weight={600}
        >
          myMarket
        </Text>
        <Text
          as='p'
          size='sm'
        >
          myMarket Inc. Western Africa, Fully licensed by NDIC and registered as
          an eCommerce agency in Nigeria
        </Text>
        <div className='inline-flex items-center gap-x-3'>
          {links.map((link) => (
            <NavLink
              key={link.title}
              to={link.url}
            >
              <Text
                as='p'
                size='xs'
                weight={500}
                className='underline capitalize'
              >
                {link.title}
              </Text>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
