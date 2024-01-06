import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Contacts } from './components/sidebar/Contacts';
import { Helmet } from 'react-helmet-async';
import { Bio } from './components/sidebar/Bio';
import { ProfileTab } from './components/ProfileTab';
import { Accounts } from './components/sidebar/Accounts';
import { Details } from './components/sidebar/Details';
import { Spinner } from '../../../components/ui/Spinner';
import { User } from '../../../contexts/user.types';
import { Product } from '../../../contexts/product.types';
import { useProductContext } from '../../../hooks/useProductContext';

export const ProfilePage = () => {
  const data: any = useLoaderData();
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);
  const [userProducts, setUserProducts] = useState<Product[] | []>([]);

  // contexts
  const loggedInUser = useOutletContext() as User;
  const { products } = useProductContext() as any;

  useEffect(() => {
    if (loggedInUser._id === id) {
      setUser(loggedInUser);
      setUserProducts(products);
      return;
    }

    setUser(data.user);
    setUserProducts(data.products);
  }, [id, data, products, loggedInUser]);

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

          <div className={twMerge('flex flex-col-reverse lg:flex-row w-full')}>
            <ProfileTab
              isSeller={user.isSeller}
              store={user.store}
              products={userProducts}
              userId={user._id}
            />

            <div className='py-5 bg-white lg:border-l lg:fixed lg:right-0 lg:w-3/12 border-l-zinc-200 lg:h-screen'>
              <Details
                email={user.email}
                firstName={user.firstName}
                lastName={user.lastName}
                photo={user.photo}
              />
              <Bio bio={user.bio} />
              <Contacts
                email={user.email}
                mobile={user.mobile}
                billing={user.billing}
              />
              <Accounts accounts={user.accounts} />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
