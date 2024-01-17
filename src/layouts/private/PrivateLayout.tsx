import React, { useEffect } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../contexts/user.types';
import { Time } from '../../utils/date';
import { SessionStorage } from '../../utils/storage';

interface PrivateLayoutProps {
  children: (user: User) => React.ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const navigate = useNavigate();
  const { user } = useUserContext()!;
  const session = SessionStorage.get('session');

  useEffect(() => {
    const isSessionExpired = !session || session.exp < Time.milliSeconds();

    if (isSessionExpired) {
      localStorage.removeItem('user');
      sessionStorage.removeItem('session');

      return navigate('/session/');
    }
  }, [session, navigate]);

  return <>{user && session ? children(user) : null}</>;
};
