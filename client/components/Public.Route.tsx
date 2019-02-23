import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as query from '../graphql/queries';
import { CurrentUser } from '../graphql/types';
import { Query } from 'react-apollo';

interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => (
  <Route
    {...rest}
    render={props => {
      <Query<CurrentUser.Data> query={query.currentUser}>
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
      </Query>;
      return <Component {...props} />;
    }}
  />
);

export default PublicRoute;
