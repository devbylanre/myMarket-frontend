import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
} from 'formik';
import React, {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormContextProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  helper: FieldHelperProps<any>;
}

export const FormContext = createContext<FormContextProps | null>(null);

interface Props<T> extends HTMLAttributes<T> {}

interface FormFieldProps extends Props<HTMLDivElement> {
  name: string;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (props, ref) => {
    const { name, className, ...rest } = props;
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
          ref={ref}
          className={twMerge('space-y-1.5', className)}
          {...rest}
        />
      </FormContext.Provider>
    );
  }
);

export const FormControl = forwardRef<HTMLDivElement, Props<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    const {
      meta: { touched, error },
    } = useContext(FormContext) as FormContextProps;

    return (
      <div
        ref={ref}
        className={twMerge(
          'rounded-lg ring-1 ring-zinc-950/10 h-fit shadow-sm flex transition-all duration-200 ease-in-out overflow-clip bg-white',
          touched && !error && 'ring-zinc-800',
          touched && error && 'ring-red-500',
          className
        )}
        {...rest}
      />
    );
  }
);

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  Props<HTMLParagraphElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const {
    meta: { error, touched },
  } = useContext(FormContext)!;

  return (
    <>
      {(error && touched) || children ? (
        <p
          ref={ref}
          className={twMerge(
            'text-zinc-500 text-[0.84rem]',
            error && touched && 'text-red-600',
            className
          )}
          {...rest}
        >
          {error || children}
        </p>
      ) : null}
    </>
  );
});

export const FormLabel = forwardRef<HTMLLabelElement, Props<HTMLLabelElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    const {
      field: { name },
    } = useContext(FormContext)!;

    return (
      <label
        ref={ref}
        htmlFor={name}
        className={twMerge('text-zinc-600 text-[0.84rem]', className)}
        {...rest}
      />
    );
  }
);
