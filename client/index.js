import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
});

const client = new ApolloClient({
  cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
