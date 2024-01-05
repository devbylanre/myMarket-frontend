import { useState } from 'react';
import { Callback, Status } from '../types';
import { Product } from '../../contexts/product.types';

export const useProducts = () => {
  const [status, setStatus] = useState<Status<Product[]>>({
    state: null,
    payload: null,
    error: null,
    isLoading: null,
  });

  const getProducts = async (id: string, callback?: Callback) => {
    try {
      setStatus({
        state: null,
        payload: null,
        error: null,
        isLoading: true,
      });

      const response = await fetch(
        `https://mymarket-tan.vercel.app/user/products/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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

  return { status, getProducts };
};
