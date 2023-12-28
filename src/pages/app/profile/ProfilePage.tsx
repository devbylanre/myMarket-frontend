import React from 'react';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Text } from '../../../components/ui/Text';
import { useLoaderData } from 'react-router-dom';
import { Separator } from '../../../components/ui/Separator';
import { User } from '../../../contexts/user.types';
import { twMerge } from 'tailwind-merge';
import { Details } from './cards/Details';
import { Helmet } from 'react-helmet-async';
import { Bio } from './cards/Bio';
import { ProfileTab } from './cards/ProfileTab';
import { Accounts } from './cards/Accounts';

export const ProfilePage = () => {
  const sectionClassName = 'px-3 sm:px-8';
  const payload: any = useLoaderData();
  const user = payload.data as User;

  return (
    <>
      {user ? (
        <>
          <Helmet>
            <title>Profile - {`${user.firstName} ${user.lastName}`}</title>
            <meta
              name='keywords'
              content={`${user.firstName} ${user.lastName}`}
            />
            <meta
              name='description'
              content={user.bio}
            />
          </Helmet>

          <div
            className={twMerge(
              sectionClassName,
              'inline-flex items-center gap-x-3 py-5'
            )}
          >
            <Avatar
              src='/assets/images/memoji-05.png'
              alt='user'
              className='w-12 h-12 bg-white shadow-xl'
            >
              <AvatarFallback></AvatarFallback>
            </Avatar>

            <Text
              as='h5'
              size='2xl'
              className='capitalize'
            >
              {user.firstName + ' ' + user.lastName}
            </Text>
          </div>

          <div
            className={twMerge(
              'border-t border-t-zinc-200 flex flex-col lg:flex-row px-3 sm:px-8 h-full'
            )}
          >
            <div className='py-5 basis-full lg:basis-5/12'>
              <Bio bio={user.bio} />
              <Separator className='my-5' />
              <Details
                email={user.email}
                mobile={user.mobile}
                billing={user.billing}
              />
              <Accounts accounts={user.accounts} />
            </div>

            <Separator orientation='vertical' />

            <ProfileTab
              isSeller={user.isSeller}
              store={user.store}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export const ProfilePageLoader = async ({ params }: { params: any }) => {
  const helper = {
    fetchData: async () =>
      fetch(`http://localhost:5000/api/v1/user/fetch/${params.id}`),
  };

  return helper.fetchData();
};
