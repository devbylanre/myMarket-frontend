import React, { Dispatch, createContext, useEffect, useReducer } from 'react';
import { IUser } from '../utils/types';

const initialState = { user: null };

interface IState {
  user: IUser | null;
}

interface IAction<T> {
  type: 'SIGN_IN' | 'UPDATE' | 'SIGN_OUT';
  payload: T;
}

const reducer = <T extends IUser | null>(state: IState, action: IAction<T>) => {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
      sessionStorage.setItem(
        'session',
        JSON.stringify({ ...action.payload!.token })
      );
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

interface UserContextProps<T> {
  user: IUser | null;
  dispatch: Dispatch<T>;
}

export const UserContext = createContext<UserContextProps<
  IAction<IUser>
> | null>(null);

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
