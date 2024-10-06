import { useEffect } from 'react';
import {
  login,
  logout,
  getLoggedInUser,
  register,
  validateUser,
  validateUsername,
} from '../services/authService';
import { useAuthStore } from '@/features/auth/hooks/authStore';

export const useAuth = () => {
  const { setIsLoggedIn, user, setUser } = useAuthStore();

  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
      setUser(loggedInUser);
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, setUser]);

  const loginUser = (username: string, password: string) => {
    const isValid = validateUser(username, password);
    if (!isValid) {
      return {
        msg: 'Invalid username or password',
        error: true,
      };
    }
    login(username, password);
    setUser({ username, password });
    setIsLoggedIn(true);
    return { msg: 'Successfully logged in!' };
  };

  const logoutUser = () => {
    logout();
    setUser(null);
    setIsLoggedIn(false);
  };

  return { user, loginUser, logoutUser };
};

export const useRegister = () => {
  const registerUser = (username: string, password: string) => {
    const usedUsername = validateUsername(username);
    if (usedUsername) {
      return {
        msg: 'Username is already in use',
        error: true,
      };
    }
    register(username, password);
    return { msg: 'Successfully register!' };
  };

  return { registerUser };
};
