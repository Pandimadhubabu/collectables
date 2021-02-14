import React from 'react';
import Link from 'next/link';

import { Collectable } from '../../interfaces';

type Props = {
  collectable: Collectable;
};

const ListItem = ({ collectable }: Props) => (
  <div className="w-full flex flex-col overflow-hidden bg-white border rounded shadow-sm md:flex-row sm:mx-auto mb-6">
    <div className="md:w-1/4">
      <img
        alt={collectable.name}
        className="object-cover w-full h-80 md:h-full"
        src={collectable.photo}
      />
    </div>
    <div className="flex flex-col justify-center p-8 bg-white md:pl-10 md:w-3/4">
      <h3 className="mb-3 text-xl font-extrabold leading-none sm:text-2xl">
        <Link as={`/collectables/${collectable.id}`} href="/collectables/[id]">
          {collectable.name}
        </Link>
      </h3>
      <p className="mb-5 text-gray-800">{collectable.notes}</p>
    </div>
  </div>
);

export default ListItem;
