import { useQuery } from '@apollo/client';
import { ALL_COLLECTABLES_QUERY } from '../../queries';

/* Component using Hasura instead of local JSON */
export default function Collectables() {
  const { loading, error, data } = useQuery(ALL_COLLECTABLES_QUERY);

  if (error) return <span>Error</span>;
  if (loading) return <span>Loading</span>;

  const { collectables } = data;

  return (
    <span>
      {collectables.map((collectable: any) => (
        <div key="collectable.id">{collectable.name}</div>
      ))}
    </span>
  );
}
