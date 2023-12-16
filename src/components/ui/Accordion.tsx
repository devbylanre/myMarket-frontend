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
      className={twMerge('space-y-2', className)}
      data-value={value}
      {...rest}
    />
  );
};

interface AccordionTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const AccordionTrigger = ({
  value,
  className,
  children,
}: AccordionTriggerProps) => {
  const { handleToggle, openItems } = useContext(AccordionContext)!;

  const isActive = openItems.includes(value);

  const handleClick = () => {
    handleToggle(value);
  };

  return (
    <div
      className={twMerge('cursor-pointer w-full', className)}
      onClick={handleClick}
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

  return openItems.includes(value) ? (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  ) : null;
};
