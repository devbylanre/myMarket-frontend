import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Badge, BadgeDismiss } from '../../../components/ui/Badge';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { LuX } from 'react-icons/lu';

export const ThemeBadge = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          A visual indicator for a value or status descriptor for UI elements.
        </Text>
      </UtilHeader>

      <Variants />
      <VariantsWithDismiss />
    </div>
  );
};

const Variants = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview className='flex flex-wrap gap-1.5'>
          {Array.from([
            'primary',
            'secondary',
            'dark',
            'outline',
            'soft',
            'success',
            'danger',
            'warning',
          ]).map((variant, i) => (
            <Badge
              key={i}
              variant={variant as 'primary'}
            >
              Badge {variant}
            </Badge>
          ))}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};

const VariantsWithDismiss = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview className='flex flex-wrap gap-1.5'>
          {Array.from([
            'primary',
            'secondary',
            'dark',
            'outline',
            'soft',
            'success',
            'danger',
            'warning',
          ]).map((variant, i) => (
            <Badge
              key={i}
              variant={variant as 'primary'}
            >
              Badge {variant}
              <BadgeDismiss>
                <LuX />
              </BadgeDismiss>
            </Badge>
          ))}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
