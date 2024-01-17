import React from 'react';
import { Text } from '../../../../components/Text';
import { UserBilling } from '../../../../contexts/user.types';

export const Data = ({ billing }: { billing: UserBilling }) => {
  return (
    <div className='flex gap-x-1'>
      {Object.values(billing).every((v) => v !== '') ? (
        Object.keys(billing)
          .reverse()
          .map((key, i) => (
            <Text
              key={key}
              as='p'
              size='sm'
              className='capitalize'
            >
              {i + 1 < Object.keys(billing).length
                ? `${billing[key as keyof UserBilling]},`
                : billing[key as keyof UserBilling]}
            </Text>
          ))
      ) : (
        <Text
          as='p'
          size='sm'
        >
          No billing information available
        </Text>
      )}
    </div>
  );
};
