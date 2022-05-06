import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
