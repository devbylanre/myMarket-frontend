import { useField } from 'formik';
import React, { HTMLAttributes, createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface FormContextProps {
  name: string;
  touched: boolean;
  handleTouched: (value: boolean) => void;
  error: any;
  value: any;
  helper: Record<string, any>;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}
export const FormField = ({ name, className, ...rest }: FormFieldProps) => {
  const [field, meta, helper] = useField(name);

  const handleTouched = (value: boolean) => helper.setTouched(value);

  return (
    <FormContext.Provider
      value={{
        name,
        touched: meta.touched,
        handleTouched,
        error: meta.error,
        value: field.value,
        helper: helper,
      }}
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
        'rounded-lg ring-1 ring-zinc-950/10 h-fit shadow-sm flex transition-all duration-200 ease-in-out overflow-clip bg-white',
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
    <>
      {(error && touched) || children ? (
        <Text
          as='p'
          size='sm'
          className={twMerge(
            'text-zinc-500',
            error && touched && 'text-red-600',
            className
          )}
        >
          {error || children}
        </Text>
      ) : null}
    </>
  );
};

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {}

export const FormLabel = ({ className, ...rest }: FormLabelProps) => {
  const { name } = useContext(FormContext)!;

  return (
    <Text
      as='label'
      size='sm'
      htmlFor={name}
      className={twMerge('text-zinc-600', className)}
      {...rest}
    />
  );
};
