import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';
import { useUserContext } from '../../../../hooks/useUserContext';
import { User } from '../../../../contexts/user.types';

export const useUploadPhoto = () => {
  const { dispatch } = useUserContext()!;

  const [status, setStatus] = useState<Status<null>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const uploadPhoto = async (id: string, data: any, callback?: Callback) => {
    try {
      setStatus({
        state: null,
        error: null,
        payload: null,
        isLoading: true,
      });

      const formData = new FormData();
      formData.append('photo', data);

      const response = await fetch(
        `http://localhost:5000/api/v1/user/upload/photo/${id}`,
        {
          method: 'PUT',
          body: formData,
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

      dispatch({ type: 'UPDATE', payload: { photo: json.data } as User });

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
      console.error(error);
    }
  };

  return { status, uploadPhoto };
};
