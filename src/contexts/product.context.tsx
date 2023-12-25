import React, { Dispatch, createContext, useReducer } from 'react';

const defaultState = { products: null };

interface Action<T> {
  type: 'CREATE' | 'UPDATE' | 'DELETE' | 'SET';
  payload: T;
}

interface State {
  products: Record<string, any> | null;
}

const reducer = <T extends Record<string, any> | null>(
  state: State,
  action: Action<T>
) => {
  switch (action.type) {
    case 'CREATE':
      return {
        products: { ...state.products, ...action.payload },
      };
    case 'UPDATE':
      return {
        products: { ...state.products, [action.payload?._id]: action.payload },
      };
    case 'DELETE':
      const { [action.payload?._id]: deletedItem, ...rest } =
        state.products || {};

      return {
        products: { ...rest },
      };
    case 'SET':
      return {
        products: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

interface Context<T> {
  products: Record<string, any> | null;
  dispatch: Dispatch<T>;
}

export const ProductContext = createContext<Context<Action<null>> | null>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ProductContext.Provider value={{ products: state.products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
