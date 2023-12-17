import { useState } from 'react';

export const useSignUp = () => {
  const [resource, setResource] = useState<{
    state: 'success' | 'error' | null;
    isLoading: boolean;
    error: Record<string, any> | null;
    data: Record<string, any> | null;
  }>({
    state: null,
    isLoading: false,
    error: null,
    data: null,
  });

  const signUp = async (
    data: any,
    callback?: (data: Record<string, any>) => void
  ) => {
    setResource({ state: null, isLoading: true, error: null, data: null });

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
        state: json.state,
        isLoading: false,
        error: json.error,
        data: null,
      });
    }

    setResource({
      state: json.state,
      isLoading: false,
      error: null,
      data: json.data,
    });

    return callback && callback(json);
  };

  return { resource, signUp };
};
