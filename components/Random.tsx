import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

export const ALL_QUERY = gql`
  query all {
    collectables {
      id
      name
    }
  }
`;

export default function Random() {
  const { loading, error, data } = useQuery(ALL_QUERY);

  if (error) return <span>Error</span>;
  if (loading) return <span>Loading</span>;

  const { collectables } = data;
  const randomCollectable =
    collectables[Math.floor(Math.random() * collectables.length)];

  return (
    <section className="bg-gray-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              alt="Random collectable"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
              src="https://collection.leonardofaria.net/images/macintosh-plus.jpg"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              fill="currentColor"
              viewBox="0 0 20 104"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full">
                Random collectable
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {randomCollectable.name}
            </h5>
            <p className="mb-5 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              corrupti voluptatem et, sunt, adipisci libero commodi ratione
              iusto rerum dicta quisquam maxime ducimus! Blanditiis tenetur ea
              rem expedita culpa doloremque.
            </p>
            <div className="flex items-center">
              <Link href="/about">
                <span className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0 px-3 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
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
        </div>
      </div>
    </section>
  );
}
