import React, { createContext, useEffect, useReducer } from 'react';
import { Action, State, User, Context } from './user.types';

const initialState: State = { user: null };

const reducer = <T extends User | null>(state: State, action: Action<T>) => {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
      if (action.payload && action.payload.token) {
        sessionStorage.setItem(
          'session',
          JSON.stringify({ ...action.payload.token })
        );
      }
      return {
        user: { ...action.payload },
      };
    case 'SIGN_OUT':
      localStorage.removeItem('user');
      sessionStorage.removeItem('session');
      return { user: null };
    case 'UPDATE':
      localStorage.setItem(
        'user',
        JSON.stringify({ ...state.user, ...action.payload })
      );
      return { user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

export const UserContext = createContext<Context<Action<User>> | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);

    if (user) {
      dispatch({ type: 'SIGN_IN', payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
