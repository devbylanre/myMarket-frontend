import { useState } from 'react';
import { Callback, Status } from '../../../../hooks/types';
import { Product } from '../../../../contexts/product.types';
import { useProductContext } from '../../../../hooks/useProductContext';

export const useUpdateProduct = () => {
  const { dispatch } = useProductContext()!;
  const [status, setStatus] = useState<Status<Product>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const updateProduct = async (
    token: string,
    productId: string,
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

      const response = await fetch(
        `https://mymarket-tan.vercel.app/product/update/${productId}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + token,
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

      dispatch({ type: 'UPDATE', payload: { ...json.data } });

      setStatus({
        state: 'success',
        payload: {
          code: json.code,
          message: json.message,
          data: json.data,
        },
        isLoading: false,
      });

      callback && callback(json.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { updateStatus: status, updateProduct };
};
