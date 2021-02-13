import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { ALL_COLLECTABLES_QUERY } from '../queries';

export default function Collectables() {
  const { loading, error, data } = useQuery(ALL_COLLECTABLES_QUERY);

  if (error) return <span>Error</span>;
  if (loading) return <span>Loading</span>;

  const { collectables } = data;

  return (
    <span>
      {collectables.map((collectable) => (
        <div>{collectable.name}</div>
      ))}
    </span>
  );
}
