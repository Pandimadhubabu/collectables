import Link from 'next/link';
import { useState } from 'react';

import { MdMenu, MdLayers, MdLaptopMac, MdTabletMac } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 flex-wrap">
          <Link href="/">
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <MdLayers className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
              <span className="ml-3 text-xl">Collectables</span>
            </span>
          </Link>

          <button
            aria-label="Show mobile menu"
            className="sm:hidden cursor-pointer"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu />
          </button>

          <nav
            aria-label="Main navigation"
            className={`${
              isOpen ? 'fixed top-16 w-full bg-white ' : 'hidden'
            } md:flex flex-grow border-t md:border-t-0 md:py-0 md:mt-0 md:ml-5`}
          >
            <ul className="flex flex-col md:flex-row md:flex-grow">
              <li className="md:mx-2">
                <Link href="/categories/computer">
                  <span className="flex items-center mr-1">
                    <MdLaptopMac className="text-lg mr-1" />
                    Computers
                  </span>
                </Link>
              </li>
              <li className="md:mx-2 flex-grow">
                <Link href="/categories/idevice">
                  <span className="flex items-center mr-1">
                    <MdTabletMac className="text-lg mr-1" />
                    iDevices
                  </span>
                </Link>
              </li>
              <li className="mt-2 pt-4 border-t-2 md:mt-0 md:pt-0 md:border-t-0">
                <Link href="/about">
                  <span className="border px-4 py-2 rounded-lg">About</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
