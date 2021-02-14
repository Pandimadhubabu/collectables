import { ReactNode, ElementType } from 'react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  href: string;
  Icon?: ElementType;
  size?: 'large';
};

const Button = ({ children, href, Icon, size }: Props) => {
  let buttonClassNames =
    'inline-flex items-center justify-center w-auto text-base font-medium text-white bg-indigo-600 leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out';

  if (size === 'large') {
    buttonClassNames += `mb-2 sm:mb-0 px-5 md:px-6 py-3 md:py-3 md:text-lg`;
  }

  return (
    <Link href={href}>
      <span className={buttonClassNames}>
        {children}
        {Icon && <Icon className="text-white w-5 h-5 ml-2" />}
      </span>
    </Link>
  );
};

export default Button;
