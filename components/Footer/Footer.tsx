import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

const Footer = () => (
  <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-700 body-font border-t dark:border-gray-600">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Collectables</span>
      </span>
      <p className="text-sm text-gray-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:dark:border-gray-700 sm:py-2 sm:mt-0 mt-4">
        <a
          className="text-gray-600 ml-1"
          href="https://leonardofaria.net"
          target="_blank"
        >
          Leonardo Faria
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          className="ml-3 text-gray-500"
          href="https://github.com/leonardofaria/collectables"
        >
          <GrGithub className="w-5 h-5" />
        </a>
        <a className="ml-3 text-gray-500" href="https://twitter.com/leozera">
          <GrTwitter className="w-5 h-5" />
        </a>
        <a className="ml-3 text-gray-500" href="https://linkedin.com">
          <GrLinkedinOption className="w-5 h-5" />
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
