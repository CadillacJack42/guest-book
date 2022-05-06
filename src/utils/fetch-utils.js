import { client } from '../services/client';

export const signup = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  return response.user;
};

export const signin = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  return response.user;
};

export const logout = async () => {
  await client.auth.signOut();
};
