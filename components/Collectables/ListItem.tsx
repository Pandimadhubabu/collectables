import React from 'react';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { MdArrowForward, MdMemory, MdDateRange } from 'react-icons/md';

import { Collectable } from '../../interfaces';

type Props = {
  collectable: Collectable;
};

const ListItem = ({ collectable }: Props) => (
  <div className="w-full flex flex-col overflow-hidden bg-white border rounded shadow-sm md:flex-row sm:mx-auto mb-10">
    <div className="md:w-1/4">
      <img
        alt={collectable.name}
        className="object-cover w-full h-80 md:h-full"
        src={collectable.photo}
      />
    </div>
    <div className="flex flex-col justify-center md:w-3/4 px-3 pt-3">
      <h3 className="mb-2 text-2xl font-extrabold leading-none sm:text-2xl">
        <Link as={`/collectables/${collectable.id}`} href="/collectables/[id]">
          {collectable.name}
        </Link>
      </h3>
      <header className="mb-3 flex text-gray-700 text-sm">
        <span className="inline-flex items-center justify-center">
          <MdMemory className="w-4 h-4 mr-1" /> {collectable.hardware}
        </span>
        <span className="inline-flex items-center justify-center ml-4">
          <MdDateRange className="w-4 h-4 mr-1" /> {collectable.boughtAt}
        </span>
      </header>
      <p className="mb-5 text-gray-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui
        temporibus culpa quos voluptatem rem, tenetur inventore magnam amet
        accusantium animi cum, eos natus, ullam deserunt praesentium quisquam
        sunt soluta.
      </p>
      <footer className="bg-gray-200 grid grid-cols-2 -mx-3">
        <a
          className="inline-flex items-center justify-center p-2"
          href={collectable.reference}
        >
          History
          <BsBoxArrowUpRight className="w-4 h-4 ml-2" />
        </a>
        <Link as={`/collectables/${collectable.id}`} href="/collectables/[id]">
          <span className="inline-flex items-center justify-center p-2 cursor-pointer">
            Read more
            <MdArrowForward className="w-4 h-4 ml-2" />
          </span>
        </Link>
      </footer>
    </div>
  </div>
);

export default ListItem;
