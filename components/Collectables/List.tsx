import ListItem from './ListItem';
import { Collectable } from '../../interfaces';

type Props = {
  items: Collectable[];
};

const List = ({ items }: Props) => (
  <>
    {items.map((item) => (
      <div className="" key={item.id}>
        <ListItem collectable={item} />
      </div>
    ))}
  </>
);

export default List;
