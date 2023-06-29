import { NextPageWithLayout } from '../common/types/page';
import MainLayout from '../common/components/layouts/main/MainLayout';
import React, { useContext, useEffect } from 'react';
import Head from 'next/head';

import HomeContent from './home';

interface HomeProps {}

const Home: NextPageWithLayout<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>CAPBA</title>
        <meta name="description" key="desc" />
      </Head>
      <HomeContent />
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout {...page.props}>{page}</MainLayout>;
};

export default Home;
