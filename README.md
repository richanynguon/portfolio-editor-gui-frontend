apollo-boost: Package containing everything you need to set up Apollo Client
@apollo/react-hooks: React hooks based view layer integration
graphql: Also parses your GraphQL queries

https://www.apollographql.com/docs/react/get-started/

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

// in configs


import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead

...

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

  // how to make the queries

// use apollo provide like context provider
  import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// request data

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

useQuery 
useMutation Hooks

Apollo uses cache to keep state

subscription - is a query that will trigger on rerender

https://www.freecodecamp.org/news/five-common-problems-in-graphql-apps-and-how-to-fix-them-ac74d37a293c/

https://github.com/scroll-out/scroll-out