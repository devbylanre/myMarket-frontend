import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Skeleton = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge('w-full h-full animate-pulse', className)}
      {...rest}
    />
  );
};
