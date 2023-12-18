import { useState } from 'react';
import { ResourceSchema, UserSchema } from '../../../utils/props';
import { useUserContext } from '../../../hooks/useUserContext';

export const useSignIn = () => {
  const { dispatch } = useUserContext()!;
  const [resource, setResource] = useState<ResourceSchema<UserSchema>>({
    state: null,
    isLoading: null,
    error: null,
    data: null,
  });

  const signIn = async <T extends { email: string }>(
    data: T,
    callback?: (data: Record<string, any>) => void
  ) => {
    setResource({
      state: null,
      isLoading: true,
      error: null,
      data: null,
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
        error: json.error,
      });
    }

    dispatch({ type: 'SIGN_IN', payload: json.data });

    setResource({
      state: 'success',
      isLoading: false,
      data: json.data,
    });

    return callback && callback(json);
  };

  return { resource, signIn };
};
