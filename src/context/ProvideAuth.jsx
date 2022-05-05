import React from 'react';
import { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {};
  return <div>ProvideAuth</div>;
}
