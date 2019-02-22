import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as query from '../graphql/queries';
import { CurrentUserQuery } from '../graphql/types';

interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => (
  <Route
    {...rest}
    render={props => {
      <CurrentUserQuery query={query.currentUser}>
        {({ loading, data: { currentUser } }) => {
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
        }}
      </CurrentUserQuery>;
      return <Component {...props} />;
    }}
  />
);

export default PublicRoute;
