import ListItem from './ListItem';
import { Collectable } from '../../interfaces';

type Props = {
  items: Collectable[];
  categoryName?: string;
};

const Collectables = ({ items, categoryName }: Props) => (
  <section>
    <header className="max-w-2xl lg:max-w-5xl mx-auto my-20">
      <h1 className="text-4xl font-extrabold px-4 md:px-0">
        {categoryName || 'All collectables'}
      </h1>
    </header>

    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 py-20">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="flex flex-wrap -mx-2">
          {items.map((item) => (
            <ListItem collectable={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Collectables;
