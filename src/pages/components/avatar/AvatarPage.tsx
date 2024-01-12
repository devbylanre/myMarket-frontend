import React from 'react';
import { Avatar, AvatarFallback } from '../../../components/Avatar';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/Tab';

export const AvatarPage = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <PageHeadline subHeading='Avatar components' />

      <PageTab>
        <TabContent value='preview'>
          <Example />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <Avatar
        src='/assets/images/memoji-03.png'
        alt='user'
      >
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
};
