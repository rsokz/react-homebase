import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { graphql, Query, QueryProps } from 'react-apollo';
import currentUserQuery from '../graphql/queries/CurrentUser';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => (
  <Route
    {...rest}
    render={props => {
      <Query query={currentUserQuery}>
        {({ loading, data: { currentUser } }) => {
          if (loading) return null;
          if (currentUser) {
            return <Component {...props} />;
          }
        }}
      </Query>;
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location
            }
          }}
        />
      );
    }}
  />
);

export default React.memo<ProtectedRouteProps>(ProtectedRoute);
