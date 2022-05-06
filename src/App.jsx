import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ProvideAuth } from './context/ProvideAuth';
import { GuestBook } from './views/GuestBook';
import { AuthRoute } from './utils/AuthRoute';
import { Login } from './views/Login';

export default function App() {
  return (
    <div>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <AuthRoute exact path="/">
              <GuestBook />
            </AuthRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}
