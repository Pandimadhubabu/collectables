import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title="About">
    <section className="container px-4 py-24 mx-auto">
      <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
          About
        </h1>
        <p className="px-3 lg:px-24 mb-6 text-lg md:text-xl text-gray-600 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptas recusandae ab itaque expedita quia molestiae, error ut sint
          eos minus similique enim delectus, ducimus quos rerum, rem sunt
          provident.
        </p>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
