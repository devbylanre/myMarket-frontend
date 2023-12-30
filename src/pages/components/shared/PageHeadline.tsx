import React from 'react';
import { Text } from '../../../components/ui/Text';
import { useLocation } from 'react-router-dom';

interface PageHeadlineProps {
  title?: string;
  subHeading: string;
}

export const PageHeadline = ({ title, subHeading }: PageHeadlineProps) => {
  const location = useLocation();

  const helper = {
    getLastUrl: () => location.pathname.split('/')[2],
  };

  return (
    <div className='space-y-1'>
      <Text
        size='3xl'
        weight={500}
        className='capitalize'
      >
        {helper.getLastUrl() || title}
      </Text>
      <Text as='p'>{subHeading}</Text>
    </div>
  );
};
