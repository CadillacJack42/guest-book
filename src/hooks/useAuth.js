import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

export const useAuth = () => {
  const context = useContext(authContext);

  if (context === undefined)
    throw new Error('useAuth must be wrapped ProvideAuth');

  return context;
};
