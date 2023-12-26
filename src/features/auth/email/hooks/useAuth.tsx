import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';
import { useUserContext } from '../../../../hooks/useUserContext';
import { User } from '../../../../contexts/user.types';

export const useAuth = () => {
  const { dispatch } = useUserContext()!;
  const [status, setStatus] = useState<Status<User>>({
    state: null,
    isLoading: null,
    error: null,
    payload: null,
  });

  const signIn = async <T extends { email: string }>(
    data: T,
    callback?: Callback
  ) => {
    setStatus({
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
      return setStatus({
        state: 'error',
        isLoading: false,
        error: {
          code: json.code,
          message: json.message,
        },
      });
    }

    dispatch({ type: 'SIGN_IN', payload: json.data });

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

  return { status, signIn };
};
