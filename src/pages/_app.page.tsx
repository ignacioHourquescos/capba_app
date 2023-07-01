import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../common/types/page';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { esES } from '@mui/material/locale';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  esES
);

function capbaApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}

export default capbaApp;
