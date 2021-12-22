import React from 'react';

import css from './Nav.module.scss';

import Links from './Links/Links';

import { Logo } from 'public';

export default function Nav({ lang, setLang, colors }) {
  return (
    <header className={css.header}>
      <nav>
        <div>
          <Logo height="2.6rem" />
        </div>

        <div> cow </div>

        <Links />
      </nav>
    </header>
  );
}
