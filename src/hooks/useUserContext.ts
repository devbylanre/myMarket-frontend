import { useContext } from 'react';
import { UserContext } from '../contexts/user';

export const useUserContext = () => {
  const context = useContext(UserContext);

  return context;
};
