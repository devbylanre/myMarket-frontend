import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../components/ui/Text';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { LuClock10 } from 'react-icons/lu';

interface UtilHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const UtilHeader = (props: UtilHeaderProps) => {
  const { pathname } = useLocation();
  const { children, className } = props;

  return (
    <div className={twMerge('space-y-1', className)}>
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

interface UtilContainerContextProps {
  tab: 'preview' | 'code';
  handleTab: (value: 'preview' | 'code') => void;
}

const UtilContainerContext = createContext<
  UtilContainerContextProps | undefined
>(undefined);

interface UtilContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const UtilContainer = ({ className, ...rest }: UtilContainerProps) => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  const handleTab = (value: 'preview' | 'code') => {
    setTab(value);
  };

  return (
    <UtilContainerContext.Provider value={{ tab, handleTab }}>
      <div
        className={twMerge('space-y-5', className)}
        {...rest}
      />
    </UtilContainerContext.Provider>
  );
};

export const UtilTab = () => {
  const { tab, handleTab } = useContext(UtilContainerContext)!;

  return (
    <div className='inline-flex rounded-md h-fit bg-zinc-50 p-0.5 gap-x-1'>
      {Array.from(['preview', 'code']).map((btn, i) => (
        <Button
          key={btn}
          onClick={() => handleTab(btn as 'preview' | 'code')}
          variant='default'
          size='sm'
          className={twMerge(
            'hover:text-zinc-800 text-zinc-500 capitalize',
            btn === tab &&
              'bg-white ring-1 ring-zinc-950/10 text-zinc-800 font-semibold'
          )}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

interface UtilCardProps extends HTMLAttributes<HTMLDivElement> {}

export const UtilCard = ({ className, ...rest }: UtilCardProps) => {
  return (
    <div
      className='w-full p-3 rounded-md ring-1 ring-zinc-950/10 min-h-[320px] flex flex-col items-center justify-center'
      {...rest}
    />
  );
};

interface UtilCardPreviewProps extends HTMLAttributes<HTMLDivElement> {}

export const UtilCardPreview = ({
  className,
  ...rest
}: UtilCardPreviewProps) => {
  const { tab } = useContext(UtilContainerContext)!;

  if (tab !== 'preview') return null;

  return (
    <div
      className={twMerge(
        'w-full lg:w-96 flex items-center justify-center flex-wrap',
        className
      )}
      {...rest}
    />
  );
};

interface UtilCardCodeProps extends HTMLAttributes<HTMLDivElement> {}

export const UtilCardCode = ({ className, ...rest }: UtilCardCodeProps) => {
  const { tab } = useContext(UtilContainerContext)!;

  if (tab !== 'code') return null;

  return (
    <div
      className={twMerge(
        'w-full lg:w-96 flex flex-col gap-y-2 items-center',
        className
      )}
      {...rest}
    >
      <LuClock10 className='w-8 h-8 text-zinc-400' />
      <Text
        as='h6'
        className='text-center'
      >
        Coming soon
      </Text>
    </div>
  );
};
