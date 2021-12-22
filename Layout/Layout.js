import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { useColors, useLang } from 'lib';

import Main from './Main';
import Nav from './Nav/Nav';

import css from './Layout.module.scss';

export default function Layout({ children }) {
  const { colors, setColors } = useColors();
  const { lang, setLang } = useLang();
  return (
    <>
      <Head>
        <title>Staff Up</title>
        <meta name="description" content="Portfolio / cv page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav lang={lang} setLang={setLang} colors={colors} />

      <Main colors={colors}>{children}</Main>
    </>
  );
}
