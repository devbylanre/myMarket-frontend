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
import { Spinner } from '../../../components/ui/Spinner';

export const ThemeSpinner = () => {
  return (
    <div className='space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          molestias voluptate! Et reprehenderit ab aliquam asperiores a eveniet
          in! Illo accusamus, reprehenderit exercitationem laboriosam ducimus
          ipsum placeat. Recusandae, numquam maiores?
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
        <UtilCardPreview className='space-x-4 h-36 bg-zinc-200 rounded-2xl'>
          {Array.from(['default', 'light', 'primary', 'secondary', 'dark']).map(
            (variant, i) => (
              <Spinner
                key={i}
                variant={variant as 'primary'}
              />
            )
          )}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
