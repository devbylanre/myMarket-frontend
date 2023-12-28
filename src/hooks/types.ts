interface Success<T> {
  code: number;
  message: string;
  data: T | null;
}

export interface Error {
  code: number;
  message: string | any[];
}

interface IState<S = 'success' | 'error' | null> {
  state: S;
}

export type Status<T> = (
  | ({ payload: Success<T> } & IState<'success'>)
  | ({ error: Error } & IState<'error'>)
  | ({ error: Error | null } & { payload: Success<T> | null } & IState<null>)
) & {
  isLoading: boolean | null;
};

export type Callback = (data?: any) => void;
