interface ISuccessResponse<T> {
  payload: {
    code: number;
    message: string;
    data: T | null;
  } | null;
}

export interface IErrorResponse {
  error: {
    code: number;
    message: string | any[];
  } | null;
}

interface IState<S = 'success' | 'error' | null> {
  state: S;
}

export type IApiResponse<T> = (
  | (ISuccessResponse<T> & IState<'success'>)
  | (IErrorResponse & IState<'error'>)
  | (IErrorResponse & ISuccessResponse<T> & IState<null>)
) & {
  isLoading: boolean | null;
};

export type IApiCallback = (data?: any) => void;

export interface IUSerStore {
  store: {
    name: string;
    description: string;
    followers: string[];
    location: {
      state: string;
      city: string;
      address: string;
    };
  };
}
export interface IUser extends IUSerStore {
  _id: string;
  isSeller: boolean;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  mobile: { country: string; countryCode: number; number: number };
  billing: {
    country: string;
    state: string;
    city: string;
    address: string;
  };
  otp: {
    code: number;
    expiresAt: number;
  };
  savedProducts: string[];
  accounts: { platform: string; url: string }[];
  token: {
    id: string;
    exp: number;
  };
  verification: {
    token: string;
    verified: true;
  };
  photo: {
    url: string;
    name: string;
  };
}
