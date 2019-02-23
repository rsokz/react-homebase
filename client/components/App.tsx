import * as React from 'react';
import { Switch } from 'react-router-dom';
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
        {/* <Route path="*" component={() => '404 NOT FOUND'} /> */}
      </Switch>
    </div>
  );
};

export default App;
