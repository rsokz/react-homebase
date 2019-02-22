import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
});
const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const client = new ApolloClient();

const GlobalStyle = createGlobalStyle`
	body {
		background-color: rgb(255, 254, 252)
	}
`;

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
