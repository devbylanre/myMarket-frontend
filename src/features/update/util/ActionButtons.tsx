import React, { Dispatch, SetStateAction } from 'react';
import { LuPenLine } from 'react-icons/lu';

// components
import { Button } from '../../../components/ui/Button';
import { Spinner } from '../../../components/ui/Spinner';

type Action = 'view' | 'edit';

interface ActionButtonsProps {
  action: Action;
  setAction: Dispatch<SetStateAction<Action>>;
  isLoading: boolean | null;
}

export const ActionButtons = ({
  action,
  setAction,
  isLoading,
}: ActionButtonsProps) => {
  return (
    <>
      {action === 'view' ? (
        <Button
          size='xs'
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
            disabled={isLoading!}
          >
            {isLoading ? <Spinner variant='light' /> : 'Update'}
          </Button>
        </div>
      )}
    </>
  );
};
