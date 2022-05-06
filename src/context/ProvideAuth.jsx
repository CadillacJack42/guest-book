import React from 'react';
import { signup, signin, logout } from '../utils/fetch-utils';
import { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await signup(email, password);
    } catch (error) {
      console.error(error);
    }
    const currentUser = await signin(email, password);
    setUser(currentUser);
  };

  const logOut = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <authContext.Provider value={{ user, login, logOut }}>
      {children}
    </authContext.Provider>
  );
}
