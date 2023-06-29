import Head from 'next/head';
import React, { useState } from 'react';

import { Menu, Content } from './styles';

import Header from '../../navigation/header/Header';
import Footer from '../../navigation/footer/Footer';

export interface IMainLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
  title?: 'string';
}

const MainLayout: React.FC<IMainLayout> = ({
  justify = 'items-center',
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" key="desc" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta name="robots" content="" />
      </Head>

      <Header />
      <Content.Inner>{children}</Content.Inner>

      <Footer />
    </>
  );
};

export default MainLayout;
