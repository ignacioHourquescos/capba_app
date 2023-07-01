import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/common/components/layouts/main/MainLayout';
import { NextPageWithLayout } from '@/common/types/page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DateCalendarServerRequest from './components/Calendar';

interface HomeProps {}

const Agenda: NextPageWithLayout<HomeProps> = (props) => {
  const color = 'white';
  const theme = createTheme({
    // components: {
    //   MuiIconButton: {
    //     styleOverrides: {
    //       sizeMedium: {
    //         color,
    //       },
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       root: {
    //         color,
    //       },
    //     },
    //   },
    //   MuiInputLabel: {
    //     styleOverrides: {
    //       root: {
    //         color,
    //       },
    //     },
    //   },
    //   MuiPickersDay: {
    //     styleOverrides: {
    //       root: {
    //         color,
    //       },
    //     },
    //   },
    //   MuiTypography: {
    //     styleOverrides: {
    //       root: {
    //         color,
    //       },
    //     },
    //   },
    //   MuiDayCalendar: {
    //     styleOverrides: {
    //       root: {
    //         color,
    //       },
    //     },
    //   },
    // },
  });
  return (
    <>
      <Head>
        <title>CAPBA</title>
        <meta name="description" key="desc" />
      </Head>{' '}
      <ThemeProvider theme={theme}>
        <DateCalendarServerRequest />
      </ThemeProvider>
    </>
  );
};

Agenda.getLayout = (page) => {
  return <MainLayout {...page.props}>{page}</MainLayout>;
};

export default Agenda;
