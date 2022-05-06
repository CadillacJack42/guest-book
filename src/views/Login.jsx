import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [error, setError] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { from } = location.state || { from: { pathname: '/' } };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      await auth.login(email, password);
      history.replace(from);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h3>You must be logged in to view {from.pathname}</h3>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" aria-label="Sign In">
          Sign In
        </button>
      </form>
      {error && <h3>{error}</h3>}
    </>
  );
};
