import React, { HTMLAttributes, createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LuChevronDown } from 'react-icons/lu';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { Text } from './Text';
import { FormContext } from './Form';

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
  className?: string;
}

interface SelectContextProps {
  handleToggle: () => void;
  handleSelect: (option: string | number) => void;
  value: any;
  isActive: (value: string | number) => boolean;
  touched: boolean;
  multiple: boolean;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const Select = (props: SelectProps) => {
  const { className, multiple = false, ...rest } = props;
  const { touched, helper, value } = useContext(FormContext)!;

  const handleToggle = () => helper.setTouched(!touched);

  const handleSelect = (option: string | number) => {
    if (multiple) {
      const array: any[] = value;
      helper.setValue(
        array.includes(option)
          ? array.filter((v) => v !== option)
          : [...array, option]
      );
      return;
    }

    helper.setValue(option);
  };

  const isActive = (option: string | number) => {
    if (multiple) {
      const array: any[] = value;
      return array.includes(option);
    }

    return value === option;
  };

  return (
    <SelectContext.Provider
      value={{ handleToggle, handleSelect, isActive, value, touched, multiple }}
    >
      <div
        className={twMerge('relative w-full', className)}
        {...rest}
      />
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps extends HTMLAttributes<HTMLDivElement> {}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { className, children, ...rest } = props;
  const { handleToggle, touched } = useContext(SelectContext)!;

  return (
    <div
      className={twMerge(
        'min-h-[36px] w-full inline-flex gap-x-4 justify-between items-center cursor-pointer bg-white rounded-md transition-all duration-200 ease-in-out px-2',
        className
      )}
      {...rest}
      onClick={handleToggle}
    >
      {children}
      <motion.span
        animate={touched ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.25 }}
      >
        <LuChevronDown className='w-4 h-4' />
      </motion.span>
    </div>
  );
};

interface SelectValueProps {
  placeholder: string;
  className?: string;
  children?: (value: any) => React.ReactNode | (string | number);
}

export const SelectValue = (props: SelectValueProps) => {
  const { placeholder, className, children, ...rest } = props;
  const { value } = useContext(SelectContext)!;

  return (
    <Text
      className={twMerge(
        'flex-1 text-zinc-800 font-medium',
        (!value || value.length < 1) && 'text-zinc-500 font-normal',
        className
      )}
      size='sm'
      {...rest}
    >
      {value
        ? typeof children === 'function'
          ? children(value)
          : value
        : placeholder}
    </Text>
  );
};

interface SelectContentProps extends MotionProps {
  className?: string;
}

export const SelectContent = (props: SelectContentProps) => {
  const { className, ...rest } = props;
  const { touched } = useContext(SelectContext)!;

  return (
    <AnimatePresence>
      {touched && (
        <motion.div
          animate={{ y: [-20, 0] }}
          exit={{ y: [0, -4], opacity: [1, 0] }}
          className={twMerge(
            'absolute w-full space-y-0.5 overflow-hidden bg-white ring-1 ring-zinc-950/10 max-h-64 overflow-y-scroll p-1 rounded-md mt-2',
            className
          )}
          {...rest}
        />
      )}
    </AnimatePresence>
  );
};

interface SelectItemProps {
  value: string | number;
  className?: string | ((isActive: boolean) => string);
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const SelectItem = (props: SelectItemProps) => {
  const { className, children, value, ...rest } = props;
  const { handleSelect, isActive } = useContext(SelectContext)!;

  return (
    <div
      className={twMerge(
        'cursor-pointer',
        typeof className === 'function' ? className(isActive(value)) : className
      )}
      onClick={() => handleSelect(value)}
      {...rest}
    >
      {typeof children === 'function' ? children(isActive(value)) : children}
    </div>
  );
};
