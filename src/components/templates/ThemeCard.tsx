import React, { HTMLAttributes } from 'react';

interface ThemeCardProps extends HTMLAttributes<HTMLDivElement> {}

export const ThemeCard = ({ className, ...rest }: ThemeCardProps) => {
  return (
    <div
      className='w-full p-3 rounded-md ring-1 ring-zinc-950/10 min-h-[320px] flex flex-col items-center justify-center'
      {...rest}
    />
  );
};
