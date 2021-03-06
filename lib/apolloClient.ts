import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient: any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: {} = {}) {
  const apollo = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apollo.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    apollo.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return apollo;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = apollo;
  return apollo;
}

export function useApollo(initialState: object) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
