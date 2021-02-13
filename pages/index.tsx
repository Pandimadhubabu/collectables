import Link from 'next/link';
import Layout from '../components/Layout';
import Random from '../components/Random';

const IndexPage = () => (
  <Layout title="Collectables">
    <section className="container px-4 py-24 mx-auto">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          A collectables website
        </h1>
        <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
          Collectables lists old Macs and iDevices from my collection
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link href="/about">
            <span className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0 px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto mt-20 text-center md:w-10/12">
        <img
          alt="G4 Cube"
          className="w-full rounded-lg shadow-2xl"
          src="https://collection.leonardofaria.net/images/g4-cube.jpg"
        />
      </div>
    </section>

    <section className="relative px-4 sm:px-0">
      <div className="absolute inset-0 bg-gray-100 h-1/2 top-1/2" />
      <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-2 lg:w-80">
        <div className="inline-block p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </div>
          <p className="font-bold tracking-wide text-gray-800">20 iDevices</p>
        </div>
        <div className="inline-block p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </div>
          <p className="font-bold tracking-wide text-gray-800">10 Macs</p>
        </div>
      </div>
    </section>

    <Random />

    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Collectables</span>
        </span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a
            className="text-gray-600 ml-1"
            href="https://leonardofaria.net"
            target="_blank"
          >
            Leonardo Faria
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500" href="https://twitter.com/leozera">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://linkedin.com">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                stroke="none"
              />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </Layout>
);

export default IndexPage;
