import css from './Nav.module.scss';

export default function Nav({ lang, setLang, colors }) {
  return (
    <header className={css.header}>
      <nav>
        <div>logo</div>
        <div>links</div>
      </nav>
    </header>
  );
}
