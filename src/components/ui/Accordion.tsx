import React, {
  createContext,
  useContext,
  useState,
  HTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface AccordionContextProps {
  type: 'single' | 'multiple';
  openItems: string[];
  handleToggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type: 'single' | 'multiple';
  collapsible: boolean;
}

export const Accordion = ({
  type,
  collapsible = true,
  className,
  ...rest
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (collapsible) {
      if (type === 'multiple') {
        setOpenItems((prevItems) =>
          prevItems.includes(value)
            ? prevItems.filter((item) => item !== value)
            : [...prevItems, value]
        );
        return;
      }

      setOpenItems((prevItems) => (prevItems.includes(value) ? [] : [value]));
    }
  };

  return (
    <AccordionContext.Provider value={{ type, openItems, handleToggle }}>
      <div
        className={twMerge('w-full', className)}
        {...rest}
      />
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = ({
  value,
  className,
  ...rest
}: AccordionItemProps) => {
  return (
    <div
      className={twMerge('space-y-0.5', className)}
      data-value={value}
      {...rest}
    />
  );
};

interface AccordionTriggerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  value: string;
  className?: string;
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { value, className, children, ...rest } = props;
  const { handleToggle, openItems } = useContext(AccordionContext)!;

  const isActive = openItems.includes(value);

  return (
    <div
      className={twMerge('cursor-pointer w-full', className)}
      onClick={() => handleToggle(value)}
      {...rest}
    >
      {typeof children === 'function' ? children(isActive) : children}
    </div>
  );
};

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionContent = ({
  value,
  className,
  ...rest
}: AccordionContentProps) => {
  const { openItems } = useContext(AccordionContext)!;

  const isActive = openItems.includes(value);

  return (
    <div
      className={twMerge(
        'w-full transition-all duration-300 ease-in-out',
        isActive
          ? 'translate-y-0 visible h-fit opacity-100'
          : 'translate-y-2 invisible h-0 opacity-0',
        className
      )}
      {...rest}
    />
  );
};
