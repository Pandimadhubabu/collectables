import Link from 'next/link';

const Nav = () => (
  <header className="sticky top-0 bg-white">
    <div className="container mx-auto px-4 border-b">
      <div className="flex items-center justify-between py-4 flex-wrap">
        <h1 className="text-2xl text-gray-900 tracking-wide uppercase">
          <Link href="/">Collectables</Link>
        </h1>

        <button
          aria-label="Show mobile menu"
          className="sm:hidden cursor-pointer"
          id="menu-button"
          type="button"
        >
          Open
        </button>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex flex-grow bg-white border-t-2 mt-2 py-2 md:border-t-0 md:py-0 md:mt-0 md:ml-5"
          id="menu-container"
        >
          <ul className="flex flex-col md:flex-row md:flex-grow">
            <li className="md:mx-2">
              <Link href="/collectables">
                <span className="underline text-purple-800 text-sm font-semibold hover:text-purple-800 mb-1">
                  All
                </span>
              </Link>
              <Link href="/categories/computer">
                <span className="underline text-purple-800 text-sm font-semibold hover:text-purple-800 mb-1">
                  Computers
                </span>
              </Link>
              <Link href="/categories/idevice">
                <span className="underline text-purple-800 text-sm font-semibold hover:text-purple-800 mb-1">
                  iDevices
                </span>
              </Link>
            </li>
            <li className="mt-2 pt-4 border-t-2 md:mt-0 md:pt-0 md:border-t-0">
              <Link href="/about">
                <span className="open-dialog text-gray-700 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-800 hover:border-purple-600">
                  About
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Nav;
