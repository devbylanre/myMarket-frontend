import { useState } from 'react';
import { Status, Callback } from '../../../../hooks/types';
import { useUserContext } from '../../../../hooks/useUserContext';
import { User } from '../../../../contexts/user.types';

const initialState: Status<User> = {
  state: null,
  isLoading: null,
  error: null,
  payload: null,
};

export const useAuth = () => {
  const { dispatch } = useUserContext()!;
  const [status, setStatus] = useState<Status<User>>(initialState);

  const signIn = async <T extends {}>(payload: T, callback?: Callback) => {
    try {
      setStatus({ ...initialState, isLoading: true });

      const response = await fetch(
        'https://mymarket-tan.vercel.app/user/auth',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const json = await response.json();

      // check if response is not OK
      if (!response.ok) {
        return setStatus({
          state: 'error',
          isLoading: false,
          error: {
            code: json.code,
            message: json.message,
          },
        });
      }

      // dispatch a new state
      dispatch({ type: 'SIGN_IN', payload: json.data });

      setStatus({
        state: 'success',
        isLoading: false,
        payload: {
          code: json.code,
          message: json.message,
          data: json.data,
        },
      });

      return callback && callback(json);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { status, signIn };
};
