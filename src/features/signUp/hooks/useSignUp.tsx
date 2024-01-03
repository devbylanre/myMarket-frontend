import { useState } from 'react';
import { Status, Callback } from '../../../hooks/types';
import { User } from '../../../contexts/user.types';

export const useSignUp = () => {
  const [status, setStatus] = useState<Status<User>>({
    state: null,
    isLoading: false,
    error: null,
    payload: null,
  });

  const signUp = async <T extends { email: string }>(
    data: T,
    callback?: Callback
  ) => {
    setStatus({ state: null, isLoading: true, error: null, payload: null });

    const response = await fetch(
      'https://mymarket-tan.vercel.app/user/create',
      {
        method: 'POST',
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

    setStatus({
      state: 'success',
      isLoading: false,
      payload: {
        code: json.code,
        message: json.message,
        data: json.data,
      },
    });

    return callback && callback(json);
  };

  return { status, signUp };
};
