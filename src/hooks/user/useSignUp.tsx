import { useState } from 'react';

export const useSignUp = () => {
  const [resource, setResource] = useState<{
    state: 'success' | 'error' | null;
    isLoading: boolean;
    json: Record<string, any> | null;
    error: any;
  }>({
    state: null,
    isLoading: false,
    json: null,
    error: null,
  });

  const signUp = async (data: any, callback?: (data: any) => void) => {
    setResource({ state: null, isLoading: true, json: null, error: null });

    const response = await fetch('http://localhost:5000/api/v1/user/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setResource((prevResource) => ({
        ...prevResource,
        state: json.state,
        isLoading: false,
        error: json.error,
      }));
    }

    setResource((prevResource) => ({
      ...prevResource,
      state: json.state,
      isLoading: false,
      json: json.data,
    }));

    return callback && callback(json);
  };

  return { resource, signUp };
};
