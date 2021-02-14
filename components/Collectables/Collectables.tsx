import ListItem from './ListItem';
import { Collectable } from '../../interfaces';

type Props = {
  items: Collectable[];
  categoryName?: string;
};

const Collectables = ({ items, categoryName }: Props) => (
  <section className="lg:pt-20">
    <div className="mx-auto container mb-16">
      <h1 className="text-4xl font-extrabold">
        {categoryName || 'All collectables'}
      </h1>
    </div>

    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="mx-auto container flex flex-wrap overflow-hidden">
        {items.map((item) => (
          <div
            className="w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2"
            key={item.id}
          >
            <ListItem collectable={item} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Collectables;
