import createCache from '@emotion/cache';
import './global.css';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  StyledEngineProvider,
  ThemeProvider,
  Theme,
} from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';

import React from 'react';

import { theme } from 'theme';



export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   document.body.style.fontSize = '16px';

  //   if (jssStyles) {
  //       log.info('_app', 'removed server side generated styles');
  //       jssStyles.parentElement!.removeChild(jssStyles);
  //   }
  // }, []);

  const cache = createCache({
    key: 'css',
    prepend: true,
  });

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cache}>
          <Head>
            <title>Qubehash</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StyledEngineProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  );
}
