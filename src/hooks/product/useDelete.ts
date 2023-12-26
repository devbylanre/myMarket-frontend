import { useState } from 'react';
import { Callback, Status } from '../types';
import { useProductContext } from '../useProductContext';
import { Product } from '../../contexts/product.types';

export const useDelete = () => {
  const { dispatch } = useProductContext()!;
  const [status, setStatus] = useState<Status<null>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const deleteProduct = async (
    token: string,
    id: string,
    callback?: Callback
  ) => {
    setStatus({
      state: null,
      error: null,
      payload: null,
      isLoading: true,
    });

    const response = await fetch(
      `http://localhost:5000/api/v1/product/delete/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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

    dispatch({ type: 'DELETE', payload: { _id: id } as Product });

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
  };

  return { status, deleteProduct };
};
