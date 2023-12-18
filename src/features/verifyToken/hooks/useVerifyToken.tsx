import { useState } from 'react';
import { ResourceSchema } from '../../../utils/props';

export const useVerifyToken = () => {
  const [resource, setResource] = useState<ResourceSchema<null>>({
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
