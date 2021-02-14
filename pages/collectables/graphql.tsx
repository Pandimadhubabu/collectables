import { GetStaticProps } from 'next';
import { initializeApollo } from '../../lib/apolloClient';

import { ALL_COLLECTABLES_QUERY } from '../../queries';
import Layout from '../../components/Layout';
import { ApiCollectables } from '../../components/Collectables';

// TODO: implement this page with GraphQL data from Hasura

const WithStaticProps = ({ items }: any) => {
  console.log(items);

  return (
    <Layout title="Collectables">
      <h1>Collectables</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <ApiCollectables />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_COLLECTABLES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default WithStaticProps;
