import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import Button from '../Button';

import { Collectable } from '../../interfaces';

type Props = {
  collectable: Collectable;
};

const Random = ({ collectable }: Props) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white dark:bg-gray-900 border dark:border-gray-600 rounded-xl shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <Image
              alt={collectable.name}
              className="object-cover w-full lg:absolute h-80 lg:h-full"
              height="480"
              layout="responsive"
              src={collectable.photo}
              width="640"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              fill="currentColor"
              viewBox="0 0 20 104"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white dark:bg-gray-900 lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full">
                Random collectable
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {collectable.name}
            </h5>
            <p className="mb-5 text-gray-800 dark:text-gray-500">
              {collectable.notes}
            </p>
            <div className="flex items-center">
              <Button
                href={`/collectables/${collectable.id}`}
                Icon={MdArrowForward}
                size="large"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Random;
