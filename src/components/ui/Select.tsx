import React, {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { LuChevronDown } from 'react-icons/lu';
import { FormContext } from './Form';

interface SelectContextProps {
  multiple: boolean;
  value: string;
  reveal: boolean;
  select: {
    isActive: (option: string) => boolean;
    toggle: () => void;
    set: (option: string) => void;
  };
}

const SelectContext = createContext<SelectContextProps | null>(null);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface SelectProps extends Props {
  multiple?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const { className, multiple = false, ...rest } = props;
  const {
    field: { value },
    meta,
    helper: { setValue, setTouched },
  } = useContext(FormContext)!;

  const [reveal, setReveal] = useState<boolean>(false);

  const select = {
    toggle: () => {
      !meta.touched && setTouched(true);
      setReveal(!reveal);
    },

    set: (option: string) => {
      if (multiple) {
        const array: (typeof value)[] = value;
        const valueExits = array.includes(option);

        if (valueExits) {
          const filter = array.filter((value) => value !== option);
          setValue(filter);
        }

        setValue([...array, option]);
        return;
      }

      setValue(option);
    },

    isActive: (option: string) => {
      if (multiple) {
        const array: (typeof value)[] = value;
        const check = array.includes(option);
        return check;
      }
      return value === option;
    },
  };

  return (
    <SelectContext.Provider
      value={{
        multiple,
        value,
        reveal,
        select,
      }}
    >
      <div
        ref={ref}
        className={twMerge('relative w-full', className)}
        {...rest}
      />
    </SelectContext.Provider>
  );
});

export const SelectTrigger = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;
  const { select, reveal } = useContext(SelectContext)!;

  return (
    <div
      ref={ref}
      className={twMerge(
        'min-h-[36px] w-full inline-flex gap-x-4 justify-between items-center cursor-pointer bg-white rounded-md transition-all duration-200 ease-in-out px-2',
        className
      )}
      {...rest}
      onClick={select.toggle}
    >
      {children}
      <span
        className={twMerge(
          ' transition-transform ease-in-out duration-300',
          reveal ? 'rotate-180' : 'rotate-0'
        )}
      >
        <LuChevronDown className='w-4 h-4' />
      </span>
    </div>
  );
});

interface SelectValueProps extends Omit<Props, 'children'> {
  placeholder: string;
  children?: (value: any) => React.ReactNode | (string | number);
}

export const SelectValue = forwardRef<HTMLDivElement, SelectValueProps>(
  (props, ref) => {
    const { placeholder, className, children, ...rest } = props;
    const { value } = useContext(SelectContext)!;

    return (
      <div
        ref={ref}
        className={twMerge(
          'flex-1 text-zinc-800 font-medium text-sm',
          (!value || value.length <= 0) && 'text-zinc-500 font-normal',
          className
        )}
        {...rest}
      >
        {value && value?.length > 0
          ? typeof children === 'function'
            ? children(value)
            : value
          : placeholder}
      </div>
    );
  }
);

export const SelectContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  const { reveal } = useContext(SelectContext)!;

  return (
    <>
      <div
        ref={ref}
        className={twMerge(
          'absolute w-full space-y-0.5 overflow-hidden z-10 bg-white shadow-sm ring-1 ring-zinc-950/5 max-h-64 overflow-y-scroll p-1 rounded-md mt-2  transition-all ease-in-out duration-500',
          reveal
            ? 'translate-y-0 scale-100 opacity-100 visible'
            : '-translate-y-2 scale-95 opacity-0 invisible',
          className
        )}
        {...rest}
      />
    </>
  );
});

interface SelectItemProps extends Omit<Props, 'children' | 'className'> {
  value: string;
  className?: string | ((isActive: boolean) => string);
  children: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    const { className, children, value, ...rest } = props;
    const {
      select: { isActive, set },
    } = useContext(SelectContext)!;

    return (
      <div
        ref={ref}
        className={twMerge(
          'cursor-pointer',
          typeof className === 'function'
            ? className(isActive(value))
            : className
        )}
        onClick={() => set(value)}
        {...rest}
      >
        {typeof children === 'function' ? children(isActive(value)) : children}
      </div>
    );
  }
);
