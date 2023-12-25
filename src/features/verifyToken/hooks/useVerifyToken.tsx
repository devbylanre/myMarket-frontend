import { useState } from 'react';
import { IApiCallback, IApiResponse } from '../../../utils/types';

export const useVerifyToken = () => {
  const [resource, setResource] = useState<IApiResponse<null>>({
    state: null,
    isLoading: false,
    error: null,
    payload: null,
  });

  const verifyToken = async (token: string, callback?: IApiCallback) => {
    setResource({ state: null, isLoading: true, error: null, payload: null });

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
        error: {
          code: json.code,
          message: json.message,
        },
      }));
    }

    setResource({
      state: 'success',
      payload: {
        code: json.code,
        message: json.message,
        data: json.data,
      },
      isLoading: false,
    });

    return callback && callback(json.data);
  };

  return { resource, verifyToken };
};
