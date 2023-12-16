import { useState } from 'react';

export const useSignUp = () => {
  const [resource, setResource] = useState<{
    state: 'success' | 'error' | null;
    isLoading: boolean | null;
    json: Record<string, any> | null;
    error: any;
  }>({
    state: null,
    isLoading: null,
    json: null,
    error: null,
  });

  const signUp = async (data: any) => {
    setResource((prevResource) => ({ ...prevResource, isLoading: true }));

    const response = await fetch('/api/v1/user/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (response.ok) {
      setResource((prevResource) => ({
        ...prevResource,
        state: json.state,
        isLoading: false,
        json: json.data,
      }));
    } else {
      setResource((prevResource) => ({
        ...prevResource,
        state: json.state,
        isLoading: false,
        error: json.error,
      }));
    }
  };

  return [resource, signUp];
};
