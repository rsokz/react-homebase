import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as query from '../graphql/queries';
import { CurrentUser } from '../graphql/types';
import { Query } from 'react-apollo';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Query<CurrentUser.Data> query={query.currentUser}>
          {({ loading, data: { currentUser } }) => {
            if (loading) return null;
            if (currentUser) {
              return <Component {...props} />;
            }
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
        </Query>
      );
    }}
  />
);

export default ProtectedRoute;
