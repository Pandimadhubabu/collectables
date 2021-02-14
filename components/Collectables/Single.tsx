import { Collectable } from '../../interfaces';

type CollectableProps = {
  item: Collectable;
};

const Single = ({ item: collectable }: CollectableProps) => (
  <div>
    <h1>Detail for {collectable.name}</h1>
    <p>ID: {collectable.id}</p>
  </div>
);

export default Single;
