import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { User } from '../../../contexts/user.types';
import { twMerge } from 'tailwind-merge';
import { Details } from './shared/Details';
import { Helmet } from 'react-helmet-async';
import { Bio } from './shared/Bio';
import { ProfileTab } from './shared/ProfileTab';
import { Accounts } from './shared/Accounts';
import { UserCard } from './shared/UserCard';

export const ProfilePage = () => {
  const payload: any = useLoaderData();
  const user = payload.user.data as User;
  const products = payload.products.data;

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
              'border-t border-t-zinc-200 flex flex-col-reverse lg:flex-row w-full'
            )}
          >
            <ProfileTab
              isSeller={user.isSeller}
              store={user.store}
              products={products}
              userId={user._id}
            />

            <div className='px-3 py-5 lg:border-l lg:fixed lg:right-0 lg:w-3/12 border-l-zinc-200 lg:h-screen'>
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
    fetchData: async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/fetch/${params.id}`
      );

      return await response.json();
    },

    fetchProducts: async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/fetch/products/${params.id}`
      );

      return await response.json();
    },
  };

  const user = await helper.fetchData();
  const products = await helper.fetchProducts();

  return { user, products };
};
