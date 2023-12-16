import React from 'react';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import { Separator } from '../../../components/ui/Separator';
import { Button } from '../../../components/ui/Button';

export const ThemeSeparator = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nihil!
          Similique quisquam accusamus
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
        <UtilCardPreview>
          <div>
            <Text
              as='h5'
              size='xl'
              weight={500}
            >
              Wait can i separate items?
            </Text>
          </div>
          <Separator />
          <div className='inline-flex'>
            <Button>Create account</Button>
            <Separator orientation='vertical' />
            <Button>Connect with others</Button>
          </div>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
