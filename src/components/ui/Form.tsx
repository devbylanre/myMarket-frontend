import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
} from 'formik';
import React, { HTMLAttributes, createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormContextProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  helper: FieldHelperProps<any>;
}

export const FormContext = createContext<FormContextProps | null>(null);

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}
export const FormField = ({ name, className, ...rest }: FormFieldProps) => {
  const [field, meta, helper] = useField(name);

  return (
    <FormContext.Provider
      value={{
        field: field,
        meta: meta,
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
  const { meta } = useContext(FormContext) as FormContextProps;
  const { touched, error } = meta;

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

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

export const FormMessage = ({
  className,
  children,
  ...rest
}: FormMessageProps) => {
  const { meta } = useContext(FormContext)!;
  const { error, touched } = meta;

  return (
    <>
      {(error && touched) || children ? (
        <p
          className={twMerge(
            'text-zinc-500 text-[0.84rem]',
            error && touched && 'text-red-600',
            className
          )}
        >
          {error || children}
        </p>
      ) : null}
    </>
  );
};

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {}

export const FormLabel = ({ className, ...rest }: FormLabelProps) => {
  const { field } = useContext(FormContext)!;
  const { name } = field;

  return (
    <label
      htmlFor={name}
      className={twMerge('text-zinc-600 text-[0.84rem]', className)}
      {...rest}
    />
  );
};
