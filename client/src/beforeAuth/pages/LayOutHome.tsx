import { Outlet, NavLink } from 'react-router-dom';
import styles from './scss/layOutHome.module.scss';
export default function layOutHome() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.menu}>
            <section className={styles.menu__main}>
              <NavLink to={`/`}>Home</NavLink>
              <NavLink to={`/about`}>About</NavLink>
            </section>
            <section className={styles.menu__sub}>
              <NavLink to={`/signIn`}>Login</NavLink>
            </section>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
