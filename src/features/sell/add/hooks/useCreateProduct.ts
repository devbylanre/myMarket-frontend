import { useState } from 'react';
import { IApiCallback, IApiResponse } from '../../../../utils/types';

export const useCreateProduct = () => {
  const [response, setResponse] = useState<IApiResponse<null>>({
    state: null,
    payload: null,
    error: null,
    isLoading: null,
  });

  const createProduct = async (
    token: string,
    data: any,
    callback?: IApiCallback
  ) => {
    setResponse({
      state: null,
      error: null,
      payload: null,
      isLoading: true,
    });

    const formData = new FormData();

    Object.keys(data).map((key: string) => {
      return formData.append(key, data[key]);
    });

    const api = await fetch('http://localhost:5000/api/v1/product/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

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

    setResponse({
      state: 'success',
      payload: {
        code: json.code,
        message: json.message,
        data: json.data,
      },
      isLoading: false,
    });

    return callback && callback();
  };

  return { response, createProduct };
};
