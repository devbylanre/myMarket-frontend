import { useState } from 'react';
import { Status, Callback } from '../../../hooks/types';

export const useSignUp = () => {
  const [status, setStatus] = useState<Status<null>>({
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

    const response = await fetch('http://localhost:5000/api/v1/user/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      return setStatus({
        state: 'error',
        isLoading: false,
        error: {
          code: json.code,
          message: json.message,
        },
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
