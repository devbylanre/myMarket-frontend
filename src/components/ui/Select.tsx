import React, { HTMLAttributes, createContext, useContext } from 'react';
import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { LuChevronDown } from 'react-icons/lu';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { Text } from './Text';

interface SelectContextProps {
  multiple: boolean;
  name: string;
  value: string | number;
  touched: boolean;
  handleToggle: () => void;
  handleSelect: (value: string | number) => void;
  isActive: (value: string | number) => boolean;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  multiple?: boolean;
  className?: string;
}

export const Select = (props: SelectProps) => {
  const { className, name, multiple = false, ...rest } = props;

  const [field, meta, helper] = useField(name);

  const handleToggle = () => helper.setTouched(!meta.touched);

  const handleSelect = (value: string | number) => {
    if (multiple) {
      const array: any[] = field.value;
      helper.setValue(
        array.includes(value)
          ? array.filter((v) => v !== value)
          : [...array, value]
      );
      return;
    }

    helper.setValue(value);
  };

  const isActive = (value: string | number) => {
    if (multiple) {
      const array: any[] = field.value;
      return array.includes(value);
    }

    return field.value === value;
  };

  return (
    <SelectContext.Provider
      value={{
        multiple,
        name,
        value: field.value,
        touched: meta.touched,
        handleToggle,
        handleSelect,
        isActive,
      }}
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
        'h-9 ring-1 ring-zinc-950/10 w-full inline-flex gap-x-4 justify-between items-center cursor-pointer bg-white rounded-md transition-all duration-200 ease-in-out px-2',
        touched && 'ring-zinc-800',
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
  children?: (v: string | number) => React.ReactNode | (string | number);
}

export const SelectValue = (props: SelectValueProps) => {
  const { placeholder, className, children, ...rest } = props;
  const { value } = useContext(SelectContext)!;

  return (
    <Text
      className={twMerge(
        'min-h-[36px] flex items-center flex-1 text-zinc-500 font-light',
        value && 'font-medium text-zinc-800',
        className
      )}
      size='sm'
      {...rest}
    >
      {typeof children === 'function'
        ? children(value)
        : value
        ? value
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
  className?: (isActive: boolean) => string | string;
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const SelectItem = (props: SelectItemProps) => {
  const { className, children, value, ...rest } = props;
  const { handleSelect, isActive } = useContext(SelectContext)!;

  return (
    <div
      className={twMerge(
        typeof className === 'function' ? className(isActive(value)) : className
      )}
      onClick={() => handleSelect(value)}
      {...rest}
    >
      {typeof children === 'function' ? children(isActive(value)) : children}
    </div>
  );
};
