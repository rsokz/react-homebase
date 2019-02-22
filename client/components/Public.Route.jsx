import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import * as query from '../graphql/queries/currentUser.query';

const PublicRoute = ({ component: Component, data: { currentUser, loading }, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (loading) return null;
      if (currentUser) {
        return (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location
              }
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default graphql(query.currentUser)(PublicRoute);
