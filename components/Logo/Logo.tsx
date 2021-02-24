import Link from 'next/link';
import { MdLayers } from 'react-icons/md';

const Logo = () => (
  <Link href="/">
    <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
      <MdLayers className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
      <span className="ml-3 text-xl dark:text-white">Collectables</span>
    </span>
  </Link>
);

export default Logo;
