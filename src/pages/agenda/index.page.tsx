import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/common/components/layouts/main/MainLayout';
import { NextPageWithLayout } from '@/common/types/page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DateCalendarServerRequest from './components/Calendar';
import SecondaryButton from '@/common/components/buttons/secondary/SecondaryButton';
import Link from 'next/link';
import PrimaryTitle from '@/common/components/title/primary-tittle/PrimaryTitle';

interface HomeProps {}

const Agenda: NextPageWithLayout<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>CAPBA</title>
        <meta name="description" key="desc" />
      </Head>{' '}
      <Link href="/">
        <SecondaryButton>&#8592; Menu principal</SecondaryButton>
      </Link>
      <PrimaryTitle>Calendario Distrito 2</PrimaryTitle>
      <DateCalendarServerRequest />
    </>
  );
};

Agenda.getLayout = (page) => {
  return <MainLayout {...page.props}>{page}</MainLayout>;
};

export default Agenda;
