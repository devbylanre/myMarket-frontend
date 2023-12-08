import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Badge } from '../../../components/ui/Badge';

export const ThemeBadge = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          size='sm'
        >
          A visual indicator for a value or status descriptor for UI elements.
        </Text>
      </ThemeHeader>

      <BadgeVariants />
    </div>
  );
};

const badgeVariants: string[] = [
  'primary',
  'secondary',
  'dark',
  'outline',
  'soft',
  'success',
  'danger',
  'warning',
];

const BadgeVariants = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col gap-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Badge variants
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis at id
          saepe, optio reiciendis nostrum! Totam iure vitae provident
          praesentium quisquam iusto quia ut illo, facilis nostrum, sit velit
          tempore!
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <div className='inline-flex gap-x-3'>
          {badgeVariants.map((variant) => (
            <Badge
              key={variant}
              variant={variant as 'secondary'}
              className='capitalize'
            >
              {variant}
            </Badge>
          ))}
        </div>
      </ThemeCard>
    </div>
  );
};
