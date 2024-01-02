import { useState } from 'react';
import { Status, Callback } from '../types';
import { useUserContext } from '../useUserContext';

export const useUpdate = () => {
  const { user, dispatch } = useUserContext()!;
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    payload: null,
    error: null,
    isLoading: null,
  });

  const update = async <T extends {}>(data: T, callback?: Callback) => {
    try {
      setStatus({
        state: null,
        payload: null,
        error: null,
        isLoading: true,
      });

      const response = await fetch(
        `http://localhost:5000/api/v1/user/${user?._id}`,
        {
          method: 'PUT',
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
          error: {
            code: json.code,
            message: json.message,
          },
          isLoading: false,
        });
      }

      dispatch({ type: 'UPDATE', payload: json.data });

      setStatus({
        state: 'success',
        payload: {
          code: json.code,
          message: json.message,
          data: json.data,
        },
        isLoading: false,
      });

      return callback && callback(json);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { status, update };
};
