import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import PasswordHealth from './components/PasswordHealth/PasswordHealth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Routes } from './constants';
import { UserContextProvider } from './components/UserContext';

import './style/styles.scss';

const App = () => (
  <Router>
    <Switch>
      <PublicRoute
        path={Routes.Login}
        component={Login}
      />
      <PrivateRoute
        path={[Routes.Root, Routes.PasswordHealth]}
        component={() => <UserContextProvider><PasswordHealth /></UserContextProvider>}
      />
    </Switch>
  </Router>
);

export default App;
