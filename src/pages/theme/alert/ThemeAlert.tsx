import React from 'react';
import { Text } from '../../../components/ui/Text';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Alert, AlertDismiss } from '../../../components/ui/Alert';
import { LuWifiOff, LuX } from 'react-icons/lu';

export const ThemeAlert = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsam
          magni saepe soluta, nostrum recusandae facere? Magni consequatur fuga,
          laboriosam nisi
        </Text>
      </UtilHeader>

      <Example />
    </div>
  );
};

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview className='space-y-5 w-96'>
          <Alert className='space-y-2'>
            <div className='inline-flex items-center w-full pb-1 border-b gap-x-2'>
              <LuWifiOff className='p-1.5 rounded-full w-8 h-8 bg-zinc-100 stroke-zinc-950' />
              <Text
                as='h6'
                size='sm'
                weight={500}
                className='flex-1'
              >
                No internet connection
              </Text>
              <AlertDismiss>
                <LuX className='w-4 h-4' />
              </AlertDismiss>
            </div>
            <Text
              as='p'
              size='sm'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur obcaecati sunt officiis placeat impedit illo soluta
              ratione reprehenderit
            </Text>
          </Alert>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
