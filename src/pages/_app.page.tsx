import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../common/types/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function capbaApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default capbaApp;
