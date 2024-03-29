import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://localhost:4000/graphql",
  credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
