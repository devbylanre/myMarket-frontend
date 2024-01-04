import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';
import { useProductContext } from '../../../../hooks/useProductContext';

export const useCreateProduct = () => {
  const { dispatch } = useProductContext()!;
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    payload: null,
    error: null,
    isLoading: null,
  });

  const createProduct = async (
    token: string,
    data: any,
    callback?: Callback
  ) => {
    try {
      setStatus({
        state: null,
        error: null,
        payload: null,
        isLoading: true,
      });

      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('tagline', data.tagline);
      formData.append('description', data.description);
      // Convert FileList to an array and then use forEach
      Array.from(data.images).forEach((image: any) => {
        formData.append('images', image.file);
      });
      formData.append('price', data.price);
      formData.append('discount', data.discount);
      formData.append('category', data.category);
      formData.append('brand', data.brand);
      formData.append('model', data.model);

      const response = await fetch(
        'https://mymarket-tan.vercel.app/product/create',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

      dispatch({ type: 'CREATE', payload: json.data });

      setStatus({
        state: 'success',
        payload: {
          code: json.code,
          message: json.message,
          data: json.data,
        },
        isLoading: false,
      });

      return callback && callback();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { status, createProduct };
};
