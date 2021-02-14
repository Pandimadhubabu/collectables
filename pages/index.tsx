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
  const itemsWithPhoto = items.filter(
    (item) => !item.photo.includes('not-found.jpeg'),
  );
  const randomHeroImage =
    itemsWithPhoto[Math.floor(Math.random() * itemsWithPhoto.length)];
  const randomCollectable =
    itemsWithPhoto[Math.floor(Math.random() * itemsWithPhoto.length)];
  const computersTotal = items.filter(
    (collectable) => collectable.category.name === 'computer',
  ).length;
  const iDevicesTotal = items.filter(
    (collectable) => collectable.category.name === 'idevice',
  ).length;

  return (
    <Layout title="Collectables">
      <Hero photo={randomHeroImage.photo} />

      <Counter computersTotal={computersTotal} iDevicesTotal={iDevicesTotal} />

      <Random collectable={randomCollectable} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: Collectable[] = collectables;
  return { props: { items } };
};

export default WithStaticProps;
