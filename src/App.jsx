import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ProvideAuth } from './context/ProvideAuth';
import Login from './views/Login';

export default function App() {
  return (
    <div>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}
