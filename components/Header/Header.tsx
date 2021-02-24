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
        <div className="flex items-center justify-between py-4 flex-wrap">
          <Logo />

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
              isOpen ? 'fixed top-16 w-full bg-white dark:bg-black ' : 'hidden'
            } md:flex flex-grow border-t md:border-t-0 md:py-0 md:mt-0 md:ml-5`}
          >
            <ul className="flex flex-col md:flex-row flex-grow md:items-center">
              <li className="md:mx-2">
                <Link href="/categories/computer">
                  <span className="flex items-center mr-1 cursor-pointer">
                    <MdLaptopMac className="text-lg mr-1" />
                    Computers
                  </span>
                </Link>
              </li>
              <li className="md:mx-2 flex-grow">
                <Link href="/categories/idevice">
                  <span className="flex items-center mr-1 cursor-pointer">
                    <MdTabletMac className="text-lg mr-1" />
                    iDevices
                  </span>
                </Link>
              </li>
              <li className="mt-2 pt-4 border-t-2 md:mt-0 md:pt-0 md:border-t-0">
                <Button href="/about">About</Button>
              </li>
              <li className="mt-2 pt-4 border-t-2 md:mt-0 md:pt-0 md:border-t-0">
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
