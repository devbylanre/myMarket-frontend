import { useState } from 'react';
import { IApiResponse, IUser } from '../../../../utils/types';
import { useUserContext } from '../../../../hooks/useUserContext';

export const useAuth = () => {
  const { dispatch } = useUserContext()!;
  const [resource, setResource] = useState<IApiResponse<IUser>>({
    state: null,
    isLoading: null,
    error: null,
    payload: null,
  });

  const signIn = async <T extends { email: string }>(
    data: T,
    callback?: (data: Record<string, any>) => void
  ) => {
    setResource({
      state: null,
      isLoading: true,
      error: null,
      payload: null,
    });

    const response = await fetch('http://localhost:5000/api/v1/user/auth', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
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

    dispatch({ type: 'SIGN_IN', payload: json.data });

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

  return { resource, signIn };
};
