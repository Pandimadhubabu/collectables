import React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link as={`/users/${data.id}`} href="/users/[id]">
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
