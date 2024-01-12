import React from 'react';
import { Text } from '../../../../components/Text';
import { AccountsContainer } from '../../../../features/update/social/AccountsContainer';
import { SettingsSection } from '../shared/SettingsSection';
import { SettingsHeader } from '../shared/SettingsHeader';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { User } from '../../../../contexts/user.types';

export const AccountsPage = () => {
  const { firstName, lastName } = useOutletContext() as User;
  return (
    <>
      <Helmet>
        <title>Accounts - {`${firstName} ${lastName}`}</title>
      </Helmet>

      <div className=''>
        <SettingsHeader
          title='Accounts'
          highlight='Add social links that will be displayed on your account as a way of
          reaching out to you'
        />
        <Text
          as='h5'
          size='2xl'
          weight={500}
        ></Text>
        <Text
          as='p'
          size='sm'
        ></Text>

        <SettingsSection>
          <div className='space-y-1'>
            <Text
              as='h6'
              size='sm'
              weight={500}
            >
              Social links
            </Text>
            <Text
              as='h6'
              size='sm'
            >
              Add facebook, instagram, linkedIn, whatsapp url links to optimize
              your account
            </Text>
          </div>
          <AccountsContainer />
        </SettingsSection>
      </div>
    </>
  );
};
