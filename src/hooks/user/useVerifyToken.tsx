import React, { useState } from 'react';
import { boolean } from 'yup';

interface ResourceProps {
  state: null | 'success' | 'error';
  isLoading: null | boolean;
  error: any;
  data: null | Record<string, any>;
}

export const useVerifyToken = () => {
  const [resource, setResource] = useState<ResourceProps>({
    state: null,
    isLoading: false,
    error: null,
    data: null,
  });

  const verifyToken = async (
    token: string,
    callback?: (data: Record<string, any>) => void
  ) => {
    setResource({ state: null, isLoading: true, error: null, data: null });

    const response = await fetch(
      `http://localhost:5000/api/v1/user/verify/token/${token}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      return setResource((prevResource) => ({
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
      data: json.data,
    }));

    return callback && callback(json.data);
  };

  return { resource, verifyToken };
};
