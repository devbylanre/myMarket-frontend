import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

export const useUserContext = () => {
  const context = useContext(UserContext);
  console.log(context);
  return context;
};
