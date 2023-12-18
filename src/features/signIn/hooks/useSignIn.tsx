import { useState } from 'react';
import { useUserContext } from '../../../hooks/useUserContext';

interface ResourceProps {
  state: 'success' | 'error' | null;
  isLoading: boolean | null;
  error: any;
  data: Record<string, any> | null;
}

export const useSignIn = () => {
  const { dispatch } = useUserContext()!;
  const [resource, setResource] = useState<ResourceProps>({
    state: null,
    isLoading: null,
    error: null,
    data: null,
  });

  const signIn = async (
    data: Record<string, any>,
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
      return setResource((prevResource) => ({
        ...prevResource,
        state: json.state,
        isLoading: false,
        error: json.error,
      }));
    }

    dispatch({ type: 'SIGN_IN', payload: json.data });

    localStorage.setItem('user', JSON.stringify(json.data));

    sessionStorage.setItem('session', JSON.stringify(json.data.token));

    setResource((prevResource) => ({
      ...prevResource,
      state: json.state,
      isLoading: false,
      data: json.data,
    }));

    return callback && callback(json);
  };

  return { resource, signIn };
};
