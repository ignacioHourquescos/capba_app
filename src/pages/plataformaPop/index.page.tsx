import React, { useContext, useEffect } from 'react';
import Head from 'next/head';

import MainLayout from '@/common/components/layouts/main/MainLayout';
import { NextPageWithLayout } from '@/common/types/page';
import PrimaryTitle from '@/common/components/title/primary-tittle/PrimaryTitle';
import SecondaryButton from '@/common/components/buttons/secondary/SecondaryButton';
import ButtonPanel from '@/common/components/buttons/button-panel/ButtonPanel';
import PrimaryButton from '@/common/components/buttons/primary/Primary';
import buttonRouter from '@/lib/fake-api/fakeApi';
import Link from 'next/link';

interface HomeProps {}

const Home: NextPageWithLayout<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>CAPBA</title>
        <meta name="description" key="desc" />
      </Head>
      <Link href="/">
        <SecondaryButton>&#8592; Menu principal</SecondaryButton>
      </Link>
      <PrimaryTitle>Plataforma Pop</PrimaryTitle>
      <ButtonPanel col={1}>
        {buttonRouter.plataformaPop.map((element, idx) => (
          <Link key={idx} href={`${element.url}`}>
            <PrimaryButton title={element.title} />
          </Link>
        ))}
      </ButtonPanel>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout {...page.props}>{page}</MainLayout>;
};

export default Home;
