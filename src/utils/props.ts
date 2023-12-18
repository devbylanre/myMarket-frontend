interface HookSuccess<T> {
  message?: string | number;
  data: T | null;
}

interface HookError {
  error: {
    code: number;
    details: any;
    message: string;
  } | null;
}

interface HookState<S = 'success' | 'error' | null> {
  state: S;
}

export type ResourceSchema<T> = (
  | (HookSuccess<T> & HookState<'success'>)
  | (HookError & HookState<'error'>)
  | (HookSuccess<T> & HookError & HookState<null>)
) & {
  isLoading: boolean | null;
};

export type HookCallback<T> = (data?: T) => void;

export interface UserSchema {
  _id: string;
  isSeller: boolean;
  firstName: string;
  lastName: string;
  bio: string;
  mobile: {
    countryCode: number | null;
    mobile: number;
  };
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
  social: string[];
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
  token: {
    signature: string;
    exp: number;
  };
  verification: {
    token: string;
    verified: true;
  };
}
