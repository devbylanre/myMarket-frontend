import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';

export const ThemeButton = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Apply varied button designs to actions within forms, dialogs, and
          other elements, offering compatibility with diverse sizes, states, and
          additional features.
        </Text>
      </ThemeHeader>

      <ButtonVariants />
      <ButtonSizes />
    </div>
  );
};

const buttonVariants = [
  'primary',
  'secondary',
  'dark',
  'outline',
  'soft',
  'warning',
  'danger',
  'success',
];

const ButtonVariants = () => {
  const [tab, setTab] = useState<string>('preview');
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-1'>
        <Text
          as='h3'
          size='lg'
          weight={500}
        >
          Button variants
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
          optio facere perferendis ducimus repellendus, omnis autem consequuntur
          laborum voluptas perspiciatis porro qui quidem voluptates repudiandae
          explicabo soluta eius totam.
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        {tab === 'preview' ? (
          <div className='inline-flex first-letter:uppercase gap-x-3'>
            {buttonVariants.map((variant) => (
              <Button
                key={variant}
                variant={variant as 'primary'}
                className='capitalize'
              >
                {variant}
              </Button>
            ))}
          </div>
        ) : (
          <Text as='p'>Coming soon</Text>
        )}
      </ThemeCard>
    </div>
  );
};

const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const ButtonSizes = () => {
  const [tab, setTab] = useState<string>('preview');
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-1'>
        <Text
          as='h3'
          size='lg'
          weight={500}
        >
          Button sizes
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
          optio facere perferendis ducimus repellendus, omnis autem consequuntur
          laborum voluptas perspiciatis porro qui quidem voluptates repudiandae
          explicabo soluta eius totam.
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        {tab === 'preview' ? (
          <div className='inline-flex first-letter:uppercase gap-x-3'>
            {buttonSizes.map((size) => (
              <Button
                key={size}
                size={size as 'xs'}
              >
                Size-{size}
              </Button>
            ))}
          </div>
        ) : (
          <Text as='p'>Coming soon</Text>
        )}
      </ThemeCard>
    </div>
  );
};
