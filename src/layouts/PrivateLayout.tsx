import React, { useEffect } from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';

export const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { user } = useUserContext()!;
  const session = JSON.parse(sessionStorage.getItem('session')!);
  const dateTime = new Date().getTime();

  useEffect(() => {
    if (!session || (session && session.exp < Math.floor(dateTime / 1000))) {
      if (!user) {
        return navigate('/auth/');
      }
      sessionStorage.removeItem('session');
      localStorage.removeItem('user');
      return navigate('/session/');
    }
  }, [session, user, dateTime, navigate]);

  return <>{user && session ? children : null}</>;
};
