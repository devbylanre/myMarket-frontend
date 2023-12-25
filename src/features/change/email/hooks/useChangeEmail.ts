import { useState } from 'react';
import { IApiCallback, IApiResponse } from '../../../../utils/types';
import { useUserContext } from '../../../../hooks/useUserContext';

export const useChangeEmail = () => {
  const [resource, setResource] = useState<IApiResponse<null>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const { dispatch } = useUserContext()!;

  const changeEmail = async <T extends { email: string }>(
    id: string,
    data: T,
    callback?: IApiCallback
  ) => {
    setResource({
      state: null,
      error: null,
      payload: null,
      isLoading: true,
    });

    const response = await fetch(
      `http://localhost:5000/api/v1/user/change/email/${id}`,
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
      return setResource({
        state: 'error',
        error: {
          code: json.code,
          message: json.message,
        },
        isLoading: false,
      });
    }

    dispatch({ type: 'UPDATE', payload: json.data });

    setResource({
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

  return { resource, changeEmail };
};
