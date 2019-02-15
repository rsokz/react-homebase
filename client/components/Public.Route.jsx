import React from "react";
import { Route, Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";

const PublicRoute = ({
  component: Component,
  data: { currentUser, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (loading) return null;
      if (currentUser) {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location
              }
            }}
          />
        );
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

export default graphql(currentUserQuery)(PublicRoute);
