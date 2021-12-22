import React from 'react';

import { navLinks } from 'config';

import { Locale } from 'pages/_app';

import css from './Links.module.scss';

export default function Links({ lang }) {
  const loc = React.useContext(Locale);
  return (
    <ul className={css.ul}>
      {navLinks.map((link, i) => (
        <NextLink
          key={`${link.name}${i}`}
          href={link.href}
          name={link.name[loc]}
        />
      ))}
    </ul>
  );
}

const NextLink = ({ name, href }) => {
  return (
    <li>
      {name}
      {href}
    </li>
  );
};
