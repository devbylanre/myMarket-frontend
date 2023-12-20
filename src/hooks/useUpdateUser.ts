import { useState } from 'react';
import { HookCallback, ResourceSchema } from '../utils/types';
import { useUserContext } from './useUserContext';

export const useUpdateUser = () => {
  const { user, dispatch } = useUserContext()!;
  const [resource, setResource] = useState<ResourceSchema<null>>({
    state: null,
    data: null,
    error: null,
    isLoading: null,
  });

  const updateUser = async <T extends {}>(
    data: T,
    callback?: HookCallback<ResourceSchema<T>>
  ) => {
    setResource({
      state: null,
      data: null,
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
          error: json.error,
          isLoading: false,
        });
      }

      dispatch({ type: 'UPDATE', payload: json.data });

      setResource({
        state: 'success',
        data: json.data,
        isLoading: false,
      });

      return callback && callback(json);
    }

    return setResource({
      state: 'error',
      error: {
        code: 404,
        message: 'User ID not found',
        details: 'Null or Undefined user ID',
      },
      isLoading: false,
    });
  };

  return { resource, updateUser };
};
