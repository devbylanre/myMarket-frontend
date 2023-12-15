import { useField } from 'formik';
import React, { HTMLAttributes, createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface FormContextProps {
  touched: boolean;
  handleTouched: (value: boolean) => void;
  error: any;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}
export const FormItem = ({ name, className, ...rest }: FormItemProps) => {
  const [field, meta, helper] = useField(name);

  const handleTouched = (value: boolean) => helper.setTouched(value);

  return (
    <FormContext.Provider
      value={{ touched: meta.touched, handleTouched, error: meta.error }}
    >
      <div
        className={twMerge('space-y-1.5', className)}
        {...rest}
      />
    </FormContext.Provider>
  );
};

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {}

export const FormControl = ({ className, ...rest }: FormControlProps) => {
  const { touched, error } = useContext(FormContext)!;
  return (
    <div
      className={twMerge(
        'rounded-md ring-1 ring-zinc-950/10 h-fit shadow-sm flex transition-all duration-200 ease-in-out overflow-clip bg-white',
        touched && !error && 'ring-zinc-800',
        touched && error && 'ring-red-500',
        className
      )}
      {...rest}
    />
  );
};

interface FormMessageProps extends HTMLAttributes<HTMLDivElement> {}

export const FormMessage = ({
  className,
  children,
  ...rest
}: FormMessageProps) => {
  const { error, touched } = useContext(FormContext)!;

  return (
    <Text
      as='p'
      size='sm'
      className={twMerge(
        'text-zinc-500',
        error && touched && 'text-red-600',
        className
      )}
    >
      {error && touched ? error : children}
    </Text>
  );
};
