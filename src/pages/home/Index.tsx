import React from 'react';
import { Text } from '../../components/Text';
import { Link } from 'react-router-dom';
import { SignUp } from '../../features/signUp/Index';
import { Helmet } from 'react-helmet-async';
import { Div } from '../../components/Div';

const links = [
  { title: 'Sign in', url: '/auth/' },
  { title: 'Privacy policy', url: '/' },
  { title: 'Terms of service', url: '/' },
];

const LinkList = ({ link }: { link: (typeof links)[number] }) => {
  return (
    <Link
      to={link.url}
      className='text-sm'
    >
      {link.title}
    </Link>
  );
};

const SideBar = () => {
  return (
    <Div
      layout='hidden'
      className='flex-col justify-between p-8 bg-transparent lg:flex from-white to-primary-200 bg-gradient-to-br basis-5/12'
    >
      <Div className='space-y-3 lg:w-96'>
        <Text
          as='h2'
          size='3xl'
          weight={500}
          className='text-primary'
        >
          The interactive eCommerce platform
        </Text>
      </Div>

      <Div className='space-y-2 lg:w-96'>
        <Text
          as='p'
          size='sm'
        >
          myMarket Inc. is fully licensed by NDIC and registered as an eCommerce
          agency in Nigeria
        </Text>
        <Div className='inline-flex items-center gap-x-3'>
          {links.map((link) => (
            <LinkList link={link} />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - myMarket</title>
      </Helmet>

      {/* page */}
      <Div
        layout='flex'
        className='min-h-screen px-3 lg:px-0'
      >
        <SideBar />
        <Div
          layout='flex'
          className='self-center justify-center flex-1 my-8 lg:my-0'
        >
          <Div className='w-full sm:w-[500px]'>
            <SignUp />
          </Div>
        </Div>
      </Div>
    </>
  );
};
