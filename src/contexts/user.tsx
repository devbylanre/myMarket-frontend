import React, { createContext, useEffect, useReducer } from 'react';
import { Action, State, User, Context } from './user.types';
import { LocalStorage } from '../utils/storage';

const initialState: State = { user: null };

const SIGN_IN = (payload: User | null) => {
  LocalStorage.set('user', payload);
  sessionStorage.setItem('session', JSON.stringify(payload?.token));

  return { user: payload };
};

const SIGN_OUT = () => {
  LocalStorage.remove('user');
  sessionStorage.removeItem('session');

  return { user: null };
};

const UPDATE = (user: User | null, payload: User | null) => {
  if (!user || !payload) return { user: user };

  const data = { ...user, ...payload };
  LocalStorage.set('user', data);

  return { user: data };
};

const reducer = <T extends User | null>(state: State, action: Action<T>) => {
  switch (action.type) {
    case 'SIGN_IN':
      return SIGN_IN(action.payload);
    case 'SIGN_OUT':
      return SIGN_OUT();
    case 'UPDATE':
      return UPDATE(state.user, action.payload);
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
    const user = LocalStorage.get('user');

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
