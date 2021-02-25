import Logo from '@components/Logo';
import ThemeChanger from '@components/ThemeChanger';
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu, MdLaptopMac, MdTabletMac } from 'react-icons/md';
import Button from '../Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-black border-b dark:border-gray-600 z-50 bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between md:justify-center py-4 flex-wrap">
          <Logo />

          <button
            aria-label="Show mobile menu"
            className="sm:hidden cursor-pointer inline-flex items-center justify-center w-10 h-10 text-black dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="w-5 h-5" />
          </button>

          <nav
            aria-label="Main navigation"
            className={`${
              isOpen
                ? 'fixed top-16 right-0 bg-white dark:bg-black p-5 flex flex-col md:flex-row'
                : 'hidden'
            } md:flex flex-grow md:py-0 md:mt-0 md:ml-5`}
          >
            <ul className="flex flex-col md:flex-row flex-grow md:items-center md:justify-center">
              <li className="md:mx-2">
                <Link href="/categories/computer">
                  <span className="flex items-center mr-1 cursor-pointer">
                    <MdLaptopMac className="text-lg mr-1" />
                    Computers
                  </span>
                </Link>
              </li>
              <li className="md:mx-2">
                <Link href="/categories/idevice">
                  <span className="flex items-center mr-1 cursor-pointer">
                    <MdTabletMac className="text-lg mr-1" />
                    iDevices
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row md:items-center">
              <li className="mt-2 pt-4 md:mt-0 md:pt-0">
                <Button href="/about">About</Button>
              </li>
              <li className="mt-2 pt-4 md:mt-0 md:pt-0">
                <ThemeChanger />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
