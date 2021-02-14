import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Counter, Random } from '../components/Collectables';

import { Collectable } from '../interfaces';
import { collectables } from '../utils/sample-data';

type Props = {
  items: Collectable[];
};

const WithStaticProps = ({ items }: Props) => {
  const randomHeroImage = items[Math.floor(Math.random() * items.length)];
  const randomCollectable = items[Math.floor(Math.random() * items.length)];

  return (
    <Layout title="Collectables">
      <Hero photo={randomHeroImage.photo} />

      <Counter computersTotal={20} iDevicesTotal={20} />

      <Random collectable={randomCollectable} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: Collectable[] = collectables;
  return { props: { items } };
};

export default WithStaticProps;
