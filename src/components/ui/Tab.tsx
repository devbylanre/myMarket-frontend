import React, {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface TabContextProps {
  tab: string | number;
  helper: {
    isActive: (value: string) => boolean;
    toggle: (value: string) => void;
  };
}

const TabContext = createContext<TabContextProps | null>(null);

interface Props<E> extends HTMLAttributes<E> {}

interface TabProps extends Props<HTMLDivElement> {
  defaultValue: string;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { className, defaultValue, ...rest } = props;
  const [tab, setTab] = useState<string>(defaultValue);

  const helper = {
    isActive: (value: string) => tab === value,
    toggle: (value: string) => setTab(value),
  };

  return (
    <TabContext.Provider value={{ tab, helper }}>
      <div
        ref={ref}
        className={twMerge('flex flex-col gap-y-8', className)}
        {...rest}
      />
    </TabContext.Provider>
  );
});

export const TabList = forwardRef<HTMLDivElement, Props<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={twMerge(
          'flex w-full md:w-fit overflow-clip bg-zinc-100 p-1 rounded-lg gap-x-1',
          className
        )}
        {...rest}
      />
    );
  }
);

interface TabTriggerProps
  extends Omit<Props<HTMLDivElement>, 'className' | 'children'> {
  className?: string | ((isActive: boolean) => string);
  value: string;
  children?: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const TabTrigger = forwardRef<HTMLDivElement, TabTriggerProps>(
  (props, ref) => {
    const { children, className, value, ...rest } = props;
    const {
      helper: { toggle, isActive },
    } = useContext(TabContext)!;

    return (
      <div
        ref={ref}
        className={twMerge(
          'w-full text-sm py-1 px-3 hover:bg-white rounded-md text-center cursor-pointer',
          isActive(value) && 'bg-white ring-1 ring-zinc-950/5 shadow-sm',
          typeof className === 'function'
            ? className(isActive(value))
            : className
        )}
        onClick={() => toggle(value)}
        {...rest}
      >
        {typeof children === 'function' ? children(isActive(value)) : children}
      </div>
    );
  }
);

interface TabContentProps extends Props<HTMLDivElement> {
  value: string;
}

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  (props, ref) => {
    const { className, value, ...rest } = props;
    const {
      helper: { isActive },
    } = useContext(TabContext)!;

    if (!isActive(value)) return null;

    return (
      <div
        ref={ref}
        className={className}
        {...rest}
      />
    );
  }
);
