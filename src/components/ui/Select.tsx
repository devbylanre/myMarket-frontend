import React, { HTMLAttributes } from 'react';
import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { LuChevronDown } from 'react-icons/lu';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { Text } from './Text';

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Select = (props: SelectProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge('relative w-full', className)}
      {...rest}
    />
  );
};

interface SelectTriggerProps extends SelectProps {
  name: string;
}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { className, children, name, ...rest } = props;
  const [, meta, helper] = useField(name);

  return (
    <>
      <div
        className={twMerge(
          'h-auto ring-1 ring-zinc-950/10 w-full inline-flex gap-x-4 justify-between items-center cursor-pointer bg-white rounded-md transition-all duration-200 ease-in-out',
          meta.touched && 'border-zinc-800',
          className
        )}
        {...rest}
        onClick={() => helper.setTouched(!meta.touched)}
      >
        {children}
        <motion.span
          animate={meta.touched ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.25 }}
          className='mx-2'
        >
          <LuChevronDown className='w-4 h-4' />
        </motion.span>
      </div>
    </>
  );
};

interface SelectValueProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  className?: string;
  children?: React.ReactNode;
}

export const SelectValue = (props: SelectValueProps) => {
  const { placeholder, className, children, ...rest } = props;

  return (
    <Text
      className={twMerge(
        'min-h-[36px] flex items-center flex-1 text-zinc-500 font-light px-2',
        children && 'text-inherit font-medium text-zinc-800',
        className
      )}
      size='sm'
      {...rest}
    >
      {children || placeholder}
    </Text>
  );
};

interface SelectGroupProps extends MotionProps {
  name: string;
  className?: string;
}

export const SelectGroup = (props: SelectGroupProps) => {
  const { className, name, ...rest } = props;
  const [, meta] = useField(name);

  return (
    <AnimatePresence>
      {meta.touched && (
        <motion.div
          animate={{ y: [-20, 0] }}
          exit={{ y: [0, -4], opacity: [1, 0] }}
          className={twMerge(
            'absolute w-full space-y-0.5 overflow-hidden bg-white ring-1 ring-zinc-950/10 h-64 overflow-y-scroll p-1 rounded-md mt-2',
            className
          )}
          {...rest}
        />
      )}
    </AnimatePresence>
  );
};

interface SelectItemProps extends SelectProps {
  onSelect: React.MouseEventHandler<HTMLDivElement>;
}

export const SelectItem = (props: SelectItemProps) => {
  const { className, children, onSelect, ...rest } = props;

  return (
    <div
      className={className}
      onClick={onSelect}
      {...rest}
    >
      {children}
    </div>
  );
};

type useSelectCallback = [
  setValue: (v: string | number) => void,
  checkValue: (v: string | number) => boolean,
  value: (string | number)[] | string
];

export const useSelect = (
  name: string,
  multiple?: boolean
): useSelectCallback => {
  const [field, , helper] = useField(name);

  const setValue = (value: string | number) => {
    if (multiple) {
      const existInArray = field.value.includes(value);

      if (existInArray) {
        const filteredArray = field.value.filter(
          (v: string | number) => value !== v
        );

        helper.setValue(filteredArray);
        return;
      }

      const newValue = [...field.value, value];
      helper.setValue(newValue);
      return;
    }

    helper.setValue(value);
  };

  const checkValue = (value: string | number) => {
    if (multiple) {
      const array: any[] = field.value;

      const valueExistInArray = array.includes(value);

      return valueExistInArray;
    }

    return value === field.value;
  };

  return [setValue, checkValue, field.value];
};
