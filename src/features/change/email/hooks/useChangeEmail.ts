import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';
import { useUserContext } from '../../../../hooks/useUserContext';

export const useChangeEmail = () => {
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const { dispatch } = useUserContext()!;

  const changeEmail = async <T extends { email: string }>(
    id: string,
    data: T,
    callback?: Callback
  ) => {
    setStatus({
      state: null,
      error: null,
      payload: null,
      isLoading: true,
    });

    const response = await fetch(
      `https://mymarket-tan.vercel.app/user/email/change`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      return setStatus({
        state: 'error',
        error: {
          code: json.code,
          message: json.message,
        },
        isLoading: false,
      });
    }

    dispatch({ type: 'UPDATE', payload: json.data });

    setStatus({
      state: 'success',
      payload: {
        code: json.code,
        message: json.message,
        data: json.data,
      },
      isLoading: false,
    });

    return callback && callback();
  };

  return { status, changeEmail };
};
