import React from 'react';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import { Collectable } from '../../interfaces';

type Props = {
  collectable: Collectable;
};

const ListItem = ({ collectable }: Props) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-5">
    <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-900 border dark:border-gray-600 rounded-xl shadow-sm relative md:h-96">
      <span className="inline-flex items-center justify-center rounded-md absolute right-2 top-2 z-20 text-white text-sm bg-gray-400 bg-opacity-70 py-1 px-3">
        {collectable.boughtAt}
      </span>

      <div className="w-full overflow-hidden transition duration-150 ease-in-out transform md:scale-125 hover:scale-150 md:absolute md:top-0 z-10">
        <Link as={`/collectables/${collectable.id}`} href="/collectables/[id]">
          <img
            alt={collectable.name}
            className="cursor-pointer"
            src={collectable.photo}
          />
        </Link>
      </div>

      <div className="flex flex-grow flex-col justify-center p-5 md:absolute md:bottom-0 z-0">
        <a
          className="inline-flex items-center text-gray-700 dark:text-gray-100"
          href={collectable.reference}
        >
          History
          <BsBoxArrowUpRight className="w-3 h-3 ml-1" />
        </a>
        <h3 className="my-3 text-lg leading-none">
          <Link
            as={`/collectables/${collectable.id}`}
            href="/collectables/[id]"
          >
            {collectable.name}
          </Link>
        </h3>
        <footer className="inline-flex items-center text-sm text-gray-500">
          {collectable.hardware}
        </footer>
      </div>
    </div>
  </div>
);

export default ListItem;
