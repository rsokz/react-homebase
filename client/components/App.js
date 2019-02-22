import React from 'react';
import { Switch } from 'react-router-dom';
// components
import AuthForm from './Auth/AuthForm';
import ProtectedRoute from './Protected.Route';
import Dashboard from './Dashboard';
import PublicRoute from './Public.Route';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <PublicRoute path="/login" component={AuthForm} />
        {/* <Route path="*" component={() => '404 NOT FOUND'} /> */}
      </Switch>
    </div>
  );
};

export default App;
