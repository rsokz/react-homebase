import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import * as query from '../graphql/queries';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => (
  <Route
    {...rest}
    render={props => {
      <Query query={query.currentUser}>
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

export default ProtectedRoute;
