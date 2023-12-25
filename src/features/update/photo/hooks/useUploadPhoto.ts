import { useState } from 'react';
import { IApiCallback, IApiResponse, IUser } from '../../../../utils/types';
import { useUserContext } from '../../../../hooks/useUserContext';

export const useUploadPhoto = () => {
  const { dispatch } = useUserContext()!;

  const [response, setResponse] = useState<IApiResponse<null>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const uploadPhoto = async (id: string, data: any, cb?: IApiCallback) => {
    setResponse({
      state: null,
      error: null,
      payload: null,
      isLoading: true,
    });

    const formData = new FormData();
    formData.append('photo', data);

    console.log(formData);

    const api = await fetch(
      `http://localhost:5000/api/v1/user/upload/photo/${id}`,
      {
        method: 'PUT',
        body: formData,
      }
    );

    const json = await api.json();

    if (!api.ok) {
      return setResponse({
        state: 'error',
        error: {
          code: json.code,
          message: json.message,
        },
        isLoading: false,
      });
    }

    dispatch({ type: 'UPDATE', payload: { photo: json.data } as IUser });

    setResponse({
      state: 'success',
      payload: {
        code: json.code,
        message: json.message,
        data: json.data,
      },
      isLoading: false,
    });

    return cb && cb(json.data);
  };

  return { response, uploadPhoto };
};
