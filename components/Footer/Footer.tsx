import Logo from '@components/Logo';
import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

const Footer = () => (
  <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-700 body-font border-t dark:border-gray-600">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Logo />
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
          <GrGithub className="w-5 h-5" title="GitHub" />
        </a>
        <a className="ml-3 text-gray-500" href="https://twitter.com/leozera">
          <GrTwitter className="w-5 h-5" title="Twitter" />
        </a>
        <a className="ml-3 text-gray-500" href="https://linkedin.com">
          <GrLinkedinOption className="w-5 h-5" title="Linkedin" />
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
