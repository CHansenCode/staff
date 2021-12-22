import { useState, useEffect } from 'react';

export const useLang = () => {
  const [lang, setLang] = useState('swe');

  return { lang: lang, setLang: setLang };
};
