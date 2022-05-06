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

export const getEntries = async () => {
  const response = await client
    .from('entries')
    .select('*')
    .order('created_at', { ascending: false });

  return response.data;
};

export const insertEntry = async (email, content) => {
  const response = await client
    .from('entries')
    .insert({ guest_id: email, content });
  return response.data;
};
