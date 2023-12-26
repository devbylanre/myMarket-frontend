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
        className={twMerge('flex flex-col gap-y-8', className)}
        {...rest}
      />
    </TabContext.Provider>
  );
};

interface ITabList extends HTMLAttributes<HTMLDivElement> {}

export const TabList = ({ className, ...rest }: ITabList) => {
  return (
    <div
      className={twMerge(
        'flex w-full md:w-fit overflow-clip bg-zinc-100 p-1 rounded-lg gap-x-1',
        className
      )}
      {...rest}
    />
  );
};

interface ITabTrigger extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabTrigger = ({ className, value, ...rest }: ITabTrigger) => {
  const { toggleTab, isActive } = useContext(TabContext)!;

  return (
    <div
      className={twMerge(
        'w-full text-sm p-1 hover:bg-white rounded-md text-center cursor-pointer',
        isActive(value) && 'bg-white ring-1 ring-zinc-950/5 shadow-sm',
        className
      )}
      onClick={() => toggleTab(value)}
      {...rest}
    />
  );
};

interface ITabContent extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabContent = ({ className, value, ...rest }: ITabContent) => {
  const { isActive } = useContext(TabContext)!;

  return (
    <>
      {isActive(value) ? (
        <div
          className={className}
          {...rest}
        />
      ) : null}
    </>
  );
};
