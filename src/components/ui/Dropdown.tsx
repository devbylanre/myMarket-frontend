import {
  useState,
  createContext,
  HTMLAttributes,
  useContext,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownContextProps {
  isVisible: boolean;
  helper: {
    toggle: () => void;
    hide: () => void;
  };
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface DropdownProps extends Omit<Props, 'children'> {
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const helper = {
      toggle: () => setIsVisible(!isVisible),
      hide: () => setIsVisible(false),
    };

    return (
      <DropdownContext.Provider value={{ isVisible, helper }}>
        <div
          ref={ref}
          className={twMerge('relative', className)}
          {...rest}
        >
          {typeof children === 'function' ? children(isVisible) : children}
        </div>
      </DropdownContext.Provider>
    );
  }
);

export const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, ...rest } = props;
    const {
      helper: { toggle },
    } = useContext(DropdownContext)!;

    return (
      <div
        ref={ref}
        className={twMerge('cursor-pointer', className)}
        onClick={toggle}
        {...rest}
      />
    );
  }
);

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { isVisible } = useContext(DropdownContext)!;

    return (
      <div
        ref={ref}
        className={twMerge(
          'absolute mt-1.5 bg-white z-10 ring-1 rounded-md p-1 ring-zinc-950/5 shadow-lg left-0 w-full transition-all ease-in-out duration-300',
          isVisible
            ? 'translate-y-0 scale-100 opacity-100 visible'
            : '-translate-y-2 scale-95 opacity-0 invisible',
          className
        )}
        {...rest}
      />
    );
  }
);

export const DropdownItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  const {
    helper: { hide },
  } = useContext(DropdownContext)!;

  return (
    <div
      ref={ref}
      onClick={hide}
      className={twMerge('cursor-pointer w-full', className)}
      {...rest}
    />
  );
});
