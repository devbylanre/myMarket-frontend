import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Separator } from '../../../components/ui/Separator';
import { User } from '../../../contexts/user.types';
import { twMerge } from 'tailwind-merge';
import { Details } from './cards/Details';
import { Helmet } from 'react-helmet-async';
import { Bio } from './cards/Bio';
import { ProfileTab } from './cards/ProfileTab';
import { Accounts } from './cards/Accounts';
import { UserCard } from './cards/UserCard';

export const ProfilePage = () => {
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
              'border-t border-t-zinc-200 flex flex-col lg:flex-row px-3 sm:px-8 h-full'
            )}
          >
            <ProfileTab
              isSeller={user.isSeller}
              store={user.store}
            />

            <Separator
              orientation='vertical'
              className='mx-5'
            />

            <div className='py-5 basis-full lg:basis-5/12'>
              <UserCard
                firstName={user.firstName}
                lastName={user.lastName}
                photo={user.photo}
              />
              <Bio bio={user.bio} />
              <Details
                email={user.email}
                mobile={user.mobile}
                billing={user.billing}
              />
              <Accounts accounts={user.accounts} />
            </div>
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
