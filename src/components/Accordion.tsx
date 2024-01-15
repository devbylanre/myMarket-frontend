import React, {
  createContext,
  useContext,
  useState,
  HTMLAttributes,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionContextProps {
  multiple: boolean;
  items: string[];
  helper: {
    isActive: (value: string) => boolean;
    toggle: (value: string) => void;
  };
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface AccordionProps extends Props {
  multiple?: boolean;
  defaultValue?: string;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { multiple = false, className, defaultValue, ...rest } = props;
    const [items, setItems] = useState<string[]>([defaultValue || '']);

    const helper = {
      isActive: (value: string) => items.includes(value),
      toggle: (value: string) => {
        const itemExists = items.includes(value);
        if (multiple) {
          if (itemExists) {
            const filter = items.filter((item) => item !== value);
            return setItems(filter);
          }

          return setItems((prevItems) => [...prevItems, value]);
        }

        if (itemExists) {
          return setItems((prevItem) => prevItem);
        }

        return setItems([value]);
      },
    };

    return (
      <AccordionContext.Provider value={{ multiple, items, helper }}>
        <div
          ref={ref}
          className={twMerge('w-full', className)}
          {...rest}
        />
      </AccordionContext.Provider>
    );
  }
);

interface AccordionItemProps extends Props {
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => {
    const { value, className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(
          'border-b border-b-zinc-200 py-3 flex flex-col gap-y-3',
          className
        )}
        data-value={value}
        {...rest}
      />
    );
  }
);

interface AccordionTriggerProps extends Omit<Props, 'children' | 'className'> {
  value: string;
  className: string | ((isActive: boolean) => string);
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const AccordionTrigger = forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>((props, ref) => {
  const { value, className, children, ...rest } = props;
  const {
    helper: { toggle, isActive },
  } = useContext(AccordionContext)!;

  return (
    <div
      ref={ref}
      className={twMerge(
        'cursor-pointer w-full',
        typeof className === 'function' ? className(isActive(value)) : className
      )}
      onClick={() => toggle(value)}
      {...rest}
    >
      {typeof children === 'function' ? children(isActive(value)) : children}
    </div>
  );
});

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>((props, ref) => {
  const { value, className, ...rest } = props;
  const {
    helper: { isActive },
  } = useContext(AccordionContext)!;

  return (
    <AnimatePresence>
      {isActive(value) && (
        <motion.div
          animate={{ height: 'fit-content' }}
          exit={{ height: '0px', overflowY: 'hidden' }}
          transition={{ duration: 0.3 }}
        >
          <div
            ref={ref}
            className={twMerge('w-full', className)}
            {...rest}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});
