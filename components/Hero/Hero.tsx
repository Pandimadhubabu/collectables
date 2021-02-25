import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import Button from '../Button';

type Props = {
  photo: string;
};

const Hero = ({ photo }: Props) => (
  <section className="container px-4 py-24 mx-auto">
    <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12">
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
        A collectables website
      </h1>
      <p className="px-3 lg:px-24 mb-6 text-lg md:text-xl text-gray-600 dark:text-gray-200">
        Collectables lists old Macs and iDevices from my collection
      </p>
      <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
        <Button href="/collectables" Icon={MdArrowForward} size="large">
          All collectables
        </Button>
      </div>
    </div>
    <div className="w-full mx-auto mt-24 text-center md:w-10/12">
      <Image
        alt="A random item of the collection"
        className="w-full rounded-xl shadow-2xl"
        height="480"
        layout="responsive"
        src={photo}
        width="640"
      />
    </div>
  </section>
);

export default Hero;
