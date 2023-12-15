import React, { Dispatch, createContext, useReducer } from 'react';

interface StateProps {
  user: Record<string, any> | null;
}

interface ActionProps {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'UPDATE_USER';
  payload: StateProps;
}

const initialState: StateProps = { user: null };

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { user: { ...action.payload } };
    case 'SIGN_OUT':
      return { user: null };
    case 'UPDATE_USER':
      return { user: { ...state.user, ...action.payload } };
  }
};

interface UserContextProps {
  state: StateProps;
  dispatch: Dispatch<ActionProps>;
}

export const UserContext = createContext<UserContextProps | StateProps>({
  user: null,
});

interface UserContextProvider {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState as never); // remove never

  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
