import { useState, createContext, HTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface DropdownContextProps {
  isVisible: boolean;
  handleToggle: () => void;
  onHide: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

export const Dropdown = (props: DropdownProps) => {
  const { className, ...rest } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = () => setIsVisible(!isVisible);

  const onHide = () => setIsVisible(false);

  return (
    <DropdownContext.Provider value={{ isVisible, handleToggle, onHide }}>
      <div
        className={twMerge('relative', className)}
        {...rest}
      />
    </DropdownContext.Provider>
  );
};

interface DropdownTriggerProps {
  className?: string;
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
}

export const DropdownTrigger = ({
  className,
  children,
}: DropdownTriggerProps) => {
  const { isVisible, handleToggle } = useContext(DropdownContext)!;

  return (
    <div
      className={twMerge('', className)}
      onClick={handleToggle}
    >
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
};

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement> {}

export const DropdownContent = ({
  className,
  ...rest
}: DropdownContentProps) => {
  const { isVisible } = useContext(DropdownContext)!;

  if (!isVisible) return null;

  return (
    <div
      className={twMerge(
        'absolute top-12 bg-white z-10 ring-1 rounded-md p-1 ring-zinc-950/10 left-0 w-full',
        className
      )}
      {...rest}
    />
  );
};

interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {}

export const DropdownItem = ({ className, ...rest }: DropdownItemProps) => {
  const { onHide } = useContext(DropdownContext)!;

  return (
    <div
      onClick={onHide}
      className={twMerge('cursor-pointer w-full', className)}
      {...rest}
    />
  );
};
