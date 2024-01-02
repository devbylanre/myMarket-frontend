import { Formik, Form, FormikProps } from 'formik';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Status } from '../../../../hooks/types';

import { LuPenLine } from 'react-icons/lu';
import { Button } from '../../../../components/ui/Button';
import { Spinner } from '../../../../components/ui/Spinner';
import { FormError } from '../../../../features/shared/FormError';
import { Toast, ToastContent } from '../../../../components/ui/Toast';

type IAction = 'view' | 'edit';

interface ISettingsForm {
  initialValues: Record<string, any>;
  validationSchema: any;
  children:
    | React.ReactNode
    | ((
        action: IAction,
        formik: FormikProps<Record<string, any>>
      ) => React.ReactNode);
  status: Status<any>;
  onSubmit: (values: any) => void;
}

interface ISettingsFormContext {
  status: Status<any>;
  action: IAction;
  setAction: Dispatch<SetStateAction<IAction>>;
}

const SettingsFormContext = createContext<ISettingsFormContext | null>(null);

export const SettingsForm = (props: ISettingsForm) => {
  const { initialValues, validationSchema, onSubmit, children, status } = props;
  const [action, setAction] = useState<IAction>('view');

  const handleSubmit = (values: any) => {
    onSubmit(values);
    status.state === 'success' && setAction('view');
  };

  return (
    <SettingsFormContext.Provider value={{ action, setAction, status }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className='space-y-2'>
            {typeof children === 'function'
              ? children(action, formik)
              : children}
          </Form>
        )}
      </Formik>
    </SettingsFormContext.Provider>
  );
};

export const SettingsFormButtons = () => {
  const { status, action, setAction } = useContext(SettingsFormContext)!;

  return (
    <>
      {action === 'view' ? (
        <Button
          size='xs'
          className='px-0 text-primary-800 hover:text-primary-500'
          type='button'
          variant='ghost'
          onClick={() => setAction('edit')}
        >
          Edit <LuPenLine />
        </Button>
      ) : (
        <div className='flex gap-x-3'>
          <Button
            size='xs'
            type='button'
            variant='outline'
            onClick={() => setAction('view')}
          >
            Close
          </Button>
          <Button
            size='xs'
            type='submit'
            disabled={status.isLoading!}
          >
            {status.isLoading ? <Spinner variant='light' /> : 'Update'}
          </Button>
        </div>
      )}
    </>
  );
};

export const SettingsFormMessage = () => {
  const { status } = useContext(SettingsFormContext)!;

  return (
    <>
      {status.state === 'error' ? (
        <div className='w-full sm:w-96'>
          <FormError error={status.state === 'error' ? status.error : null} />
        </div>
      ) : null}
      {status.state === 'success' ? (
        <Toast
          variant='success'
          position='bottom-center'
        >
          <ToastContent className='text-sm'>
            {status.payload.message}
          </ToastContent>
        </Toast>
      ) : null}
    </>
  );
};
