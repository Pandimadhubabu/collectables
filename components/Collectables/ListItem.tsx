import React from 'react';
import Link from 'next/link';

import { Collectable } from '../../interfaces';

type Props = {
  data: Collectable;
};

const ListItem = ({ data }: Props) => (
  <Link as={`/collectables/${data.id}`} href="/collectables/[id]">
    <a href="/collectables/[id]">
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
