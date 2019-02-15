import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import AuthForm from "./Auth/AuthForm";
import ProtectedRoute from "./Protected.Route";
import Dashboard from "./Dashboard";
import PublicRoute from "./Public.Route";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path="/login" component={AuthForm} />
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
};

export default App;
