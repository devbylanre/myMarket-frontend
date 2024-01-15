import React from 'react';
import { Text } from '../../../components/Text';
import { useLocation } from 'react-router-dom';
import { Div } from '../../../components/Div';
import { Helmet } from 'react-helmet-async';

interface PageHeadlineProps {
  title?: string;
  subHeading: string;
}

export const PageHeadline = ({ title, subHeading }: PageHeadlineProps) => {
  const location = useLocation();

  const helper = {
    getLastUrl: () => {
      const name = location.pathname.split('/')[2];
      const capitalize = name.replace(
        name.charAt(0),
        name.charAt(0).toUpperCase()
      );

      return capitalize;
    },
  };

  return (
    <>
      <Helmet>
        <title>{helper.getLastUrl()} - myMarket UI</title>
        <meta
          name='keywords'
          content={helper.getLastUrl()}
        />
        <meta
          name='description'
          content={subHeading}
        />
      </Helmet>

      <Div className='space-y-2'>
        <Text
          size='3xl'
          weight={500}
          className='capitalize'
        >
          {helper.getLastUrl() || title}
        </Text>
        <Text
          as='p'
          className=''
        >
          {subHeading}
        </Text>
      </Div>
    </>
  );
};
