import { GetStaticProps } from 'next';

import { Collectable } from '../../interfaces';
import { collectables } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/collectables/List';

type Props = {
  items: Collectable[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Collectables list">
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Collectable[] = collectables;
  return { props: { items } };
};

export default WithStaticProps;
