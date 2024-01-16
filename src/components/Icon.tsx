import React from 'react';
import { IconType, IconBaseProps } from 'react-icons/lib';

interface Props extends IconBaseProps {
  icon: IconType;
}

export const Icon = (props: Props) => {
  const { icon, ...rest } = props;
  const Element = icon;

  return <Element {...rest} />;
};
