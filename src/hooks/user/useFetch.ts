import { useState } from 'react';
import { Callback, Status } from '../types';
import { User } from '../../contexts/user.types';

export const useFetch = () => {
  const [status, setStatus] = useState<Status<User>>({
    state: null,
    error: null,
    payload: null,
    isLoading: null,
  });

  const fetchData = async (id: string, callback?: Callback) => {
    try {
      setStatus({
        state: null,
        error: null,
        payload: null,
        isLoading: true,
      });

      const response = await fetch('http://localhost/5000/api/vi/user/' + id, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });

      const json = await response.json();

      if (!response.ok) {
        return setStatus({
          state: 'error',
          error: {
            message: json.message,
            code: json.code,
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

      return callback && callback();
    } catch (error: any) {
      return console.error(error);
    }
  };

  return { status, fetchData };
};
