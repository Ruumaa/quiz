import { User } from '../types/authTypes';

const loginKey = 'loggedInUser';
const userKey = 'users';

export const login = (username: string, password: string): boolean => {
  const user: User = { username, password };

  localStorage.setItem(loginKey, JSON.stringify(user));
  return true;
};

export const logout = () => {
  localStorage.removeItem(loginKey);
};

export const getLoggedInUser = (): User | null => {
  const user = localStorage.getItem(loginKey);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(loginKey);
};

export const register = (username: string, password: string) => {
  const users = JSON.parse(localStorage.getItem(userKey) || '[]');
  const newUser = { username, password };
  users.push(newUser);
  localStorage.setItem(userKey, JSON.stringify(users));
  return { message: 'Successfully registered!' };
};

export const getUsers = (): User[] | null => {
  const users = JSON.parse(localStorage.getItem(userKey) || '[]');
  return users;
};

export const validateUser = (username: string, password: string): boolean => {
  const users = getUsers();
  const user = users?.find(
    (user: User) => user.username === username && user.password === password
  );
  return !!user;
};

export const validateUsername = (username: string): boolean => {
  const users = getUsers();
  const user = users?.find((user: User) => user.username === username);
  return !!user;
};
