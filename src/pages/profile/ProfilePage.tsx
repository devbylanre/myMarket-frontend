import React from 'react';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';

// ui components
import { Badge } from '../../components/ui/Badge';
import { Text } from '../../components/ui/Text';
import { useUserContext } from '../../hooks/useUserContext';
import { SellerSetup } from '../../components/templates/SellerSetup';

export const ProfilePage = () => {
  const { user } = useUserContext()!;

  return (
    <div className='space-y-12'>
      <div className='flex flex-col items-center gap-y-3'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
          className='w-20 h-20 bg-white shadow-xl'
        >
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className='w-full space-y-1 text-center sm:w-2/4'>
          <Text
            as='h5'
            size='xl'
            className='capitalize'
          >
            {user && user.firstName + ' ' + user.lastName}
          </Text>
          <div>
            <Badge variant='outline'>Biography:</Badge>
            <Text
              as='span'
              size='sm'
              className='ml-1.5'
            >
              {user?.bio || 'No Bio information provided'}
            </Text>
          </div>
        </div>
      </div>

      {user && (
        <Store
          isSeller={user?.isSeller}
          store={user?.store}
        />
      )}
    </div>
  );
};

const Store = ({
  isSeller,
  store,
}: {
  isSeller: boolean;
  store: Record<string, any>;
}) => {
  return isSeller ? <div></div> : <SellerSetup />;
};
