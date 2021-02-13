import ListItem from './ListItem';
import { Collectable } from '../../interfaces';

type Props = {
  items: Collectable[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
