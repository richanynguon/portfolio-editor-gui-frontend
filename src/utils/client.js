import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

const link = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
	uri: "https://portfolio-nest.herokuapp.com/graphql",
	credentials: "include",
	
});

const combinedLink = link.concat(httpLink);

const client = new ApolloClient({
	link: combinedLink,
	cache: new InMemoryCache(),
	connectToDevTools: true
});

export default client;
