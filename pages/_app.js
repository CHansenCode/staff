import React from 'react';

import Layout from 'Layout/Layout';

import { useLang } from 'lib';

import 'styles/style.scss';

export const Locale = React.createContext();

function MyApp({ Component, pageProps }) {
  const { lang, setLang } = useLang();
  return (
    <Locale.Provider value={'swe'}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Locale.Provider>
  );
}

export default MyApp;
