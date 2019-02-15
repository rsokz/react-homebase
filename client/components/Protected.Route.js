import React from "react";
import { Route, Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";

const ProtectedRoute = ({
  component: Component,
  data: { currentUser, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (loading) return null;
      if (currentUser) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        );
      }
    }}
  />
);

export default graphql(currentUserQuery)(ProtectedRoute);
