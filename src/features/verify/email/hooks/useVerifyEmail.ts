import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';

export const useVerifyEmail = () => {
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    isLoading: false,
    error: null,
    payload: null,
  });

  const verify = async (data: Record<string, string>, callback?: Callback) => {
    try {
      setStatus({ state: null, isLoading: true, error: null, payload: null });

      const response = await fetch(
        `http://localhost:5000/api/v1/user/email/verify`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

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
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { status, verify };
};
