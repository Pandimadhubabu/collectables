import React, { ReactNode } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import Footer from './Footer';
import Nav from './Nav';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Collectables' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    </Head>

    <div className="h-screen flex-1 overflow-auto">
      <Nav />

      <div className="pt-6">{children}</div>

      <Footer />
    </div>
  </>
);

export default Layout;
