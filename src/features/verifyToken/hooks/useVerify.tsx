import { useState } from 'react';
import { Status, Callback } from '../../../hooks/types';

export const useVerifyToken = () => {
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    isLoading: false,
    error: null,
    payload: null,
  });

  const verify = async (token: string, callback?: Callback) => {
    setStatus({ state: null, isLoading: true, error: null, payload: null });

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
      return setStatus((prevResource) => ({
        state: json.state,
        isLoading: false,
        error: {
          code: json.code,
          message: json.message,
        },
      }));
    }

    setStatus({
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

  return { status, verify };
};
