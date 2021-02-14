import Link from 'next/link';

type Props = {
  photo?: string;
};

const Hero = ({ photo }: Props) => (
  <section className="container px-4 py-24 mx-auto">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        A collectables website
      </h1>
      <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
        Collectables lists old Macs and iDevices from my collection
      </p>
      <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
        <Link href="/collectables">
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
        alt="A random item of the collection"
        className="w-full rounded-lg shadow-2xl"
        src={photo}
      />
    </div>
  </section>
);

export default Hero;
