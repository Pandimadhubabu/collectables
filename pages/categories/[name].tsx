import { GetStaticProps, GetStaticPaths } from 'next';

import { Collectable } from '../../interfaces';
import { categories, collectables } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import Collectables from '../../components/Collectables/Collectables';

type Props = {
  items?: Collectable[];
  categoryName: string;
  errors?: string;
};

const StaticPropsDetail = ({ items, categoryName, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title="Collectables list">
      <Collectables categoryName={categoryName} items={items} />
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = categories.map((category) => ({
    params: { name: category.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const name = params?.name;
    const items: Collectable[] = collectables.filter(
      (data) => data.category.name === name,
    );
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { items, categoryName: name } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
