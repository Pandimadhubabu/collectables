import React from 'react';
import Link from 'next/link';

import { Collectable } from '../../interfaces';

type Props = {
  collectable: Collectable;
};

const ListItem = ({ collectable }: Props) => (
  <div className="">
    <div className="flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
      <div className="lg:w-1/2">
        <img
          alt={collectable.name}
          className="object-cover w-full h-80 lg:h-full"
          src={collectable.photo}
        />
      </div>
      <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        <div>
          <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full">
            <Link
              as={`/collectables/${collectable.id}`}
              href="/collectables/[id]"
            >
              Random collectable
            </Link>
          </p>
        </div>
        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
          {collectable.name}
        </h5>
        <p className="mb-5 text-gray-800">{collectable.notes}</p>
      </div>
    </div>
  </div>
);

export default ListItem;
