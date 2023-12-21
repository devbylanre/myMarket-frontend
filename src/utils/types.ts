interface HookSuccess<T> {
  message?: string | number;
  data: T | null;
}

export interface HookError {
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

export interface UserStoreSchema {
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
export interface UserSchema extends UserStoreSchema {
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
    signature: string;
    exp: number;
  };
  verification: {
    token: string;
    verified: true;
  };
}
