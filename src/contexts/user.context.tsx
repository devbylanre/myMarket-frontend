import React, { Dispatch, createContext, useEffect, useReducer } from 'react';
import { UserSchema } from '../utils/HookProps';

const initialState = { user: null };

interface StateProps {
  user: Record<string, any> | null;
}

interface ActionProps<T> {
  type: 'SIGN_IN' | 'UPDATE' | 'SIGN_OUT';
  payload: T;
}

const reducer = <T extends UserSchema | null>(
  state: StateProps,
  action: ActionProps<T>
) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { user: { ...action.payload } };
    case 'SIGN_OUT':
      return { user: null };
    case 'UPDATE':
      return { user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

interface UserContextProps<T> {
  user: Record<string, any> | null;
  dispatch: Dispatch<T>;
}

export const UserContext = createContext<UserContextProps<
  ActionProps<null>
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
