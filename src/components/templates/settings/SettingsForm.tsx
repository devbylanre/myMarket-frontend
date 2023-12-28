import { Formik, Form } from 'formik';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Status } from '../../../hooks/types';

import { LuPenLine } from 'react-icons/lu';
import { Button } from '../../ui/Button';
import { Spinner } from '../../ui/Spinner';
import { FormError } from '../FormError';
import { Toast, ToastContent } from '../../ui/Toast';

interface ISettingsForm {
  initialValues: Record<string, any>;
  validationSchema: any;
  onSubmit: (values: any) => void;
  children:
    | React.ReactNode
    | ((action: IAction, formik: Record<string, any>) => React.ReactNode);
  status: Status<any>;
}

type IAction = 'view' | 'edit';

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
    setAction('view');
  };

  return (
    <SettingsFormContext.Provider value={{ action, setAction, status }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
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
          variant='default'
          className='px-0 text-primary'
          type='button'
          onClick={() => setAction('edit')}
        >
          Edit <LuPenLine />
        </Button>
      ) : (
        <div className='flex pt-2 gap-x-3'>
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
      <FormError error={status.state === 'error' ? status.error : null} />
      {status.state === 'success' ? (
        <Toast variant='success'>
          <ToastContent className='text-sm'>
            {status.payload.message}
          </ToastContent>
        </Toast>
      ) : null}
    </>
  );
};
