import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { Toast, ToastContent } from '../../../components/ui/Toast';
import { Button } from '../../../components/ui/Button';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';

export const ThemeToast = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          porro nisi eum mollitia totam doloribus nobis, odit harum impedit
          tenetur unde.
        </Text>
      </UtilHeader>

      <Example />
    </div>
  );
};

const Example = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <Button
            variant='outline'
            size='xs'
            onClick={() => setShowToast((state) => !state)}
          >
            Show toast
          </Button>
          {showToast && (
            <Toast variant='default'>
              <ToastContent className='flex items-center gap-x-2'>
                <Text
                  as='h6'
                  size='sm'
                  weight={500}
                  className='flex-1 leading-tight'
                >
                  User name updated successfully
                </Text>
              </ToastContent>
            </Toast>
          )}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
