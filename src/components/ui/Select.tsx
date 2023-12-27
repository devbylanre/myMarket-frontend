import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useState,
} from 'react';
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
  handleSelect: (option: string | number) => void;
  value: any;
  isActive: (value: string | number) => boolean;
  touched: boolean;
  multiple: boolean;
  handleToggle: () => void;
  showOptions: boolean;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const Select = (props: SelectProps) => {
  const { className, multiple = false, ...rest } = props;
  const { touched, helper, value } = useContext(FormContext)!;
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleToggle = () => {
    if (!touched) {
      helper.setTouched(true);
    } else {
      helper.setTouched(false);
    }
    return setShowOptions(!showOptions);
  };

  const handleSelect = (option: string | number) => {
    if (multiple) {
      const array: any[] = value;
      helper.setValue(
        array.includes(option)
          ? array.filter((v) => v !== option)
          : [...array, option]
      );
      return setShowOptions(false);
    }
    helper.setValue(option);
    return setShowOptions(false);
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
      value={{
        handleToggle,
        handleSelect,
        isActive,
        showOptions,
        value,
        touched,
        multiple,
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
  const { handleToggle, showOptions } = useContext(SelectContext)!;

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
        animate={showOptions ? { rotate: 180 } : { rotate: 0 }}
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
  const { showOptions } = useContext(SelectContext)!;

  return (
    <AnimatePresence>
      {showOptions && (
        <motion.div
          animate={{ top: [28, 36] }}
          exit={{ top: [36, 28], opacity: [1, 0] }}
          className={twMerge(
            'absolute w-full space-y-0.5 overflow-hidden z-10 bg-white ring-1 ring-zinc-950/10 max-h-64 overflow-y-scroll p-1 rounded-md mt-2',
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
