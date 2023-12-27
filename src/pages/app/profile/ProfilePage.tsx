import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Text } from '../../../components/ui/Text';
import { useOutletContext } from 'react-router-dom';
import { Separator } from '../../../components/ui/Separator';
import { User } from '../../../contexts/user.types';
import { twMerge } from 'tailwind-merge';
import { Details } from './cards/Details';
import { Helmet } from 'react-helmet-async';
import { Bio } from './cards/Bio';
import { ProfileTab } from './cards/ProfileTab';

export const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const { _id } = useOutletContext() as User;

  useEffect(() => {
    const helper = {
      fetchData: async () => {
        const response = await fetch(
          `http://localhost:5000/api/v1/user/fetch/${_id}`,
          {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
          }
        );

        const json = await response.json();

        if (response.ok) {
          setUser(json.data);
        }
      },
    };

    helper.fetchData();
  }, [_id]);

  const sectionClassName = 'px-3 sm:px-8';

  return (
    <>
      {user ? (
        <>
          <Helmet>
            <title>{`${user.firstName} ${user.lastName}`}</title>
            <meta
              name='keyword'
              content={`${user.firstName} ${user.lastName}`}
            />
            <meta
              name='description'
              content={user.bio}
            />
          </Helmet>

          <div className='mt-5'>
            <div
              className={twMerge(
                sectionClassName,
                'inline-flex items-center gap-x-3'
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

            <Separator className='my-5' />

            <div
              className={twMerge(
                sectionClassName,
                'grid w-full grid-cols-1 gap-8 mt-8 lg:grid-cols-4 lg:gap-12'
              )}
            >
              <div>
                <Bio bio={user.bio} />
                <Separator />
                <Details
                  email={user.email}
                  mobile={user.mobile}
                  billing={user.billing}
                />
              </div>

              <ProfileTab
                isSeller={user.isSeller}
                store={user.store}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
