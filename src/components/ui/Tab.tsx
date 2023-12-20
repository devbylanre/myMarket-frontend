import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  defaultTab: string | number;
}

interface TabContextProps {
  tab: string | number;
  isActive: (currentTab: string | number) => boolean;
  toggleTab: (tab: string | number) => void;
}

const TabContext = createContext<TabContextProps | null>(null);

export const Tab = ({ className, defaultTab, ...rest }: TabProps) => {
  const [tab, setTab] = useState<string | number>(defaultTab);

  const toggleTab = (tab: string | number) => {
    setTab(tab);
  };

  const isActive = (currentTab: string | number) => currentTab === tab;

  return (
    <TabContext.Provider value={{ tab, isActive, toggleTab }}>
      <div
        className={twMerge('flex overflow-x-hidden border-b', className)}
        {...rest}
      />
    </TabContext.Provider>
  );
};

interface TabIndicatorProps extends HTMLAttributes<HTMLDivElement> {}

export const TabIndicator = ({ className, ...rest }: TabIndicatorProps) => {
  return (
    <div
      className={twMerge(
        '-bottom-[1px] absolute left-0 rounded-full w-full h-[3px] bg-zinc-950',
        className
      )}
      {...rest}
    />
  );
};

interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
}

export const TabItem = ({
  className,
  children,
  value,
  ...rest
}: TabItemProps) => {
  const { toggleTab, isActive } = useContext(TabContext)!;

  return (
    <div
      className={twMerge(
        'min-w-[200px] relative flex flex-col items-center justify-center whitespace-nowrap py-2',
        className
      )}
      {...rest}
      onClick={() => toggleTab(value)}
    >
      {children}
      {isActive(value) ? <TabIndicator /> : null}
    </div>
  );
};
