import { GetStaticProps } from 'next';

import { Collectable } from '../../interfaces';
import { collectables } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import Collectables from '../../components/Collectables';

type Props = {
  items: Collectable[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="All collectables">
    <Collectables items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Collectable[] = collectables;
  return { props: { items } };
};

export default WithStaticProps;
