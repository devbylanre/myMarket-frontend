import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../components/ui/Text';
import { useLocation } from 'react-router-dom';

type ThemeCardProps = {
  tab: string;
  className?: string;
  children: React.ReactNode;
};

export const ThemeCard = ({ tab, className, children }: ThemeCardProps) => {
  return (
    <div
      className={twMerge(
        'border rounded-lg border-zinc-200 shadow-sm p-3  min-h-[320px] h-fit flex flex-col items-center justify-center',
        className,
        tab === 'code' && 'bg-zinc-100 border-0'
      )}
    >
      {children}
    </div>
  );
};

type ThemeHeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ThemeHeader = (props: ThemeHeaderProps) => {
  const { pathname } = useLocation();
  const { children, className } = props;

  return (
    <div className={twMerge('flex flex-col gap-y-1', className)}>
      <Text
        as='h3'
        weight={600}
        size='2xl'
        className='capitalize'
      >
        {pathname.split('theme/')[1]}
      </Text>
      {children}
    </div>
  );
};

type ThemeTabProps = {
  tab: 'preview' | 'code';
  setTab: any;
};

export const ThemeTab = ({ tab, setTab }: ThemeTabProps) => {
  return (
    <div className='inline-flex items-end border-b border-b-zinc-200'>
      {Array.from(['preview', 'code']).map((demoTab) => (
        <Text
          as='h6'
          key={demoTab}
          className={twMerge(
            'first-letter:uppercase px-4 text-zinc-500 py-2 cursor-pointer hover:text-zinc-800',
            tab === demoTab &&
              'text-zinc-800 border-b-2 border-b-zinc-800 font-[600]'
          )}
          weight={500}
          size='sm'
          onClick={() => setTab(demoTab)}
        >
          {demoTab}
        </Text>
      ))}
    </div>
  );
};
