import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";


const httpLink = createHttpLink({
	uri: "https://portfolio-nest.herokuapp.com/graphql"
});

 const client = new ApolloClient({
	link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default client;



