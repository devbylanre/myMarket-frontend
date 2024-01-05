import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import { PrivateLayout } from '../private/PrivateLayout';
import { Navbar } from './components/Navbar';
import { Spinner } from '../../components/ui/Spinner';

const Loader = ({ user }: { user: any }) => {
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return (
      <div className='grid min-h-[87vh] place-content-center'>
        <Spinner />
      </div>
    );
  }

  return <Outlet context={user} />;
};

export const AppLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='min-h-screen'>
          <Header
            firstName={user.firstName}
            lastName={user.lastName}
            url={user.photo.url}
          />
          <Sidebar id={user._id} />
          <Navbar id={user._id} />
          <div className='lg:w-[83%] lg:ml-[17%] bg-white mb-14 lg:mb-0'>
            <Loader user={user} />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
