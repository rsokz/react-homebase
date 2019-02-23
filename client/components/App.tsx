import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import AuthScreen from './AuthScreen';
import ProtectedRoute from './Protected.Route';
import Dashboard from './DashboardScreen/Dashboard';
import PublicRoute from './Public.Route';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <PublicRoute path="/login" component={AuthScreen} />
        <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
    </div>
  );
};

export default App;
