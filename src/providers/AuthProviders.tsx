import { useAuthStore } from '@/features/auth/hooks/authStore';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProviders = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth/login');
    }
  }, [isLoggedIn, navigate]);
  return <>{children}</>;
};

export default AuthProviders;
