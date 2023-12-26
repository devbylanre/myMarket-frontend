interface Success<T> {
  payload: {
    code: number;
    message: string;
    data: T | null;
  } | null;
}

export interface Error {
  error: {
    code: number;
    message: string | any[];
  } | null;
}

interface IState<S = 'success' | 'error' | null> {
  state: S;
}

export type Status<T> = (
  | (Success<T> & IState<'success'>)
  | (Error & IState<'error'>)
  | (Error & Success<T> & IState<null>)
) & {
  isLoading: boolean | null;
};

export type Callback = (data?: any) => void;
