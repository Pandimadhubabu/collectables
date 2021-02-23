import { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

/* eslint-disable react/prop-types */
const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider attribute="class">
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
