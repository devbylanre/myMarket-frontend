import React from 'react';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

// ui components
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Text';
import { SellerSetup } from '../../../components/templates/SellerSetup';
import { useOutletContext } from 'react-router-dom';
import { IUser, IUSerStore } from '../../../utils/types';
import { Separator } from '../../../components/ui/Separator';
import { Billing } from './cards/Billing';
import { Email } from './cards/Email';
import { Mobile } from './cards/Mobile';
import {
  Tab,
  TabContent,
  TabList,
  TabTrigger,
} from '../../../components/ui/Tab';

export const ProfilePage = () => {
  const { firstName, email, lastName, bio, store, isSeller, billing, mobile } =
    useOutletContext() as IUser;

  return (
    <div className='w-full mx-auto md:w-11/12'>
      <div className='flex flex-col items-start gap-8 md:flex-row'>
        <div className='flex flex-col w-full gap-y-3'>
          <Avatar
            src='/assets/images/memoji-05.png'
            alt='user'
            className='w-20 h-20 bg-white shadow-xl'
          >
            <AvatarFallback></AvatarFallback>
          </Avatar>

          <div className='space-y-1'>
            <Text
              as='h5'
              size='xl'
              className='font-semibold capitalize'
            >
              {firstName + ' ' + lastName}
            </Text>
            <div>
              <Badge variant='outline'>Biography:</Badge>
              <Text
                as='span'
                size='sm'
                className='ml-1.5'
              >
                {bio || 'No Bio information provided'}
              </Text>
            </div>
          </div>
        </div>

        <div className='w-full space-y-4'>
          <Billing billing={billing} />
          <Email email={email} />
          <Mobile mobile={mobile} />
        </div>
      </div>

      <Separator className='my-8' />

      <Tab defaultTab='store'>
        <TabList>
          <TabTrigger value='store'>Store</TabTrigger>
          <TabTrigger value='products'>Products</TabTrigger>
          <TabTrigger value='members'>Members</TabTrigger>
        </TabList>
        <TabContent value='store'>
          {isSeller ? <Store store={store} /> : <SellerSetup />}
        </TabContent>
      </Tab>
    </div>
  );
};

const Store = ({ store }: IUSerStore) => {
  return (
    <div className='flex flex-col gap-12 md:gap-20 md:flex-row'>
      {/* create tab components for store, products, and analytics */}

      <div className='w-full space-y-5'>
        <div className='space-y-2'>
          <Text
            as='h5'
            size='xl'
            weight={600}
          >
            {store.name}
          </Text>
          <Text
            as='p'
            size='sm'
          >
            {store.description}
          </Text>
        </div>
      </div>
      <Location location={store.location} />
    </div>
  );
};

const Location = ({ location }: { location: Record<string, any> }) => {
  return (
    <div className='w-full space-y-2'>
      {Object.keys(location)
        .sort((a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        })
        .map((key) => (
          <Text
            as='p'
            size='sm'
            className='first-letter:uppercase'
          >
            {key}: {location[key]}
          </Text>
        ))}
    </div>
  );
};
