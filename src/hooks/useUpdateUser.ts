import { useState } from 'react';
import { IApiCallback, IApiResponse } from '../utils/types';
import { useUserContext } from './useUserContext';

export const useUpdateUser = () => {
  const { user, dispatch } = useUserContext()!;
  const [resource, setResource] = useState<IApiResponse<null>>({
    state: null,
    payload: null,
    error: null,
    isLoading: null,
  });

  const updateUser = async <T extends {}>(data: T, callback?: IApiCallback) => {
    setResource({
      state: null,
      payload: null,
      error: null,
      isLoading: true,
    });

    if (user) {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/update/${user._id}`,
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
        return setResource({
          state: 'error',
          error: {
            code: json.code,
            message: json.message,
          },
          isLoading: false,
        });
      }

      dispatch({ type: 'UPDATE', payload: json.data });

      setResource({
        state: 'success',
        payload: {
          code: json.code,
          message: json.message,
          data: json.data,
        },
        isLoading: false,
      });

      return callback && callback(json);
    }
  };

  return { resource, updateUser };
};
