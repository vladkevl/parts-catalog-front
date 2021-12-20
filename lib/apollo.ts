import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.parts.itspec.by/graphql',
    cache: new InMemoryCache(),
});

export default client;
