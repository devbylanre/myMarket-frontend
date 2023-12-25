import { useState } from 'react';
import { IApiCallback, IApiResponse } from '../../../utils/types';

export const useSignUp = () => {
  const [resource, setResource] = useState<IApiResponse<null>>({
    state: null,
    isLoading: false,
    error: null,
    payload: null,
  });

  const signUp = async <T extends { email: string }>(
    data: T,
    callback?: IApiCallback
  ) => {
    setResource({ state: null, isLoading: true, error: null, payload: null });

    const response = await fetch('http://localhost:5000/api/v1/user/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      return setResource({
        state: 'error',
        isLoading: false,
        error: {
          code: json.code,
          message: json.message,
        },
      });
    }

    setResource({
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

  return { resource, signUp };
};
