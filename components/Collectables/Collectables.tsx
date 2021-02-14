import ListItem from './ListItem';
import { Collectable } from '../../interfaces';

type Props = {
  items: Collectable[];
  categoryName?: string;
};

const Collectables = ({ items, categoryName }: Props) => (
  <div>
    <h2>{categoryName || 'All'}</h2>

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  </div>
);

export default Collectables;
