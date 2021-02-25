import Image from 'next/image';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Collectable } from '../../interfaces';

type CollectableProps = {
  item: Collectable;
};

const Single = ({ item: collectable }: CollectableProps) => (
  <section className="max-w-2xl lg:max-w-6xl mx-auto my-20">
    <div className="flex flex-col lg:flex-row -mx-4">
      <div className="lg:w-1/2 mx-6">
        <Image
          alt={collectable.name}
          className="w-full md:mb-6 md:rounded-xl shadow-sm"
          height="480"
          layout="responsive"
          src={collectable.photo}
          width="640"
        />
      </div>
      <div className="lg:w-1/2 mx-6 p-4 md:p-0">
        <h1 className="text-4xl font-extrabold mb-6">{collectable.name}</h1>
        <p className="text-lg my-8">{collectable.notes}</p>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="mt-7 pt-7 flex flex-col md:w-1/2 mx-4 border-t border-gray-300">
            <span className="text-gray-500 text-xl">Bought at</span>
            <span className="text-2xl font-bold">{collectable.boughtAt}</span>
          </div>

          <div className="mt-7 pt-7 flex flex-col md:w-1/2 mx-4 border-t border-gray-300">
            <span className="text-gray-500 text-xl">Current OS</span>
            <span className="text-2xl font-bold">
              {collectable.currentOs || 'Unknown'}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="mt-7 pt-7 flex flex-col md:w-1/2 mx-4 border-t border-gray-300">
            <span className="text-gray-500 text-xl">Minimum OS</span>
            <span className="text-2xl font-bold">
              {collectable.minimumOs || 'Unknown'}
            </span>
          </div>

          <div className="mt-7 pt-7 flex flex-col md:w-1/2 mx-4 border-t border-gray-300">
            <span className="text-gray-500 text-xl">Maximum OS</span>
            <span className="text-2xl font-bold">
              {collectable.maximumOs || 'Unknown'}
            </span>
          </div>
        </div>
        <a
          className="text-lg mt-8 flex inline-flex items-center text-blue-700"
          href={collectable.reference}
          target="_blank"
        >
          Read more about this item at EveryMac
          <BsBoxArrowUpRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  </section>
);

export default Single;
